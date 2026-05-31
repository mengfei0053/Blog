<!-- Parent: ../AGENTS.md -->

# scripts/

构建后运维脚本，不参与 Docusaurus 编译。

## Current Layout

- `push-baidu.js` — 读取 `build/sitemap.xml`，解析 URL 列表，POST 到百度站长「主动推送」接口

## Conventions

- 必须在 **`pnpm build` 成功之后** 运行（依赖 `build/sitemap.xml`）。
- 百度 token 通过环境变量 **`BAIDU_ZZ`** 注入，**禁止**将 token 写入仓库或提交到 git。
- 使用 `axios`（v1 API：`axios.post`，非 `axios.default.post`）与 `fast-xml-parser` 的 `XMLParser`。

## Local Notes

<!-- 例如：CI 中推送步骤、token 轮换方式 -->
