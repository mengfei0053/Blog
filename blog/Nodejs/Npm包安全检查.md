---
title: Npm包安全检查
authors: [meng]
tags: [npm]
keywords: [npm, nodejs, ncu ,snyk, 前端安全, npm包安全, Npm包安全检查]
description: Npm包安全检查
---

# Npm包安全检查

## 前言 - npm包安全问题

### 细数历年npm包安全问题

- 2021年11月4日, npm包 coa被劫持, 大量react项目被影响. 【部分公司项目，在发布时因其影响而发布失败】
- 2021年10月22日, ua-parser-js被恶意劫持，多个版本植入挖矿脚本
- 2019年7月，有开发者在purescript npm 安装程序中发现一些恶意代码。原来是有攻击者获取了@shinnn（purescript npm 安装程序原始作者）的npm账户，随后在purescript npm安装程序中插入恶意代码。
- 2019年6月，黑客向 npm 发布一个“useful”的包（electron-native-notify），等到它被目标（某应用程序）使用后更新包内容，加入恶意代码。而某应用程序又是 Agama 加密货币钱包的一部分。
- 2018年11月，npm 下载量超过 200 万的 package 被注入了恶意代码，黑客利用该恶意代码访问热门 JavaScript 库，目标是 copay（开源比特币钱包）及其衍生产品的用户，以此窃取用户的数字货币。
- 2018年7月，黑客利用恶意代码破坏ESLint库。该恶意代码被设计用来窃取其他开发人员的npm证书。
- 2018年5月，黑客试图在名为getcookies的流行npm包中隐藏后门。


除了上述恶意的黑客导致的安全问题外，某些npm包，有意或无意的存在各种各样的漏洞或bug。常见的如：DOS, REDOS, Prototype Pollution, XSS漏洞等等。

## 社区解决方案

### npm audit (npm@>6.x) 
npm 收购nsp后推出的官方检查工具， 之前应该是基于nsp数据库。
目前基于 https://github.com/advisories

npm audit 依赖于npm package-lock.json 或 npm-shrinkwrap.json

常用方法
```shell
npm audit # 只扫描，显示有问题的依赖包
npm audit fix #扫描并自动修复和安装符合兼容性要求的包
npm audit fix --package-lock-only #只修改package-lock.json 需要手动安装依赖
npm audit fix --only=prod #扫描并修复
npm audit --audit-level=moderate #设置扫描报告等级
```

检查报告，会包含有问题的包和版本信息，以及漏洞信息，漏洞的严重程度等等
![检查报告](/assets/Lark20211128-165730.png)


### snyk 

snyk是一家美国的网络安全公司，有自己的安全数据库
同时支持yarn 和 npm 

snyk cli 工具是该公司的开源项目https://github.com/snyk/snyk

基础使用方法

```shell
# 安装
npm i -g snyk

# 登录, snyk cli 依赖于snyk.io 提供的api
snyk auth

# 扫描
snyk test
```
![检查报告](/assets/Lark20211128-163432.png)

### snyk 和 npm audit的对比

这个是snyk公司出的功能对比
![检查报告](/assets/npm-vs-snyk.png)

### 观点
定期或脚本的检查依赖，更新依赖是有必要的，且没有太大成本的。
像前段时间的 ua-parser-js 和 coa事件，都会被上述两种方案所收录。
脚本化的检查，可以在一定程度上避免一些已经被发现的有问题的包，所导致的安全问题。

### 常用依赖检查命令

```shell
yarn why <pkg> # 查看某npm包依赖关系，项目必须包含yarn.lock
yarn info [pkg] [package.json field] # 查看某包的信息，不传包名，显示当前项目的package.json信息。
yarn info chalk versions # 查看 chalk 目前npm提供的所有版本
yarn info chalk@4.0.0 dependencies # 查看 chalk 4.0.0版本的生产依赖 

npm ls #查看项目依赖树
npm ls [pkg] #查看某包的依赖树
npm ls --depth 1 #限定展示依赖层级

npm outdated #查看项目哪些依赖需要更新
```

### 推荐一个检查依赖的第三方包 npm-check-updates

```shell
npm i -g npm-check-updates

ncu # 检查项目所有依赖
ncu -u #检查并更新package.json 需要手动安装依赖
ncu "/.*scope.*/" #检查包含scope关键字的包
ncu -u "/.*scope.*/" #检查包含scope关键字的包,并更新package.json 需要手动安装依赖
```