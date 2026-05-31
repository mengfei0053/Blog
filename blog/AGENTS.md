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

当前约 **16** 篇 `.md` 文章（以仓库实际文件为准）。

## Conventions

- 新文章放在对应主题子目录，文件名可用中文；Docusaurus 会生成 slug。
- 建议在长文合适位置添加 `<!-- truncate -->`，否则 `pnpm build` 会警告 `onUntruncatedBlogPosts`（不阻断构建）。
- 文内锚点需与标题生成的 id 一致，否则可能出现 `onBrokenAnchors` 警告。
- 不要在此目录放非 Markdown 构建依赖或密钥。

## Local Notes

<!-- 例如：发文流程、标签规范、是否启用博客 RSS 等 -->
