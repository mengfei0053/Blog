---
title: 前端自动化测试
authors: [meng]
tags: [Test, Jest]
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [前端自动化测试](#前端自动化测试)
  - [前言](#前言)
  - [测试框架](#测试框架)

<!-- /code_chunk_output -->
# 前端自动化测试

在公司开始尝试推行编写前端测试用例

## 前言

测试种类繁多，但测试的最终目的，无外乎保从各个环节障程序的健壮，稳定。

<!-- ![软件测试](/assets/share03/软件测试.png) []() -->
// 目录:/assets/share03/软件测试.xmind

- 单元测试
  - 前端测试粒度常见以函数，类，组件，模块等为单位，编写测试代码。(当前项目环境中欠缺)
- 集成测试
  - 多模块联合起来是否符合功能预期的测试。(目前主要依赖测试人员的手工测试,脚本测试)
- 系统测试

  - 通常用黑盒的方式进行，包括健壮性测试，性能测试，功能测试，用户界面测试，压力测试等。在不断的需求变更后，进行回归测试，保证程序的可用性。（类比我们 stage 上的回归测试）

- 验收测试

  - 内测(alpha， 可以类比我们的 A 环境测试)，公测(beta，可以类比我们的 B 环境测试)。

  <!-- ![React测试](/assets/share03/React前端测试.png) []() -->
  // 目录: /assets/share01/React 前端测试.xmind


## 测试框架

- jest
  - github https://github.com/facebook/jest
  - 英文 https://jestjs.io/
  - 中文 https://www.jestjs.cn/
- cypress
  - github https://github.com/cypress-io/cypress
  - 英文 https://www.cypress.io/
