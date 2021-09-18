---
slug: NPM包开发KnowledgeMap
title: NPM包开发KnowledgeMap
authors: [meng]
tags: [nodejs, node, npm]
---

# NPM包开发KnowledgeMap

给公司的文档库写了篇私库开发的 KnowledgeMap，从中摘取一部分。

## 思考：
1. 当我们 npm i package 的时候之后，require 或 import 一个包的时时候，是如何寻找到这个包的。
2. 当一个包，在项目中存在多个版本的情况，如何确定引入的是哪个版本。例如项目依赖了 packageA@3.0.0 和 packageB@1.0.0， 而packageB 又依赖了pacakgeA@2.0.0.
3. npm 包是如何提供一个命令的。例如， 当我们安装 npm -g nrm 的时候，为何会有nrm 命令产生。
4. 如何手动发布一个npm 包到公网npm 仓库
5. 包的版本如何定义
6. 什么时候需要发布一个npm 包
7. 什么时间节点需要发布一个 npm 包的新版本，新的版本又该如何定义。


## 正文
由于上述问题，涉及到的内容略多，下是推荐和相关的知识点。

1. nodejs的模块解析策略 
    1. http://nodejs.cn/api/modules.html
    2. https://www.tslang.cn/docs/handbook/module-resolution.html
2. package.json 字段含义
    1. https://docs.npmjs.com/cli/v6/configuring-npm/package-json
    2. 非官方扩展字段 不在基础node或浏览器环境下支持，但被某些包支持
        - module  指定esm module 的入口文件。 由rollup最早提出(https://github.com/rollup/rollup/wiki/pkg.module), webpack2.x之后版本开始支持
        - types, typings  指定包的d.ts的入口文件，由typescript 支持
        - unpkg  公网npm 包可以使用的的cdn  https://github.com/mjackson/unpkg
        - sideEffects Webpack 支持的，用来标记副作用文件，是否可以被TreeShaking
3. esm module 和 cjs module 是什么， 有什么区别
    1. esm https://tc39.es/ecma262/#sec-modules
    2. cjs http://nodejs.cn/api/modules.html
4. 命令的本质就是一个可执行文件，俗称脚本文件。nodejs 产生的js 脚本文件 在使用 #！ /user/bin/env node 指定脚本的运行者。如同shell 脚本需要在文件头指定运行者 #! /bin/bash 一样。
    1. npm 发布相关命令   https://docs.npmjs.com/cli/v7/commands
        - npm login 
        - npm public
        - npm deprecate
5. npm 的语义化版本
    1. https://docs.npmjs.com/about-semantic-versioning
    2. https://semver.org
3. 了解包 semantic-release  系列的包 https://github.com/semantic-release/semantic-release
4. 了解 conventional-changelog 系列的包 
    1. https://www.conventionalcommits.org/
    2. https://github.com/conventional-changelog

