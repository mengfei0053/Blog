---
slug: linux-install-nodejs
title: Linux下nodejs安装源nodesource
authors: [meng]
tags: [yarn, nodejs, npm]
keywords: [linux, nodejs, nodejs install, nodesource , Linux下nodejs安装源nodesource]
description: Linux下nodejs安装源nodesource
---

# Linux下nodejs安装源nodesource

https://github.com/nodesource/distributions

## 常用

### Debian and Ubuntu based distributions 

```shell
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
```
### Enterprise Linux based distributions
Run on RHEL, CentOS, CloudLinux, Amazon Linux or Fedora:

```shell
# As root
curl -fsSL https://rpm.nodesource.com/setup_14.x | bash -

# No root privileges
curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -
```