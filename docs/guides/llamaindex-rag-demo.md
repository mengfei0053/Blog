---
sidebar_position: 12
title: "用一份可运行的 LlamaIndex 服务看懂 RAG"
sidebar_label: "llamaindex-rag-示例"
description: "以 FastAPI + LlamaIndex + Chroma 的公开示例为线索：文档如何切块、为什么向量在本地算、对话为什么走 OpenAI 兼容代理，以及三个 HTTP 接口实际返回什么。"
---

# 用一份可运行的 LlamaIndex 服务看懂 RAG

**一句话定位：** [llamaindex-rag-demo](https://github.com/mengfei0053/llamaindex-rag-demo) 把三份虚构公司文档建成向量索引，用 FastAPI 回答问题，并在响应里带回出处。向量在进程内用 FastEmbed 计算，对话走一个只提供 chat 的 OpenAI 兼容代理。

线上实例：<http://132.145.20.203:8000>。写作时 `GET /health` 返回 `index_ready: true`、`chunks: 3`。接口形状和下面的代码路径对应仓库提交 [`8acf189`](https://github.com/mengfei0053/llamaindex-rag-demo/commit/8acf18965224302669cb1f68ba03de49d72a9394)。

语料是「北辰软件 / Northstar Software」的说明，产品叫岚图协作。它用来把检索路径走通。价格、退款和工时都是编的。

---

## 一、检索怎样改变回答

检索增强生成（RAG）把两步固定下来：先从你自己的文档里找出相关片段，再让模型只根据这些片段写答案。事实来自放进 `data/` 的文件，模型负责措辞，响应里可以带回出处。

同一份对话模型，不附文档时只能靠参数里的常识。接上这个服务之后，答案被限制在检索到的片段里。用线上 `/query` 可以直接看两种结果：

| 问题 | 文档里有没有 | 线上行为 |
|---|---|---|
| 专业版多少钱？ | 有。`data/product.md` 写着每人每月 99 元 | 答出 99 元，`sources` 里带有 `product.md` |
| 公司年假有几天？ | 没有 | 说明资料里没有，不编天数 |

第二条来自提示词。`app/rag.py` 的 `QA_TEMPLATE` 要求三件事：只根据给出的上下文回答；上下文里没有就说不知道；用提问的语言作答。问年假时，模型没有从「杭州、成立于 2019」推出一个天数。

---

## 二、流水线

入库和提问共用 Chroma collection `company_docs`。

| 步骤 | 在这个示例里 |
|---|---|
| 读取 | `SimpleDirectoryReader` 递归读取 `DATA_DIR` 下的 `.md`、`.txt`、`.markdown` |
| 切块 | `chunk_size = 512`，`chunk_overlap = 64`（LlamaIndex 按 token 计） |
| 向量化 | `EMBEDDING_PROVIDER=local` 时用 FastEmbed，模型 `BAAI/bge-small-zh-v1.5`（ONNX，约 90MB，512 维） |
| 写入 | Chroma 持久化到 `STORAGE_DIR`，距离为 cosine（`hnsw:space`） |
| 检索 | 问题用同一套向量模型编码，取 `top_k = 3` |
| 生成 | 片段填进 `QA_TEMPLATE`，对话模型写出 `answer`；命中片段回到 `sources`，正文截到 1200 字 |

三份样例都很短。线上索引的 `chunks` 是 3，每个文件一整段，切分器没有再切开。`top_k` 写在 `AppConfig` 里，默认 3，和语料块数相同，所以每次提问都会把三份文档全部取回。分数挤在一起，写作时大约 0.52–0.60。把「99 元」和「不知道年假」分开的是提示词。语料变大以后，`top_k` 才会开始丢掉无关块。

提问路径：

```mermaid
flowchart LR
  Q["POST /query"] --> Emb["用同一套向量模型编码问题"]
  Emb --> Store["Chroma company_docs<br/>cosine，top_k = 3"]
  Store --> Prompt["QA_TEMPLATE<br/>只根据这些片段作答"]
  Prompt --> LLM["OpenAI 兼容对话接口"]
  LLM --> Out["answer + sources"]
```

---

## 三、代码怎样接上

```text
app/config.py       读环境变量，得到 AppConfig
app/embeddings.py   仅 local 模式加载 FastEmbed
app/rag.py          建索引、检索、拼提示词
app/main.py         FastAPI：/health、/query、/ingest
data/               faq.md、product.md、support.md
```

`data/faq.md` 是公司、工时、试用和发票，`data/product.md` 是岚图协作的版本、价格和数据驻留，`data/support.md` 是支持时效、可用性目标和退款。

### 配置

[`app/config.py`](https://github.com/mengfei0053/llamaindex-rag-demo/blob/8acf18965224302669cb1f68ba03de49d72a9394/app/config.py) 的 `load_config()` 把密钥、代理地址、对话模型、向量提供方和两个目录收成一个冻结的 `AppConfig`。`EMBEDDING_PROVIDER` 只接受 `openai` 或 `local`。`OPENAI_BASE_URL` 会去掉末尾斜杠；指向本地代理时，地址里要带 `/v1`。

| 变量 | 默认 | 这次线上部署 |
|---|---|---|
| `EMBEDDING_PROVIDER` | `openai` | `local` |
| `LOCAL_EMBED_MODEL` | `BAAI/bge-small-zh-v1.5` | 同左 |
| `OPENAI_EMBED_MODEL` | `text-embedding-3-small` | 不调用 |
| `OPENAI_MODEL` | `gpt-4o-mini` | 代理上的 Claude 模型 id |
| `DATA_DIR` / `STORAGE_DIR` | `./data`、`./storage` | 容器内 `/app/data`、`/app/storage` |

`top_k` 没有对应的环境变量。要改检索条数，直接改 `AppConfig`。

### 向量

[`app/embeddings.py`](https://github.com/mengfei0053/llamaindex-rag-demo/blob/8acf18965224302669cb1f68ba03de49d72a9394/app/embeddings.py) 的 `build_local_embed_model()` 只在 local 模式被导入。它先建缓存目录，再构造 LlamaIndex 的 `FastEmbedEmbedding`。`openai` 那条路径不会加载 ONNX。

第一次以 local 启动时，进程把模型下载到 `FASTEMBED_CACHE_PATH`。本机默认是 `~/.cache/fastembed`，Compose 把宿主机的 `./fastembed-cache` 挂到容器内 `/app/fastembed-cache`。镜像里不带权重，第一次需要能访问 Hugging Face 上的 `Qdrant/bge-small-zh-v1.5`，或 `storage.googleapis.com`。下载完成后保留这个目录。

### 索引和提问

[`app/rag.py`](https://github.com/mengfei0053/llamaindex-rag-demo/blob/8acf18965224302669cb1f68ba03de49d72a9394/app/rag.py) 里的 `RagService` 做四件事。

1. `_configure_models()` 在缺少 `OPENAI_API_KEY` 时抛出 503。对话客户端始终按 OpenAI 兼容接口创建。`embedding_provider == "local"` 时，`Settings.embed_model` 换成 FastEmbed；否则用 `OpenAIEmbedding` 请求 `/v1/embeddings`。
2. `ensure_index()` 在三种情况下重建 collection：里面还没有块、调用方传入 `rebuild=True`、或者元数据里的 `embedding_provider` / `embedding_model` 和当前配置不一致。重建会删掉 `company_docs`，再读 `data/` 写入。元数据里还没有这两项的旧索引会继续沿用。
3. 新建走 `VectorStoreIndex.from_documents`，已有库走 `from_vector_store`。Chroma 使用 `PersistentClient`，并关闭匿名遥测。
4. `query()` 调用 `as_query_engine(similarity_top_k=..., text_qa_template=QA_TEMPLATE)`。`file_name` 来自节点 metadata，`score` 是这次检索的分数。

进程内有一把锁，避免启动建库和 `POST /ingest` 同时写同一个 collection。

### 三个接口

[`app/main.py`](https://github.com/mengfei0053/llamaindex-rag-demo/blob/8acf18965224302669cb1f68ba03de49d72a9394/app/main.py) 的 `create_app()` 在 lifespan 里起一个后台线程调用 `ensure_index()`。第一次向量化（包括下载 ONNX）期间，`/health` 仍然立刻返回。没有密钥时不建索引，进程可以启动，`index_ready` 为 false，`/query` 和 `/ingest` 返回 503。

| 方法 | 路径 | 请求 | 响应 |
|---|---|---|---|
| `GET` | `/health` | 无 | `status`、`index_ready`、`chunks`、`error` |
| `POST` | `/query` | `{"question": "..."}`，1–4000 字 | `answer`，以及 `sources[]`（`file_name`、`score`、`text`） |
| `POST` | `/ingest` | 空 body | 清空后重建，返回 `documents` 和 `chunks` |

检索或上游失败时，`/query` 和 `/ingest` 返回 502，body 里是错误说明。

写作时对线上提问「专业版多少钱？」，答案是每人每月 99 元。三份文档都在 `sources` 里。含价格的那条是：

```json
{
  "file_name": "product.md",
  "score": 0.529,
  "text": "专业版：最多 50 名成员，每人每月 99 元，100 GB 存储空间。"
}
```

当时 `product.md` 的分数低于 `faq.md`（约 0.555）。答案仍然落在价格那一行，因为三份全文都进了上下文。`sources` 按检索分数排列，第一项不一定是作答时用到的那一句。

---

## 四、向量在本地，对话走代理

这次部署前面是一个 OpenAI 兼容代理（CPA）。它提供对话补全，模型 id 是 Claude 的；`/v1/embeddings` 返回 404。

两条调用因此拆开：

- 入库和检索的向量在容器里用 FastEmbed 计算。local 模式不会请求 `OPENAI_EMBED_MODEL`。
- 生成回答仍然读取 `OPENAI_API_KEY`、`OPENAI_BASE_URL` 和 `OPENAI_MODEL`。这把密钥只用来构造对话客户端。

LlamaIndex 自带的 `OpenAI` LLM 会按模型名查上下文长度。Claude 的 id 不在那张表里，读取 metadata 时会抛 `ValueError`，请求发不出去。`ProxyChatLLM` 接住这个异常，填一份 `context_window = 200_000` 的 metadata。HTTP 仍走原来的 OpenAI 兼容客户端，温度是 `0.1`。

换向量模型后，collection 元数据对不上，下次 `ensure_index()` 会自己重建。只换对话模型不会动索引。

`requirements.txt` 钉住 `llama-index-core`、`llama-index-embeddings-fastembed`、`fastembed` 和 `llama-index-llms-openai`。运行时是 ONNX Runtime。Python 使用 3.10 到 3.12，镜像是 3.12。当前的 `llama-index-embeddings-fastembed` 还不能装在 3.13 上。

---

## 五、运行和调用

仓库地址：<https://github.com/mengfei0053/llamaindex-rag-demo>。密钥放在本机 `.env`，不要提交。`.env.example` 里的键是空的。

```bash
git clone https://github.com/mengfei0053/llamaindex-rag-demo.git
cd llamaindex-rag-demo
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

代理只有对话时，`.env` 写成：

```bash
EMBEDDING_PROVIDER=local
OPENAI_API_KEY=你的代理密钥
OPENAI_BASE_URL=http://代理地址/v1
OPENAI_MODEL=代理提供的 Claude 模型 id
```

启动：

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

在仓库根目录也可以 `docker compose up --build`。`./data` 以只读方式挂进容器，索引写到 `./storage`，ONNX 缓存在 `./fastembed-cache`。改完文档后调用一次 `POST /ingest`。

对本机：

```bash
curl -s http://127.0.0.1:8000/health

curl -s http://127.0.0.1:8000/query \
  -H 'Content-Type: application/json' \
  -d '{"question":"专业版多少钱？"}'

curl -s http://127.0.0.1:8000/query \
  -H 'Content-Type: application/json' \
  -d '{"question":"What is the refund window?"}'

curl -s -X POST http://127.0.0.1:8000/ingest
```

线上同一组读接口。`POST /ingest` 会清空并重建那台机器上的索引，改文档时在自己的实例上调用。

```bash
curl -s http://132.145.20.203:8000/health

curl -s http://132.145.20.203:8000/query \
  -H 'Content-Type: application/json' \
  -d '{"question":"专业版多少钱？"}'
```

英文问题用英文回答。写作时「What is the refund window?」的答案是：自付费开通之日起 7 日内可以全额退款；已经开具增值税专用发票的，要先退回发票。对应文件是 `data/support.md`。

可以继续往 `data/` 加 `.md` 或 `.txt`。PDF 和 Office 需要另加 `llama-index-readers-file`，默认读取器只收上面三种扩展名。

---

## 六、下一步

这个服务把带出处的问答跑通了，边界也露在外面：三块文档全部进入上下文，没有评测集，没有权限，检索只有稠密向量。

- **评测。** 准备一组问题，每题标定期望文件和关键句。检查期望块是否落在 top_k 里，以及答案是否被这段话支撑。年假这种应当拒答的题要单独计分。
- **混合检索。** 价格、天数、邮箱这类原词，关键词或 BM25 往往更稳；稠密向量负责改写后的问法。两路合并后再截断。
- **权限。** 当前是一个 collection，没有用户维度。上线前在检索之前按文档 ACL 过滤。

交付顺序见 [AI FDE 入门知识图谱](/docs/guides/ai-fde-knowledge-graph) 的「RAG / 向量库」：先做出带出处的问答，再补评测、混合检索和增量更新。
