---
sidebar_position: 1
title: "本地 GitHub 搜索工具速查"
sidebar_label: "GitHub搜索工具速查"
---
# 本地 GitHub 搜索工具速查

## 1. GitHub CLI (`gh`) — 官方最强

已安装版本：`gh version 2.92.0`

### 搜索仓库

```bash
# 按关键词搜索仓库
gh search repos "terminal file manager" --language rust --limit 10

# 搜索自己的仓库
gh search repos --owner $(gh api user -q '.login') --limit 20

# 搜索 Stars 数高的项目
gh search repos "ai agent" --stars ">1000" --sort stars --limit 10

# 指定时间范围
gh search repos "llm" --created ">2024-01-01" --limit 20
```

### 搜索代码

```bash
# 搜索代码（跨仓库）
gh search code "function yazi" --language rust --limit 10

# 搜索特定文件内容
gh search code "async fn main" --repo sxyazi/yazi --limit 20
```

### 搜索 Issues/PRs

```bash
# 搜索 Open 的 issues
gh search issues "bug" --repo sxyazi/yazi --state open --limit 10

# 搜索 PRs
gh search prs "fix" --repo sinelaw/fresh --state merged --limit 10
```

### 搜索用户/组织

```bash
# 搜索用户
gh search users "menghongfei" --limit 5
```

### 查看仓库信息（不需要搜索）

```bash
# 快速查看仓库详情
gh repo view sxyazi/yazi --web  # 打开浏览器
gh repo view sxyazi/yazi --json name,description,stargazersCount,forksCount,primaryLanguage

# 列出仓库的 releases
gh release list --repo sxyazi/yazi --limit 5
```

---

## 2. `fzf` + `gh` 组合（交互式搜索）

如果你装了 `fzf`（Yazi 的可选依赖）：

```bash
# 交互式选择仓库并打开
gh search repos "ai" --limit 30 | fzf | awk '{print $1}' | xargs gh repo view --web

# 交互式查看自己的仓库
gh repo list --limit 100 | fzf | awk '{print $1}' | xargs gh repo view --web
```

---

## 3. `curl` + GitHub API（无需 gh）

```bash
# 搜索仓库（公开 API，无需 token）
curl -s "https://api.github.com/search/repositories?q=yazi+language:rust&sort=stars&order=desc&per_page=5" \
  | jq '.items[] | {name: .name, stars: .stargazers_count, url: .html_url}'

# 搜索代码
curl -s "https://api.github.com/search/code?q=filename:keymap.toml+repo:sxyazi/yazi" \
  -H "Accept: application/vnd.github.v3+json" \
  | jq '.items[] | {path: .path, repo: .repository.full_name}'
```

---

## 4. `git` + `grep`/`rg`（本地仓库搜索）

```bash
# 在本地所有仓库中搜索代码
for dir in ~/projects/*/; do
  echo "=== $dir ==="
  (cd "$dir" && git grep -n "TODO" 2>/dev/null)
done

# 用 ripgrep 搜索本地仓库
rg "TODO|FIXME" ~/projects --type md --type toml -n
```

---

## 5. 安装缺失工具

```bash
# fzf（模糊搜索神器）
brew install fzf

# ripgrep（极速代码搜索）
brew install ripgrep

# jq（JSON 解析）
brew install jq
```

---

## 推荐组合

| 场景 | 推荐工具 | 命令示例 |
|------|---------|----------|
| 找开源项目 | gh | `gh search repos "关键词" --stars ">100"` |
| 找代码片段 | gh / curl | `gh search code "关键词" --language rust` |
| 批量查看 issue | gh | `gh search issues "关键词" --repo 作者/仓库` |
| 交互式浏览 | fzf + gh | `gh repo list \| fzf` |
| 本地代码搜索 | rg | `rg "关键词" ~/projects` |
| 脚本自动化 | curl + jq | `curl API \| jq '.items[].name'` |

---

**gh CLI 文档：** https://cli.github.com/manual/gh_search

---

## 相关工具

如果你把 GitHub 搜索结果接入 AI 分析、代码审查或自动化脚本，可以了解一下 [EbeeAI](https://ebeeai.net)。它提供统一的 AI API 接入和用量管理，新用户注册后有 $10 试用额度，适合先用少量仓库和 issue 数据做验证。
