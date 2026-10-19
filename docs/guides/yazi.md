---
sidebar_position: 9
title: "Yazi：异步终端文件管理器入门指南"
sidebar_label: "yazi-入门使用指南"
description: "Yazi 是用 Rust 编写的异步终端文件管理器（TUI file manager），核心卖点是全流程异步化——文件预览、图片缩略图、大文件浏览、搜索全部异步执行，不卡 UI。同时支持 Vim 式快捷键、图片预览、插件扩展、呼叫外部工具，是 ranger 的现代替代品。目前 GitHub Stars 超过 18k。"
---
# Yazi：异步终端文件管理器入门指南

**一句话定位：** Yazi 是用 Rust 编写的异步终端文件管理器（TUI file manager），核心卖点是**全流程异步化**——文件预览、图片缩略图、大文件浏览、搜索全部异步执行，不卡 UI。同时支持 Vim 式快捷键、图片预览、插件扩展、呼叫外部工具，是 ranger 的现代替代品。目前 GitHub Stars 超过 18k。

---

## 一、安装

Yazi 支持 Linux、macOS、Windows 等主流平台。

### 前置必须

- `file` 命令（文件类型检测，大多数系统自带）

### 推荐安装的可选依赖（开启更多功能）

| 工具 | 功能 |
|------|------|
| `nerd-fonts` | 图标显示（推荐） |
| `ffmpeg` | 视频缩略图预览 |
| `7z` | 压缩包预览/解压 |
| `jq` | JSON 文件预览 |
| `poppler` | PDF 预览 |
| `fd` | 文件搜索（替代 find） |
| `ripgrep` | 文件内容搜索 |
| `fzf` | 快速文件导航 |
| `zoxide` | 历史目录跳转（需要 fzf） |
| `resvg` | SVG 预览 |
| `ImageMagick` | 字体、HEIC、JPEG XL 预览 |

### 各平台安装

**macOS / Linux（Homebrew，推荐）**

```bash
brew install yazi
```

**Arch Linux**

```bash
pacman -S yazi
# 或 AUR 最新版
yay -S yazi
```

**Debian/Ubuntu**

下载 `.deb` 包安装：https://github.com/sxyazi/yazi/releases

**Windows**

```bash
scoop install yazi
# 或
winget install sxyazi.yazi
```

**Cargo（Rust 用户）**

```bash
cargo install --locked yazi-fm yazi-cli
```

**AppImage / 预编译二进制**

