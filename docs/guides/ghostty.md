---
sidebar_position: 5
title: "Ghostty：用 Zig 写的高性能原生终端模拟器入门指南"
sidebar_label: "ghostty-入门使用指南"
description: "Ghostty 是 Mitchell Hashimoto（HashiCorp 创始人）用 Zig 语言编写的终端模拟器，核心卖点是原生性能 + GPU 加速渲染——启动极快、内存占用低、渲染流畅，同时保持原生应用体验（macOS 上不是 Electron 套壳，而是真正的 Cocoa App）。目前处于快速迭代期，macOS 和 Linux 均已可用。"
---
# Ghostty：用 Zig 写的高性能原生终端模拟器入门指南

**一句话定位：** Ghostty 是 Mitchell Hashimoto（HashiCorp 创始人）用 Zig 语言编写的终端模拟器，核心卖点是**原生性能 + GPU 加速渲染**——启动极快、内存占用低、渲染流畅，同时保持原生应用体验（macOS 上不是 Electron 套壳，而是真正的 Cocoa App）。目前处于快速迭代期，macOS 和 Linux 均已可用。

---

## 一、安装

Ghostty 目前支持 macOS 和 Linux，Windows 版本在计划中。

### macOS（推荐）

```bash
brew install --cask ghostty
```

