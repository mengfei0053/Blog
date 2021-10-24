# 如何在JS文件里写类型

很多同学在刚开始学习写ts的时候，不太清楚如何写类型，以及何时应该写类型，又该何时使用类型。
这里引出了三个问题：

1. 如何定义类型
2. 何时定义类型
3. 何时使用类型

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
JSDoc是一个根据javascript文件中注释信息，生成JavaScript应用程序或库、模块的API文档 的工具。你可以使用他记录如：命名空间，类，方法，方法参数等。类似JavaDoc和PHPDoc。现在很多编辑器或IDE中还可以通过JSDoc直接或使用插件生成智能提示。从而使开发者很容易了解整个类和其中的属性和方法，并且快速知道如何使用，从而提高开发效率，降低维护成本。

```shell
npm i -g jsdoc 
jsdoc yourjavascriptfile.js
```

- 项目地址: https://github.com/jsdoc/jsdoc
- 语法文档: https://jsdoc.app/  http://www.dba.cn/book/jsdoc/


## 使用JSDOC 定义和使用类型

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
3. 增加代码可读性，可维护性。
4. 可以直接生成 api 文档。

