---
sidebar_position: 8
title: "Tabby：跨平台现代终端模拟器入门指南"
sidebar_label: "tabby-入门使用指南"
description: "Tabby 是一款开源的跨平台终端模拟器，核心卖点是现代 UI + 一体化连接工具——不仅是一个终端，还内置了 SSH 客户端、串口终端、SFTP 文件传输，支持 Windows/macOS/Linux 三大平台。对需要同时管理本地终端和远程服务器的开发者来说，它是一个 all-in-one 的解决方案。目前 GitHub Stars 超过 60k。"
---
# Tabby：跨平台现代终端模拟器入门指南

**一句话定位：** Tabby 是一款开源的跨平台终端模拟器，核心卖点是**现代 UI + 一体化连接工具**——不仅是一个终端，还内置了 SSH 客户端、串口终端、SFTP 文件传输，支持 Windows/macOS/Linux 三大平台。对需要同时管理本地终端和远程服务器的开发者来说，它是一个 all-in-one 的解决方案。目前 GitHub Stars 超过 60k。

---

## 一、安装

Tabby 支持 Windows、macOS、Linux，提供多种安装方式。

### macOS

```bash
brew install --cask tabby
```

或从 [GitHub Releases](https://github.com/Eugeny/tabby/releases) 下载 `.dmg`。

### Windows

```bash
winget install Eugeny.Tabby
# 或
scoop install tabby
```

也可下载便携版（portable mode），无需安装直接运行。

### Linux

```bash
# Debian/Ubuntu
wget https://github.com/Eugeny/tabby/releases/latest/download/tabby-linux-x64.deb
sudo dpkg -i tabby-linux-x64.deb

# AppImage（通用）
下载 .AppImage 文件，chmod +x 后直接运行
```

---

## 二、核心功能概览

### 1. 现代终端基础

- **跨平台统一体验**：Windows、macOS、Linux 上使用同一套界面和快捷键
- **完整 Unicode 支持**：包括双宽字符（CJK、emoji 等）
- **字体连字（Font Ligatures）**：支持 Fira Code、JetBrains Mono 等编程字体
- **标签页 + 分屏**：支持嵌套分屏（nested panes），标签页可以放在窗口任意一侧
- **会话恢复**：重启后自动恢复之前的标签页和分屏布局
- **Quake 模式**：终端吸附在屏幕一侧，按全局热键快速呼出/隐藏
- **活动通知**：标签页显示进度条和活动状态，后台任务完成时提醒

### 2. 内置 SSH 客户端

Tabby 不仅是终端，还是一个功能完整的 SSH 客户端：

- **连接管理器**：图形化保存和管理 SSH 连接配置
- **SFTP 文件传输**：在 SSH 会话中直接拖拽传输文件
- **Zmodem 传输**：支持 rz/sz 命令行文件传输
- **X11 转发**：远程运行 GUI 程序
- **端口转发**：本地/远程端口映射
- **Jump Hosts**：跳板机连接
- **Agent Forwarding**：SSH Agent 转发（支持 Pageant、Windows OpenSSH Agent）
- **登录脚本**：连接后自动执行预设命令
- **内置密码管理器**：可选的加密容器存储 SSH 密码和配置
- **Proxy Command**：支持通过代理命令连接

### 3. Windows 特化支持

Tabby 在 Windows 上做了大量优化：

- **多 Shell 共存**：同一窗口中可运行 PowerShell、PS Core、WSL、Git-Bash、Cygwin、Cmder、CMD
- **cmd.exe 补全增强**：集成 Clink，让 cmd.exe 拥有类似 bash 的 Tab 补全
- **资源管理器集成**：右键菜单"在此处打开 Tabby"
- **便携模式**：无需安装，U 盘随身携带
- **目录检测**：自动识别当前工作目录

### 4. 串口终端

对于嵌入式开发者：

- **多连接配置**：保存不同设备的串口参数
- **换行转换**：自动处理 CRLF/LF
- **多种输入模式**：文本、readline、逐字节
- **多种输出模式**：文本、hexdump
- **Zmodem 传输**：串口环境下也能传文件
- **非标准波特率**：支持自定义波特率

---

## 三、界面与操作

### 标签页与分屏

| 操作 | 快捷键/方式 |
|---|---|
| 新建标签页 | `Ctrl+Shift+T` |
| 关闭标签页 | `Ctrl+W` |
| 切换标签页 | `Ctrl+Tab` / `Ctrl+Shift+Tab` |
| 水平分屏 | 右键 → Split Horizontally |
| 垂直分屏 | 右键 → Split Vertically |
| 切换分屏 | `Alt+方向键` |

标签页可以拖动到窗口的**上、下、左、右**任意一侧，适应不同屏幕布局习惯。

### Quake 模式

Tabby 支持类似游戏 Quake 控制台的快速呼出模式：

1. 设置 → Quake 模式 → 启用
2. 设置全局热键（如 `Ctrl+~`）
3. 按热键终端从屏幕顶部/底部滑入，再按隐藏

适合需要频繁唤起终端的场景。

### SSH 连接管理

1. 点击左侧边栏的 **SSH connections**
2. 点击 **New connection** 添加服务器
3. 填写主机、端口、用户名、认证方式（密码/密钥/Agent）
4. 保存后双击即可连接

连接配置支持分组管理，方便按项目或环境分类。

---

## 四、配置与定制

### 主题与配色

Tabby 内置了多套配色方案，也支持自定义：

- 设置 → Appearance → Color scheme
- 支持导入 `.itermcolors` 文件
- **CSS 自定义主题**：高级用户可以通过 CSS 深度定制界面样式

### 快捷键

- 设置 → Hotkeys
- 支持单键、组合键、多段快捷键（multi-chord shortcuts，如 `Ctrl+K Ctrl+C`）
- 所有快捷键均可修改

### 插件系统

Tabby 支持 JavaScript 插件扩展：

- 设置 → Plugins → Browse
- 安装社区插件（如主题包、工具集成等）
- 也可以自己开发插件

### 配置文件位置

```
Windows: %APPDATA%/tabby/
macOS:   ~/Library/Application Support/tabby/
Linux:   ~/.config/tabby/
```

---

## 五、文件传输

### SFTP（推荐）

连接 SSH 后：

1. 点击标签页右侧的 **SFTP** 按钮
2. 文件浏览器弹出，直接拖拽文件传输
3. 支持上传、下载、删除、重命名

### Zmodem

在 SSH/串口会话中：

```bash
# 发送文件到远程
sz filename

# 从远程接收文件
rz
```

Tabby 会自动弹出文件选择对话框处理传输。

---

## 六、写在最后

Tabby 的定位很清晰：**做一个现代化的、功能齐全的跨平台终端工具**。它不是最轻量的，但把终端、SSH 客户端、SFTP 工具、串口工具整合到一个应用里，对于日常需要频繁切换本地和远程环境的开发者来说，能显著减少工具切换成本。

如果你：
- 在 Windows 上需要同时用 WSL、PowerShell、CMD
- 经常连接多台远程服务器，想要图形化的连接管理
- 需要串口调试嵌入式设备
- 想要一个标签页+分屏体验现代的终端

Tabby 值得一试。

官网：https://tabby.sh  
GitHub：https://github.com/Eugeny/tabby