直接从 [GitHub Releases](https://github.com/sxyazi/yazi/releases) 下载对应平台包。

---

## 二、第一次启动

```bash
yazi          # 启动，打开当前目录
yazi /path    # 打开指定目录
```

**基硌操作：**

- `q` — 退出
- `Q` — 退出且不更改当前工作目录
- `F1` 或 `~` — 打开帮助菜单（查看完整快捷键）

---

## 三、导航：Vim 风格的文件浏览

Yazi 的导航采用 Vim 风格，也支持方向键。

### 基硌移动

| 键位 | 备选 | 操作 |
|------|------|------|
| `k` | `↑` | 向上移动光标 |
| `j` | `↓` | 向下移动光标 |
| `l` | `→` | 进入选中的目录 |
| `h` | `←` | 返回上级目录 |

### 快速导航

| 键位 | 操作 |
|------|------|
| `gg` | 跳到顶部 |
| `G` | 跳到底部 |
| `K` | 预览区向上滚动 5 行 |
| `J` | 预览区向下滚动 5 行 |
| `z` | 用 fzf 快速跳转到文件/目录（需 fzf） |
| `Z` | 用 zoxide 跳转到历史目录（需 zoxide + fzf） |
| `g Space` | 交互式输入跳转到目录或文件 |

---

## 四、选择文件

Yazi 支持单选、多选、全选、反选，操作和 Vim 的 visual mode 很像。

| 键位 | 操作 |
|------|------|
| `Space` | 切换当前文件的选中状态 |
| `v` | 进入 Visual Mode（选择模式） |
| `V` | 进入 Visual Mode（取消模式） |
| `Ctrl + a` | 全选 |
| `Ctrl + r` | 反选（未选的变已选） |
| `Esc` | 取消所有选择 |

---

## 五、文件操作

### 打开/执行

| 键位 | 操作 |
|------|------|
| `Enter` / `l` | 打开文件（调用系统关联程序） |
| `o` | 打开文件（保留 Yazi 前台） |
| `O` | 打开文件（退出 Yazi） |
| `Enter` | 进入目录 |

### 复制、剪切、粘贴

| 键位 | 操作 |
|------|------|
| `y` | 复制选中的文件 |
| `x` / `d` | 剪切选中的文件 |
| `p` | 粘贴到当前目录 |
| `P` | 强制粘贴（覆盖时不提示） |
| `Y` | 复制文件路径到剪贴板 |
| `D` | 永久删除（不进垃圾箱） |
| `a` | 重命名文件 |
| `A` | 重命名文件（包含文件扩展名） |

### 新建与删除

| 键位 | 操作 |
|------|------|
| `n` | 新建文件 |
| `N` | 新建目录 |
| `d` | 删除文件（进垃圾箱） |
| `D` | 永久删除 |

---

## 六、搜索功能

Yazi 内置了强大的搜索能力，全部异步执行。

| 键位 | 操作 |
|------|------|
| `/` | 实时搜索（过滤当前目录） |
| `s` | 交互式搜索（包含子目录，需 fd/rg） |
| `S` | 对搜索结果进行排序 |
| `f` | 按文件名过滤（模糊匹配） |
| `F` | 按文件名过滤（正则匹配） |
| `r` | 重命名当前目录下的所有文件（批量重命名） |

---

## 七、预览系统：不出终端就能看文件

Yazi 最吸引人的功能之一是内置预览。

### 预览区域

右侧面板默认显示文件预览：

- **文本文件**：代码高亮显示
- **图片**：JPEG/PNG/GIF/WebP 等（需终端支持图片协议或 ueberzug）
- **视频**：缩略图预览（需 ffmpeg）
- **PDF**：页面预览（需 poppler）
- **压缩包**：列出内容（需 7z）
- **二进制文件**：16 进制显示

### 图片预览支持的协议

Yazi 自动检测当前终端支持的图片显示协议：

- **Kitty**：原生支持（最推荐）
- **iTerm2**：原生支持
- **WezTerm**：原生支持
- **tmux**：通过 Sixel 或 iTerm2 协议
- **其他终端**：可用 ueberzugpp 作为后备方案

---

## 八、分屏与布局

Yazi 支持灵活的分屏布局：

| 键位 | 操作 |
|------|------|
| `T` | 新建一个 Tab（类似浏览器标签页） |
| `t` | 隐藏/显示预览区 |
| `~` | 切换布局（比如只显示文件列表） |
| `←` / `→` | 在多个 Tab 之间切换 |

---

## 九、Shell Wrapper：退出后自动切换目录

这是 Yazi 非常实用的一个功能。通过 Shell Wrapper，你退出 Yazi 时可以自动切换到最后访问的目录。

### Bash / Zsh 配置

在 `~/.bashrc` 或 `~/.zshrc` 中添加：

```bash
function y() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
	yazi "$@" --cwd-file="$tmp"
	if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
		cd -- "$cwd"
	fi
	rm -f -- "$tmp"
}
```

### Fish 配置

```fish
function y
	set tmp (mktemp -t "yazi-cwd.XXXXXX")
	yazi $argv --cwd-file="$tmp"
	if set cwd (cat -- "$tmp"); and [ -n "$cwd" ]; and [ "$cwd" != "$PWD" ]
		cd -- "$cwd"
	end
	rm -f -- "$tmp"
end
```

**使用：** 以后用 `y` 代替 `yazi` 启动，按 `q` 退出时自动 cd 到最后所在目录。按 `Q` 则不切换。

---

## 十、配置文件

Yazi 的配置文件位于：

```
~/.config/yazi/
├── keymap.toml   # 快捷键映射
├── yazi.toml     # 主配置
└── theme.toml    # 主题/外观
```

### 主配置示例（yazi.toml）

```toml
[manager]
# 显示隐藏文件
show_hidden = false
# 排序方式
sort_by = "modified"
sort_dir_first = true
# 允许图片预览
image_previewer = "image"

[opener]
edit = [
	{ run = 'nvim "$@"', block = true, for = "unix" },
	{ run = 'code "%"', block = false, for = "windows" },
]
```

### 快捷键配置示例（keymap.toml）

```toml
[[manager.prepend_keymap]]
on = [ "g", "h" ]
run = "cd ~"
desc = "Go to home directory"

[[manager.prepend_keymap]]
on = [ "g", "d" ]
run = "cd ~/Downloads"
desc = "Go to Downloads"
```

---

## 十一、插件系统

Yazi 支持 Lua 插件，官方和社区提供了不少实用插件。

### 安装插件

使用内置的插件管理器：

```bash
# 安装插件
ya pack -a owner/repo

# 安装官方插件
ya pack -a yazi-rs/plugins:git
ya pack -a yazi-rs/plugins:full-border
```

### 常用官方插件

| 插件 | 功能 |
|------|------|
| `git.yazi` | Git 状态显示 |
| `full-border.yazi` | 全边框界面 |
| `max-preview.yazi` | 预览区最大化 |
| `hide-preview.yazi` | 隐藏预览区 |
| `smart-enter.yazi` | 智能回车（文件打开、目录进入） |
| `smart-filter.yazi` | 智能过滤 |

---

## 十二、呼叫外部工具（opener）

Yazi 可以配置不同类型文件的默认打开方式：

```toml
[opener]
play = [
	{ run = 'mpv "$@"', orphan = true, for = "unix" },
	{ run = 'vlc "%"', orphan = true, for = "windows" },
]
open = [
	{ run = 'xdg-open "$@"', desc = "Open", for = "linux" },
	{ run = 'open "$@"', desc = "Open", for = "macos" },
]
```

配置后，按 Enter 打开文件时会自动调用对应程序。

---

## 十三、常用快捷键速查

### 导航

| 键位 | 操作 |
|------|------|
| `h/j/k/l` | 左/下/上/右 |
| `gg` / `G` | 顶部 / 底部 |
| `z` | fzf 快速跳转 |
| `Z` | zoxide 历史目录 |

### 文件操作

| 键位 | 操作 |
|------|------|
| `y` | 复制 |
| `x` / `d` | 剪切 |
| `p` / `P` | 粘贴 / 强制粘贴 |
| `a` / `A` | 重命名 |
| `n` / `N` | 新建文件 / 目录 |
| `d` | 删除到垃圾箱 |
| `D` | 永久删除 |
| `Enter` / `o` | 打开文件 |
| `y` / `Y` | 复制文件路径 |

### 选择

| 键位 | 操作 |
|------|------|
| `Space` | 切换选择 |
| `v` / `V` | Visual Mode |
| `Ctrl+a` | 全选 |
| `Ctrl+r` | 反选 |

### 搜索

| 键位 | 操作 |
|------|------|
| `/` | 实时过滤 |
| `s` | 交互式搜索 |
| `f` / `F` | 模糊 / 正则过滤 |

### 其他

| 键位 | 操作 |
|------|------|
| `q` / `Q` | 退出 / 退出不切换目录 |
| `T` | 新建 Tab |
| `t` | 隐藏预览 |
| `~` | 切换布局 |
| `F1` / `~` | 帮助菜单 |

---

## 十四、写在最后

Yazi 的定位很明确：做一个**快速、异步、可扩展的终端文件管理器**。

和 ranger 相比，Yazi 的优势在于：
- **异步 IO**：大文件夹加载、预览都不阻塞 UI
- **图片预览**：原生支持多种图片协议
- **异步任务调度**：复制/粘贴等操作有独立任务进度
- **插件系统**：Lua 插件支持，社区活跃
- **Vim 键位**：熟悉的 hjkl 导航

如果你经常在终端里管理文件，想要一个比 `ls`+`cd` 更高效、比 GUI 文件管理器更轻量的工具，Yazi 值得试试。

官网：https://yazi-rs.github.io  
GitHub：https://github.com/sxyazi/yazi

---

## 相关工具

如果你用 Yazi 管理本地项目、数据集或 AI 开发资料，也可以了解一下 [EbeeAI](https://ebeeai.net)。它提供多模型统一接入和用量管理，新用户注册后有 $10 试用额度，适合在整理资料、编写脚本或接入 AI 工作流时先做小规模尝试。
