<!-- Parent: ../AGENTS.md -->

# blog/

Docusaurus 博客内容根目录。文章为 Markdown，按主题分子目录发布。

## Current Layout

| 目录 | 说明 |
|------|------|
| `Nodejs/` | Node/npm 相关 |
| `React/` | React 相关 |
| `Ts/` | TypeScript 相关 |
| `Docker/` | Docker 命令与用法 |
| `Linux/` | Linux 环境 |
| `Windows/` | Windows/PowerShell |
| `Others/` | 工具、CI、速查等 |
| `AI/` | AI 相关 |
| `authors.yml` | 作者元数据 |

当前约 **17** 篇 `.md` 文章（以仓库实际文件为准）。

## Tags

Frontmatter `tags` 只用**英文小写 slug**。Docusaurus 3 用 lodash `kebabCase` 生成标签页路径，所以标签字符串必须已经是目标 slug：`AI` 会落到 `/blog/tags/ai`，但 `TypeScript` 会落到 `/blog/tags/type-script`，和 `typescript` 拆成两页。

每篇一个主标签，与所在目录对齐；只有文章确实跨主题时再加次标签，最多 2 个。次标签也必须来自下表。不要再使用 `npm`、`yarn`、`ts`、`hooks`、`Powershell`、`Test`、`Jest` 等会拆页或与主标签重复的写法。文章 `slug` 保持不变，只改 `tags`。

| 目录 | 主标签 | 标签页 |
|------|--------|--------|
| `AI/` | `ai` | `/blog/tags/ai` |
| `Docker/` | `docker` | `/blog/tags/docker` |
| `Linux/` | `linux` | `/blog/tags/linux` |
| `Nodejs/` | `nodejs` | `/blog/tags/nodejs` |
| `React/` | `react` | `/blog/tags/react` |
| `Ts/` | `typescript` | `/blog/tags/typescript` |
| `Windows/` | `windows` | `/blog/tags/windows` |
| `Others/` | 按内容选 `github` 或 `testing`；若正文属于上表已有主题（如 npm/yarn 命令速查），主标签用该主题（`nodejs`） | `/blog/tags/<slug>` |

导航「分类」下拉列出上表里已有文章的标签页。「AI」同时保留为顶栏第一项，仍指向 `/blog/tags/ai`。

## Conventions

- 新文章放在对应主题子目录，文件名可用中文；Docusaurus 会生成 slug。`tags` 按上一节填写，不要新开同义标签。
- 工具使用指南放在 `docs/guides/`（站点分类「技术文档」），不要放进 `blog/`。
- 建议在长文合适位置添加 `<!-- truncate -->`，否则 `pnpm build` 会警告 `onUntruncatedBlogPosts`（不阻断构建）。
- 文内锚点需与标题生成的 id 一致，否则可能出现 `onBrokenAnchors` 警告。
- 不要在此目录放非 Markdown 构建依赖或密钥。

## Local Notes

<!-- 例如：发文流程、标签规范、是否启用博客 RSS 等 -->
