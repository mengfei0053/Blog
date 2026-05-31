<!-- Parent: ../AGENTS.md -->

# src/

自定义前端代码：页面路由、组件与全局样式。

## Current Layout

```
src/
├── css/custom.css          # 全局主题覆盖（preset theme.customCss）
├── components/
│   ├── HomepageFeatures.tsx
│   └── HomepageFeatures.module.css
└── pages/
    ├── index.tsx           # 首页 → Redirect /blog
    ├── index.module.css
    ├── markdown-page.md    # 静态 MD 页面：常用设置
    └── front-end-recommendation-libraries.md  # 前端社区精选
```

## Conventions

- 页面路由：`src/pages/*` 映射为站点路径（如 `markdown-page.md` → `/markdown-page`）。
- 使用 `@docusaurus/router` 的 `Redirect` 做静态重定向；**不要**使用 `useNavigate`（Docusaurus router 未导出）。
- React 组件返回类型使用 `React.JSX.Element`，需 `import React from 'react'` 以满足 `tsc`。
- 样式优先 CSS Modules（`*.module.css`）或 `src/css/custom.css`。

## Local Notes

<!-- 例如：是否计划恢复首页 Layout、swizzle 主题组件路径 -->
