---
slug: google-a2a
title: Google A2A 协议介绍
authors: [meng]
tags: [ai]
date: 2026-10-23
keywords: [A2A, Agent2Agent, AI Agent, MCP]
description: 介绍 Google 的 A2A（Agent2Agent）协议：它解决跨框架 Agent 协作的什么问题，Agent Card、Task、Message 这些对象怎么配合，以及它和 MCP 为什么是互补而不是替代。
---

# Google A2A 协议介绍

2025 年 4 月 9 日，Google 在 Developers Blog 上发布了 Agent2Agent（A2A）。它是一套开放协议，让不同团队、不同框架写出来的 AI Agent 用同一种方式互相发现、交任务、拿结果。官网现在的规范在 [a2a-protocol.org](https://a2a-protocol.org/latest/topics/what-is-a2a/)。

一个助手要订国际行程，往往得同时找航班、酒店、汇率和当地活动。这些能力如果来自不同供应商，常见做法是把对方包成工具再调用。工具调用适合「给参数、拿返回值」的短操作，但 Agent 会追问、会改计划，任务也可能跑很久。每次对接都写一套点对点代码，Agent 一多就难维护，鉴权也不统一。A2A 要填的就是这个空。

<!-- truncate -->

## 它要解决什么问题

官方用行程规划把问题说得很具体：没有统一协议时，各 Agent 互相看不见能力，集成只能逐对定制。这样做有几个直接后果。

- 把 Agent 当成工具包一层，限制了它本来可以协商、澄清、长期执行的能力。
- 每接一个新 Agent 都要写专用胶水代码，系统变大之后很难扩展。
- 临时约定的通信往往没有一致的认证和授权。

A2A 的做法是：Agent 保持自己的实现，只在边界上说同一种话。对方用 LangGraph、CrewAI、Google ADK 还是别的框架，只要按协议暴露服务，客户端就按同一套对象协作。内部记忆、提示词和私有工具不用交出来。这是协议里的 opaque execution：协作靠声明的能力和共享的上下文，不靠看穿对方内部。

设计上它复用已有标准，而不是再造传输层：HTTP、JSON-RPC 2.0、Server-Sent Events（SSE）。长任务是一等公民，客户端可以断开再回来。内容也不限于纯文本，Part 可以带文件和结构化数据。

## 核心概念

交互里有三方。**User** 是提出目标的人，也可以是另一个自动化服务。**A2A Client**（client agent）代表用户发起通信。**A2A Server**（remote agent）是实现了协议的 HTTP 端点，负责处理任务并返回状态或结果。对客户端来说，远端 Agent 是黑盒。

### Agent Card

发现对方靠 **Agent Card**，一份 JSON 名片。规范约定可以从 `https://{域名}/.well-known/agent-card.json` 拉取。客户端用它判断这个 Agent 能不能接这件活、请求该发到哪、怎么认证。

卡片里至少包括名字、描述、版本、技能（`skills`）、默认可接受的输入输出媒体类型，以及 `supportedInterfaces`（按优先级列出支持的绑定，第一项是首选）。可选能力在 `capabilities` 里，例如是否支持流式（`streaming`）和推送（`pushNotifications`）。企业鉴权不另起一套：`securitySchemes` 声明 OpenID Connect、API Key 等常见方案，凭证走 HTTP 头，不塞进协议消息正文。卡片还可以带 JSON Web Signature，用来校验名片本身没有被篡改。

规范里的一张示意卡片长这样（字段以[规范](https://a2a-protocol.org/latest/specification/)为准）：

```json
{
  "name": "Example Agent",
  "description": "An example agent that echoes messages.",
  "version": "1.0.0",
  "supportedInterfaces": [
    {
      "protocolBinding": "JSONRPC",
      "protocolVersion": "1.0",
      "url": "https://example.com/a2a/v1"
    }
  ],
  "capabilities": {
    "streaming": false,
    "pushNotifications": false
  },
  "defaultInputModes": ["text/plain"],
  "defaultOutputModes": ["text/plain"],
  "skills": [
    {
      "id": "echo",
      "name": "Echo",
      "description": "Echoes the input.",
      "tags": ["echo"]
    }
  ]
}
```

### Task、Message、Part、Artifact

真正干活围着 **Task**。它是有状态的工作单元，有唯一 ID。生命周期大致是：已提交（`TASK_STATE_SUBMITTED`）、处理中（`WORKING`），中间可能停下来要补充输入（`INPUT_REQUIRED`）或补鉴权（`AUTH_REQUIRED`），结束时是完成、失败、取消或拒绝。后四种是终态。相关的多次交互可以用服务端生成的 `contextId` 串在一起。

每一轮沟通是一条 **Message**。它有 `messageId`，角色是 `user`（客户端发给服务端）或 `agent`（反过来）。正文放在若干 **Part** 里。一个 Part 必须且只能是下面四种之一：

- `text`：纯文本
- `raw`：内联字节（JSON 里是 base64）
- `url`：指向外部文件的 URI
- `data`：结构化 JSON

Part 还可以带 `mediaType`（MIME）和 `filename`。所以同一条消息里可以既有说明文字，也有一张图或一段 JSON。

任务的正式产出叫 **Artifact**，例如一份文档、一张图或一段结构化数据。它有任务内唯一的 `artifactId`，内容同样是 Part 列表。和普通消息的差别是：消息是对话的一轮，Artifact 是可以拿走的交付物。能马上答完的请求也可以直接回一条 Message，不必都升成 Task。

### 流式和推送

长任务有三种跟进方式，选哪种要看 Agent Card 打开了什么能力。

- **请求加轮询**：`SendMessage` 发出去，之后用 `GetTask` 看状态。
- **SSE 流式**：`SendStreamingMessage`。REST 绑定对应 `POST /message:stream`。连接保持打开，服务端陆续推状态更新（`TaskStatusUpdateEvent`）和产物增量（`TaskArtifactUpdateEvent`），直到完成。
- **推送**：任务很长，或者客户端不会一直挂着连接时，由服务端按客户端登记的 webhook 回调。这要求 `capabilities.pushNotifications` 为 true，否则服务端会拒绝推送相关操作。

同一套操作可以绑到 JSON-RPC 2.0、gRPC 或 HTTP/REST，语义要对齐。发消息在 REST 上是 `POST /message:send`，在 JSON-RPC 上是方法 `SendMessage`。客户端应先读 `supportedInterfaces`，用对方声明支持的那一种，不要猜路径。

## 和 MCP 的关系

A2A 和 Anthropic 的 Model Context Protocol（MCP）是互补的。Google 发布时就写了这一点，协议文档也把二者放在不同层。

MCP 解决「一个 Agent 怎么接工具和数据」。计算器、一次数据库查询，通常无状态，输入输出事先定好。A2A 解决「Agent 怎么找另一个 Agent」。对方会自己推理、追问、把活再分出去，这种多轮协作收成一次函数调用，会丢掉它作为 Agent 的部分。

可以记成：框架负责把 Agent 做出来，MCP 给它工具和上下文，运行时负责把它跑起来，A2A 负责把它接到别的 Agent 上。查一张表继续用 MCP 或普通 HTTP；把「订酒店」整段交给另一个系统里的 Agent，才是 A2A 的场景。

## 一次交互大概怎么走

1. **发现能力**。客户端请求 `/.well-known/agent-card.json`，看技能描述、输入输出媒体类型和接口地址，决定要不要把这件活交给它。
2. **按需鉴权**。卡片要求 OpenID Connect 或其他方案时，客户端按 `authorizationUrl`、`tokenUrl` 去拿凭证，之后每次请求带在 HTTP 头里。协议消息本身不携带这套凭证。
3. **派任务**。选定绑定后发送消息。能马上答完就回 Message；需要跟踪就建 Task，状态从 submitted 进入 working。
4. **协作和产出**。处理中可能变成 input-required，客户端补一轮消息再继续。流式打开时，SSE 上会看到状态事件和 Artifact 增量。客户端不在线就改用推送。结束后客户端把各 Agent 的 Artifact 汇总给用户。

取消、查询、订阅也有对应操作：`CancelTask`、`GetTask`、`ListTasks`、`SubscribeToTask`。名称在三种绑定里一致，HTTP 路径以规范里的映射表为准，例如取消是 `POST /tasks/{id}:cancel`。

官方常用的例子仍是行程规划：助手自己不订票，而是把航班、酒店、汇率、当地游览分别交给专门的 Agent，再拼成一份计划。发布说明里还有招聘寻源：按职位和技能找候选人、约面试、做背调，每一步都可以是另一个系统里的 Agent。

## 适合什么场景，以及要注意什么

它适合跨团队、跨供应商的多 Agent 流程，尤其是任务会来回澄清、会跑比较久、产出不只有一段文本的时候。企业内部已经有 OAuth 或 API Key 时，把要求写在 Agent Card 上，沿用现有身份体系即可。发布时就有五十多家技术伙伴参与，方向很明确：企业应用之间的 Agent 要能互操作，而不是每家一套私有接口。

用之前有几件事实值得记住。

- **黑盒是特性**。你看不到对方的记忆和工具，只能依赖它声明的技能和交回来的 Artifact。出了问题，能看的是任务状态和消息，不是对方仓库。
- **鉴权是声明，不是代劳**。协议对齐常见 Web 实践，token 怎么发、权限怎么分，仍要接你自己的身份系统。任务进行中缺凭证时，状态可以停在 `AUTH_REQUIRED`。
- **能力以卡片为准**。流式、推送、扩展都是可选的。对方没声明，就退回普通请求加轮询。
- **不要拿它替换工具协议**。一次确定性的 API 调用，用 MCP 或直接 HTTP 更合适。A2A 的成本在发现、任务状态和多轮上下文上。

协议细节以官网最新规范为准。2025 年 4 月的博文当时给的是草案，并说会和合作方一起做到可上生产的版本；集成时以 [specification](https://a2a-protocol.org/latest/specification/) 里的对象和绑定表为准，不要凭发布当天的草稿猜字段名。

## 参考

- [What is A2A?](https://a2a-protocol.org/latest/topics/what-is-a2a/)
- [A2A Protocol Specification](https://a2a-protocol.org/latest/specification/)
- [Core Concepts](https://a2a-protocol.org/latest/topics/key-concepts/)
- [Announcing the Agent2Agent Protocol（Google Developers Blog，2025-04-09）](https://developers.googleblog.com/a2a-a-new-era-of-agent-interoperability/)