或从 [ghostty.org](https://ghostty.org) 下载 `.dmg` 安装包。

### Linux

目前提供多种分发方式：

```bash
# Arch Linux (AUR)
yay -S ghostty

# NixOS
nix-env -iA nixpkgs.ghostty

# 从源码构建（需要 Zig 0.13+）
git clone https://github.com/ghostty-org/ghostty.git
cd ghostty
zig build -Doptimize=ReleaseFast
```

> 注意：Ghostty 目前不提供 Ubuntu/Debian 的 `.deb` 包，非 Arch/Nix 用户建议从源码构建或等待官方分发。

---

## 二、核心设计理念

Ghostty 的设计围绕几个明确的原则：

1. **原生优先**：macOS 上是原生 Cocoa 应用，不是跨平台框架套壳
2. **GPU 加速渲染**：macOS 用 Metal，Linux 用 OpenGL/EGL，文字渲染流畅无撕裂
3. **低资源占用**：启动快、内存省，不会因为你开了几十个标签就吃掉几 GB 内存
4. **标准兼容**：完整支持 xterm-256color、true color、ANSI 转义序列
5. **不做重复的事**：Shell 交给 Shell（zsh/fish/bash），多路复用交给 tmux/zellij，Ghostty 只做好终端渲染和窗口管理

---

## 三、基础操作

### 启动

```bash
ghostty              # 默认启动
ghostty --command=zsh   # 指定启动的 shell
```

### 标签页与窗口

| 操作 | 快捷键 |
|---|---|
| 新建窗口 | `Cmd+N`（macOS）|
| 新建标签页 | `Cmd+T` |
| 关闭标签页 | `Cmd+W` |
| 切换标签页 | `Cmd+数字` 或 `Cmd+Shift+[` / `Cmd+Shift+]` |
| 全屏 | `Cmd+Enter` |

### 分屏（Split Panes）

| 操作 | 快捷键 |
|---|---|
| 水平分屏 | `Cmd+D` |
| 垂直分屏 | `Cmd+Shift+D` |
| 切换分屏 | `Cmd+[` / `Cmd+]` 或 `Cmd+Option+方向键` |
| 关闭分屏 | `Cmd+W` |

每个分屏都是独立的终端会话，可以自由调整大小。

---

## 四、配置

Ghostty 使用纯文本配置文件，格式简洁直观。

### 配置文件位置

```
macOS:   ~/Library/Application Support/com.mitchellh.ghostty/config
Linux:   ~/.config/ghostty/config
```

### 基础配置示例

```bash
# 字体
font-family = "JetBrainsMono Nerd Font"
font-size = 14

# 主题
theme = "catppuccin-mocha"

# 窗口
window-padding-x = 8
window-padding-y = 8
background-opacity = 0.95

# 光标
cursor-style = block
cursor-style-blink = false

# 滚动
scrollback-limit = 10000000

# Shell（默认继承系统 shell，也可显式指定）
command = /opt/homebrew/bin/fish
```

### 常用配置项速查

| 配置项 | 说明 |
|---|---|
| `font-family` | 字体名称 |
| `font-size` | 字号 |
| `font-thicken` | 字体加粗（适合 Retina 屏）|
| `theme` | 配色主题（内置 200+ 套）|
| `background` / `foreground` | 自定义背景/前景色 |
| `background-opacity` | 背景透明度（0.0~1.0）|
| `cursor-style` | 光标样式：`block`、`bar`、`line` |
| `cursor-color` | 光标颜色 |
| `scrollback-limit` | 滚动缓冲区行数 |
| `window-padding-x/y` | 窗口内边距 |
| `window-decoration` | 窗口装饰：`auto`、`none`、`client` |
| `macos-titlebar-style` | macOS 标题栏：`native`、`tabs`、`transparent` |
| `quit-after-last-window-closed` | 最后一个窗口关闭后是否退出 |
| `copy-on-select` | 选中即复制 |
| `clipboard-read` / `clipboard-write` | 剪贴板读写权限 |
| `shell-integration` | Shell 集成（支持 fish/zsh/bash）|

---

## 五、主题系统

Ghostty 内置了 200 多套配色方案：

```bash
# 查看所有内置主题
ghostty +list-themes

# 配置中直接引用
theme = "tokyo-night"
theme = "gruvbox-dark"
theme = "dracula"
theme = "catppuccin-mocha"
```

也可以自定义颜色：

```bash
background = #1e1e2e
foreground = #cdd6f4
cursor-color = #f5e0dc
selection-background = #353749
selection-foreground = #cdd6f4
palette = 0=#45475a
palette = 1=#f38ba8
palette = 2=#a6e3a1
# ... 共 16 色
```

---

## 六、高级功能

### 1. 图像协议支持

Ghostty 原生支持 Kitty 图像协议和 Sixel，可以在终端里直接显示图片：

```bash
# 用 kitty 的 icat 工具显示图片
kitty +kitten icat image.png

# 支持 ranger、yazi 等文件管理器的图片预览
```

### 2. 多路复用器集成

Ghostty 推荐你把多路复用（session 持久化、远程恢复）交给 tmux 或 zellij：

```bash
# 在 Ghostty 中直接启动 tmux
ghostty --command="tmux new-session -A -s main"
```

Ghostty 本身提供基础的分屏和标签页，但如果你需要：
- SSH 断开后 session 不丢失
- 多人共享终端会话
- 复杂的窗口布局持久化

那还是配合 tmux/zellij 更合适。

### 3. Shell 集成

Ghostty 的 Shell 集成功能（shell-integration）可以提供：

- **终端提示符标记**：告诉终端哪里是提示符、哪里是命令输出
- **当前目录报告**：终端知道你在哪个目录
- **Semantic Zones**：可以区分提示符、命令、输出区域

启用方式（以 fish 为例，安装时自动配置）：

```bash
# fish
set -gx GHOSTTY_SHELL_INTEGRATION enabled
```

### 4. 快捷键自定义

Ghostty 的快捷键在配置文件中定义：

```bash
# 绑定 Cmd+Shift+T 为新建标签页
keybind = cmd+shift+t=new_tab

# 绑定 Cmd+Enter 为全屏切换
keybind = cmd+enter=toggle_fullscreen

# 绑定 Cmd+数字为标签页切换
keybind = cmd+one=goto_tab:1
keybind = cmd+two=goto_tab:2
```

常用可绑定动作：
- `new_tab` / `close_tab` / `goto_tab:N`
- `new_split:right` / `new_split:down`
- `goto_split:next` / `goto_split:previous`
- `toggle_fullscreen` / `toggle_window_decorations`
- `increase_font_size` / `decrease_font_size` / `reset_font_size`
- `copy_to_clipboard` / `paste_from_clipboard`
- `scroll_page_up` / `scroll_page_down` / `scroll_to_top` / `scroll_to_bottom`

---

## 七、macOS 原生特性

Ghostty 在 macOS 上深度整合了系统特性：

- **原生标题栏**：三种风格可选（native/tabs/transparent）
- **原生全屏**：支持 macOS 原生全屏动画
- **服务菜单**：支持 macOS Services 集成
- **自动隐藏菜单栏**：全屏时自动隐藏
- **Universal Binary**：同时支持 Intel 和 Apple Silicon

---

## 八、性能与资源

Ghostty 用 Zig 编写 + GPU 渲染，在性能上优势明显：

- **启动时间**：冷启动 &lt; 100ms
- **内存占用**：单个窗口约 30-50MB，开几十个标签也不会线性暴增
- **渲染帧率**：Metal/OpenGL 加速，滚动大文件不卡顿
- **电池友好**：合理的渲染调度，不会疯狂刷新吃电量

---

## 九、与 cmux 的关系

cmux（之前指南中提到的那款 AI Agent 终端）的渲染引擎就是基于 Ghostty。也就是说，Ghostty 不仅是一个独立终端，其底层渲染技术也被其他终端应用采用。这侧面说明 Ghostty 的渲染层确实做得扎实。

---

## 十、写在最后

Ghostty 不是功能最多的终端，但它在**核心体验**上做得非常扎实——快、省、原生、标准兼容。Mitchell Hashimoto 作为 HashiCorp 的创始人，对开发者工具的品味是有口皆碑的。

如果你：
- 在 macOS/Linux 上想要一个启动快、不卡顿的终端
- 厌倦了 Electron 套壳终端的笨重感
- 想要原生的系统集成体验
- 对 GPU 加速渲染和图像协议支持有需求

Ghostty 是一个值得长期关注的项目。它目前还在快速迭代，功能在持续增加，但核心体验已经相当成熟。

官网：https://ghostty.org  
GitHub：https://github.com/ghostty-org/ghostty

---

## 相关工具

如果你把 Ghostty 作为日常 AI 编程和终端工作流的主力环境，可以顺手了解一下 [EbeeAI](https://ebeeai.net)。它提供统一的 AI API 接入、模型用量统计和成本管理，新用户注册后有 $10 试用额度，适合先验证自己的脚本、Agent 或命令行 AI 工具场景。
