---
slug: write-ts-in-js
title: 如何在JS文件里写类型
authors: [meng]
tags: [typescript]
keywords: [typescript, 类型, js]
description: 如何在JS文件里写类型
---

# 如何在JS文件里写类型

很多同学在刚开始学习写ts的时候，不太清楚如何写类型，以及何时应该写类型，又该何时使用类型。
这里引出了三个问题：

1. 如何定义类型
2. 何时定义类型
    1. 数据产生，和数据获取的地方。 
    2. 比如定义请求函数的地方， 独立组件props的定义，都是经典且基础的需要定义类型的地方
3. 何时使用类型，即引用类型
    1. 数据使用的地方，数据关联的地方，这些地方，应该优先引用上述定义的类型，而无需重复定义类型。
    2. 例如使用请求来的数据的时候，使用请求函数定义时定义的类型
    3. 组件使用的时候，使用组件定义时定义的类型。
    4. 数据关联的地方，指比如两个接口，获取的数据有一定的包含关系，可以使用类型继承，来引用类型。
    
类型使用和定义，应该遵循，定义尽量少的类型，增加已定义类型的复用性原则。

除了这三个问题外，还有一个练习太少的问题，很多老的项目，并没有使用Ts 编写。那么除了自己的ts 练习项目外，
还可以在哪里熟悉 ts类型的写法呢。

这里向大家介绍一个可能很多人都见过，并且写过的东西， ------------------- JSDOC。
我们可以使用JSDOC, 定义各种类型，以及可以被vscode良好的支持，给出边界的类型代码提示。

下面这种注释，估计大部分前端开发者都见过，并且都写过，但可能了解的并不是很多。下面我们对JSDOC是什么，
以及有什么作用来做个介绍
```js
/**
 * 函数Desc
 * @param {string} params1 
 * @param {number} params2 
 */
function name(params1, params2) {
    
}
```

## JSDOC 介绍
JSDoc是一个根据javascript文件中注释信息，生成JavaScript应用程序或库、模块的API文档 的工具。你可以使用他记录如：命名空间，类，方法，方法参数等。类似JavaDoc和PHPDoc。**现在很多编辑器或IDE中还可以通过JSDoc直接或使用插件生成智能提示。从而使开发者很容易了解整个类和其中的属性和方法，并且快速知道如何使用，从而提高开发效率，降低维护成本。**

是标记变量、入参、返回值的类型，稍微弥补了 JavaScript 没有静态类型，不支持类型标注的问题。基于 JSDoc 的类型注释，Google Closure Compiler 可以分析优化代码，**VS Code 之类的代码编辑器可以在不使用 TypeScript 的情况下实现代码提示。**

## 历史

Michael Mathews 在 2001 年创建 JSDoc 项目，它是最早的 JavaScript 文档工具，注释语法借鉴自 Javadoc（很多文档工具都使用了类似 Javadoc 注释语法，比如 C++ 的 Doxygen、 PHP 的 phpDocumentor）。截止 2020 年经历了 4 个大版本更新：

- 2001 JSDoc (JSDoc.pm): 使用 Perl 编写，代码托管在 SourceForge
- 2007 JsDoc Toolkit 1.0: 使用 JavaScript 编写，基于 Rhino，运行在 Java 平台，代码托管在 Google Code
- 2008 JsDoc Toolkit 2.0: 同 1.0
- 2011 JSDoc 3: 基于 Node.js，代码托管在 GitHub

编译文档用法
```shell
npm i -g jsdoc 
jsdoc yourjavascriptfile.js
```

- 项目地址: https://github.com/jsdoc/jsdoc
- 语法文档: https://jsdoc.app/  http://www.dba.cn/book/jsdoc/


## 常用标注
- 类型
    - @type
    - @typedef
    - @property/@prop
    - @template
    - @enum
- 函数
    - @param/@argument/@arg
    - @returns/@return
    - @throws
    - @deprecated
- 类和继承
    - @constructor/@class
    - @this
    - @extends
    - @public
    - @private
    - @protected
    - @readonly
- 文档
    - @fileoverview
    - @author
    - @example
    - @description
    - @see
    - @link
    - @license
    - @preserve

## 使用示例

定义类型：

```js
/**
 * desc desc desc
 * @typedef {string|number} TypeName
 * /
/**
 * desc desc desc
 * @typedef {Object} ObjectTypeName
 * @property {string} name
 * @property {number} age
 * /
 
/**
 * desc desc desc
 * @typedef {{
 * name:string;
 * age:number;
 * count: string | number;
 * }} ObjectTypeName
 * /
```

使用类型
```js
/**@type {TypeName} **/
let a = '';


/**@type {ObjectTypeName} **/
let obj = {};

```

## JSDOC 中类型和 Typescipt中类型的区别

1. 不支持泛型。
2. JSDOC 本质就是注释， 无法支持， ts的类型检查。只能提供类型提示。


## JSDOC 好处

1. 注释更加规范化，
2. 让js 具备类型提示，代码提示。
3. 增加js代码可读性，可维护性。
4. 可以直接生成 api 文档。

## 使用JSDOC 的开源项目

- loadash https://github.com/lodash/lodash
- axios https://github.com/axios/axios
- mathjs https://github.com/josdejong/mathjs
- ramda https://github.com/ramda/ramda



