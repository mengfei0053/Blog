---
slug: npm-resource-manager
title: Npm源管理
authors: [meng]
tags: [nodejs, npm,yarn]
keywords: [nodejs, Npm源管理,npm换源,ynrm,npm, yarn, nrm, yrm]
description: Npm源管理, npm, yarn, nrm, yrm
---

# Npm源管理 - Ynrm

NPM: https://www.npmjs.com/package/ynrm
Github: https://github.com/mengfei0053/ynrm.git

Fork了狼叔yrm做了一些修改, 可以同时更改yarn 和npm 当前用户的源。

## Ynrm 和. Nrm/Yrm

- 用 typescript 重写了一下
- 将npm从依赖中移除, 通过`npm root -g`,获取本机的npm
- 使用axios替换request


## 安装

```
$ npm install -g ynrm
```

## Example

```
ynrm ls # 查看源

* npm -----  https://registry.npmjs.org/
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  rednpm --  http://registry.mirror.cqupt.edu.cn
  skimdb --  https://skimdb.npmjs.com/registry
  yarn ----  https://registry.yarnpkg.com

```


```shell
# ynrm will set up both npm registy and yarn registry
# switch registry to taobao registry
ynrm use cnpm # 使用源

    YARN Registry has been set to: https://registry.npm.taobao.org/

    NPM Registry has been set to: https://registry.npm.taobao.org/

ynrm add custom_registry https://custom_registry.xx.com # 添加仓库源
ynrm del custom_registry # 删除仓库源
ynrm test # 测试仓库源链接速度

```

## Usage

```
Usage: ynrm [options] [command]

  Commands:

    ls                           List all the registries
    use <registry>               Change registry to registry
    add <registry> <url> [home]  Add one custom registry
    del <registry>               Delete one custom registry
    home <registry> [browser]    Open the homepage of registry with optional browser
    test [registry]              Show the response time for one or all registries
    help                         Print this help

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## 默认可选仓库源

- [npm](https://www.npmjs.org)
- [cnpm](http://cnpmjs.org)
- [nodejitsu](https://www.nodejitsu.com)
- [tencent](https://mirrors.cloud.tencent.com/npm/)
- [taobao](http://npm.taobao.org/)
- [rednpm](http://npm.mirror.cqupt.edu.cn)
- [yarn](https://registry.yarnpkg.com)

