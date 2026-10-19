## Blog

个人网站，不定期更新一些，自己在用或者在看的相关技术文档。

使用 [docusaurus](https://docusaurus.io/) 搭建。站内搜索使用 `@easyops-cn/docusaurus-search-local`（支持中文），导航「AI」指向 `/blog/tags/ai`，导航「技术文档」指向 `/docs/guides`（工具指南在 `docs/guides/`，不是博客文章）。推送到 `master` 后，GitHub Actions 会构建站点并发布到 `gh-pages`（https://blog.mengfei.tech）。本地仍可用 `pnpm deploy`。

