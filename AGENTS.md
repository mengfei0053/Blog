# Blog（Meng 个人站）

基于 Docusaurus 3 的静态技术博客，发布于 https://blog.mengfei.tech。主要内容在 `blog/`（文章）与 `src/pages/`（自定义页面），首页重定向到 `/blog`。

## Project Layout

### Top-Level Directories

- `blog/` — 博客文章（按主题分子目录：Nodejs、React、Ts、Docker、Linux、Windows、Others、AI）
- `docs/` — Docusaurus 文档区。`docs/guides/` 是「技术文档」（ASCII 文档 id，中文标题与侧边栏标签；封面与 cmux 配图在 `docs/guides/img/`，WebP）。默认 tutorial 仍在 `docs/intro.md`、`docs/tutorial-basics/`、`docs/tutorial-extras/`，侧边栏归入「教程」
- `src/` — 自定义 React 页面、组件与全局样式
- `static/` — 静态资源（图片、favicon 等）
- `scripts/` — 构建后脚本（百度 URL 推送）
- `build/` — `pnpm build` 产物（已 gitignore，本地生成）

### Key Entry Files

- `docusaurus.config.js` — 站点配置（preset-classic、gtag、百度统计插件、navbar/footer）
- `sidebars.js` — docs 侧边栏：「技术文档」（`docs/guides/_category_.json`）在前，「教程」在后
- `package.json` — 依赖与 scripts（`packageManager: pnpm@9.15.9`）
- `pnpm-lock.yaml` — 锁文件
- `.npmrc` — `node-linker=hoisted`（兼容 Docusaurus）
- `babel.config.js` — Docusaurus Babel preset
- `tsconfig.json` — 编辑器类型检查（`pnpm typecheck`）

## Tech Stack

- **Framework**: Docusaurus 3.10.2（`@docusaurus/preset-classic`）
- **Search**: `@easyops-cn/docusaurus-search-local`（本地搜索，`language: ['en', 'zh']`，索引 blog / docs / pages；搜索框由主题注入导航栏右侧）
- **UI**: React 19、MDX 3
- **Language**: TypeScript 6.0（部分页面/组件）
- **Package manager**: pnpm 9.15.9（Corepack）
- **Runtime**: Node.js >= 20（`engines` 字段）
- **CI**: GitHub Actions（`.github/workflows/deploy.yml`）在推送到 `master` 时用 Corepack 启用 pnpm 9.15.9，执行 `pnpm install --frozen-lockfile` 与 `pnpm build`，再将 `build/` 发布到 `gh-pages`（Pages 源为该分支的 `/`，自定义域名 `blog.mengfei.tech`）。本地 `pnpm deploy` 不变。若推送报无写权限，到 Settings → Actions → General → Workflow permissions 选 **Read and write permissions**（只用默认 `GITHUB_TOKEN`，无需额外 secret）。
- **云开发**: Gitpod（`.gitpod.yml`：`pnpm install && build`，`pnpm start`）

## Common Commands

```bash
# 安装依赖（需 Node >= 20，建议 corepack enable）
corepack enable && corepack prepare pnpm@9.15.9 --activate
pnpm install

# 本地开发（默认 3000；端口占用时可指定）
pnpm start
pnpm exec docusaurus start --port 3001

# 生产构建
pnpm build

# 本地预览构建结果
pnpm serve

# TypeScript 检查（不产出构建物）
pnpm typecheck

# 部署到 GitHub Pages（本地，需配置 GIT_USER 等；不经过 Actions）
pnpm deploy

# 推送到 master 会触发 .github/workflows/deploy.yml 自动发布到 gh-pages

# 构建后推送 URL 到百度收录（需环境变量 BAIDU_ZZ）
pnpm build && node ./scripts/push-baidu.js
```

## Working Agreements

- 改动前先读 `docusaurus.config.js` 与受影响的内容目录（`blog/`、`src/pages/`）。
- 保持 diff 小且聚焦；不要顺手重构无关文章或默认 tutorial 文档。
- 新增/修改 `package.json` scripts 或目录结构后，同步更新本文件与 `README.md`。
- `docusaurus.config.js` 中 `onBrokenLinks: 'throw'` — 断链会导致构建失败。
- 首页通过 `src/pages/index.tsx` 的 `<Redirect to="/blog" />` 实现，勿改回客户端-only 路由以免 SSG 失败。
- gtag 配置在 preset options 内，不要放回 `themeConfig.gtag`（Docusaurus 3 要求）。

## Verification

- [ ] `pnpm typecheck` 通过
- [ ] `pnpm build` 通过（注意 broken anchors / 未 truncate 博客仅为警告）
- [ ] 若改部署脚本：`node scripts/push-baidu.js` 在已有 `build/sitemap.xml` 时可运行
- [ ] 文档路径与 `AGENTS.md` 描述一致

## Local Notes

<!-- 项目维护者人工补充区：业务边界、发布流程、禁改目录、环境变量说明 -->
