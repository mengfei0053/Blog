"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[698],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),k=r,d=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(d,p(p({ref:t},c),{},{components:a})):n.createElement(d,p({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7797:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],o={slug:"write-ts-in-js",title:"\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b",authors:["meng"],tags:["typescript"],keywords:["typescript","\u7c7b\u578b","js"],description:"\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b"},i="\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b",u={permalink:"/blog/write-ts-in-js",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/Ts/\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b.md",source:"@site/blog/Ts/\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b.md",title:"\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b",description:"\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b",date:"2021-11-30T10:53:16.092Z",formattedDate:"November 30, 2021",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:5.585,truncated:!1,authors:[{name:"MengFei",title:"Front-End Developer",url:"https://github.com/mengfei0053",imageURL:"/img/avatar.png",key:"meng"}],prevItem:{title:"Typescript\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7",permalink:"/blog/ts-usage-summary"},nextItem:{title:"Powershell \u4e0b\u65e0\u6cd5\u4f7f\u7528 npm \u5168\u5c40\u5305",permalink:"/blog/powershell-windows"}},c={authorsImageUrls:[void 0]},s=[{value:"JSDOC \u4ecb\u7ecd",id:"jsdoc-\u4ecb\u7ecd",children:[],level:2},{value:"\u5386\u53f2",id:"\u5386\u53f2",children:[],level:2},{value:"\u5e38\u7528\u6807\u6ce8",id:"\u5e38\u7528\u6807\u6ce8",children:[],level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[],level:2},{value:"JSDOC \u4e2d\u7c7b\u578b\u548c Typescipt\u4e2d\u7c7b\u578b\u7684\u533a\u522b",id:"jsdoc-\u4e2d\u7c7b\u578b\u548c-typescipt\u4e2d\u7c7b\u578b\u7684\u533a\u522b",children:[],level:2},{value:"JSDOC \u597d\u5904",id:"jsdoc-\u597d\u5904",children:[],level:2},{value:"\u4f7f\u7528JSDOC \u7684\u5f00\u6e90\u9879\u76ee",id:"\u4f7f\u7528jsdoc-\u7684\u5f00\u6e90\u9879\u76ee",children:[],level:2}],m={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5f88\u591a\u540c\u5b66\u5728\u521a\u5f00\u59cb\u5b66\u4e60\u5199ts\u7684\u65f6\u5019\uff0c\u4e0d\u592a\u6e05\u695a\u5982\u4f55\u5199\u7c7b\u578b\uff0c\u4ee5\u53ca\u4f55\u65f6\u5e94\u8be5\u5199\u7c7b\u578b\uff0c\u53c8\u8be5\u4f55\u65f6\u4f7f\u7528\u7c7b\u578b\u3002\n\u8fd9\u91cc\u5f15\u51fa\u4e86\u4e09\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5b9a\u4e49\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ol"},"\u4f55\u65f6\u5b9a\u4e49\u7c7b\u578b",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u4ea7\u751f\uff0c\u548c\u6570\u636e\u83b7\u53d6\u7684\u5730\u65b9\u3002 "),(0,l.kt)("li",{parentName:"ol"},"\u6bd4\u5982\u5b9a\u4e49\u8bf7\u6c42\u51fd\u6570\u7684\u5730\u65b9\uff0c \u72ec\u7acb\u7ec4\u4ef6props\u7684\u5b9a\u4e49\uff0c\u90fd\u662f\u7ecf\u5178\u4e14\u57fa\u7840\u7684\u9700\u8981\u5b9a\u4e49\u7c7b\u578b\u7684\u5730\u65b9"))),(0,l.kt)("li",{parentName:"ol"},"\u4f55\u65f6\u4f7f\u7528\u7c7b\u578b\uff0c\u5373\u5f15\u7528\u7c7b\u578b",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u4f7f\u7528\u7684\u5730\u65b9\uff0c\u6570\u636e\u5173\u8054\u7684\u5730\u65b9\uff0c\u8fd9\u4e9b\u5730\u65b9\uff0c\u5e94\u8be5\u4f18\u5148\u5f15\u7528\u4e0a\u8ff0\u5b9a\u4e49\u7684\u7c7b\u578b\uff0c\u800c\u65e0\u9700\u91cd\u590d\u5b9a\u4e49\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f8b\u5982\u4f7f\u7528\u8bf7\u6c42\u6765\u7684\u6570\u636e\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u8bf7\u6c42\u51fd\u6570\u5b9a\u4e49\u65f6\u5b9a\u4e49\u7684\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u7ec4\u4ef6\u5b9a\u4e49\u65f6\u5b9a\u4e49\u7684\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u5173\u8054\u7684\u5730\u65b9\uff0c\u6307\u6bd4\u5982\u4e24\u4e2a\u63a5\u53e3\uff0c\u83b7\u53d6\u7684\u6570\u636e\u6709\u4e00\u5b9a\u7684\u5305\u542b\u5173\u7cfb\uff0c\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u7ee7\u627f\uff0c\u6765\u5f15\u7528\u7c7b\u578b\u3002")))),(0,l.kt)("p",null,"\u7c7b\u578b\u4f7f\u7528\u548c\u5b9a\u4e49\uff0c\u5e94\u8be5\u9075\u5faa\uff0c\u5b9a\u4e49\u5c3d\u91cf\u5c11\u7684\u7c7b\u578b\uff0c\u589e\u52a0\u5df2\u5b9a\u4e49\u7c7b\u578b\u7684\u590d\u7528\u6027\u539f\u5219\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u8fd9\u4e09\u4e2a\u95ee\u9898\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a\u7ec3\u4e60\u592a\u5c11\u7684\u95ee\u9898\uff0c\u5f88\u591a\u8001\u7684\u9879\u76ee\uff0c\u5e76\u6ca1\u6709\u4f7f\u7528Ts \u7f16\u5199\u3002\u90a3\u4e48\u9664\u4e86\u81ea\u5df1\u7684ts \u7ec3\u4e60\u9879\u76ee\u5916\uff0c\n\u8fd8\u53ef\u4ee5\u5728\u54ea\u91cc\u719f\u6089 ts\u7c7b\u578b\u7684\u5199\u6cd5\u5462\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u5411\u5927\u5bb6\u4ecb\u7ecd\u4e00\u4e2a\u53ef\u80fd\u5f88\u591a\u4eba\u90fd\u89c1\u8fc7\uff0c\u5e76\u4e14\u5199\u8fc7\u7684\u4e1c\u897f\uff0c ------------------- JSDOC\u3002\n\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528JSDOC, \u5b9a\u4e49\u5404\u79cd\u7c7b\u578b\uff0c\u4ee5\u53ca\u53ef\u4ee5\u88abvscode\u826f\u597d\u7684\u652f\u6301\uff0c\u7ed9\u51fa\u8fb9\u754c\u7684\u7c7b\u578b\u4ee3\u7801\u63d0\u793a\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u8fd9\u79cd\u6ce8\u91ca\uff0c\u4f30\u8ba1\u5927\u90e8\u5206\u524d\u7aef\u5f00\u53d1\u8005\u90fd\u89c1\u8fc7\uff0c\u5e76\u4e14\u90fd\u5199\u8fc7\uff0c\u4f46\u53ef\u80fd\u4e86\u89e3\u7684\u5e76\u4e0d\u662f\u5f88\u591a\u3002\u4e0b\u9762\u6211\u4eec\u5bf9JSDOC\u662f\u4ec0\u4e48\uff0c\n\u4ee5\u53ca\u6709\u4ec0\u4e48\u4f5c\u7528\u6765\u505a\u4e2a\u4ecb\u7ecd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u51fd\u6570Desc\n * @param {string} params1 \n * @param {number} params2 \n */\nfunction name(params1, params2) {\n    \n}\n")),(0,l.kt)("h2",{id:"jsdoc-\u4ecb\u7ecd"},"JSDOC \u4ecb\u7ecd"),(0,l.kt)("p",null,"JSDoc\u662f\u4e00\u4e2a\u6839\u636ejavascript\u6587\u4ef6\u4e2d\u6ce8\u91ca\u4fe1\u606f\uff0c\u751f\u6210JavaScript\u5e94\u7528\u7a0b\u5e8f\u6216\u5e93\u3001\u6a21\u5757\u7684API\u6587\u6863 \u7684\u5de5\u5177\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ed6\u8bb0\u5f55\u5982\uff1a\u547d\u540d\u7a7a\u95f4\uff0c\u7c7b\uff0c\u65b9\u6cd5\uff0c\u65b9\u6cd5\u53c2\u6570\u7b49\u3002\u7c7b\u4f3cJavaDoc\u548cPHPDoc\u3002",(0,l.kt)("strong",{parentName:"p"},"\u73b0\u5728\u5f88\u591a\u7f16\u8f91\u5668\u6216IDE\u4e2d\u8fd8\u53ef\u4ee5\u901a\u8fc7JSDoc\u76f4\u63a5\u6216\u4f7f\u7528\u63d2\u4ef6\u751f\u6210\u667a\u80fd\u63d0\u793a\u3002\u4ece\u800c\u4f7f\u5f00\u53d1\u8005\u5f88\u5bb9\u6613\u4e86\u89e3\u6574\u4e2a\u7c7b\u548c\u5176\u4e2d\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5e76\u4e14\u5feb\u901f\u77e5\u9053\u5982\u4f55\u4f7f\u7528\uff0c\u4ece\u800c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u964d\u4f4e\u7ef4\u62a4\u6210\u672c\u3002")),(0,l.kt)("p",null,"\u662f\u6807\u8bb0\u53d8\u91cf\u3001\u5165\u53c2\u3001\u8fd4\u56de\u503c\u7684\u7c7b\u578b\uff0c\u7a0d\u5fae\u5f25\u8865\u4e86 JavaScript \u6ca1\u6709\u9759\u6001\u7c7b\u578b\uff0c\u4e0d\u652f\u6301\u7c7b\u578b\u6807\u6ce8\u7684\u95ee\u9898\u3002\u57fa\u4e8e JSDoc \u7684\u7c7b\u578b\u6ce8\u91ca\uff0cGoogle Closure Compiler \u53ef\u4ee5\u5206\u6790\u4f18\u5316\u4ee3\u7801\uff0c",(0,l.kt)("strong",{parentName:"p"},"VS Code \u4e4b\u7c7b\u7684\u4ee3\u7801\u7f16\u8f91\u5668\u53ef\u4ee5\u5728\u4e0d\u4f7f\u7528 TypeScript \u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0\u4ee3\u7801\u63d0\u793a\u3002")),(0,l.kt)("h2",{id:"\u5386\u53f2"},"\u5386\u53f2"),(0,l.kt)("p",null,"Michael Mathews \u5728 2001 \u5e74\u521b\u5efa JSDoc \u9879\u76ee\uff0c\u5b83\u662f\u6700\u65e9\u7684 JavaScript \u6587\u6863\u5de5\u5177\uff0c\u6ce8\u91ca\u8bed\u6cd5\u501f\u9274\u81ea Javadoc\uff08\u5f88\u591a\u6587\u6863\u5de5\u5177\u90fd\u4f7f\u7528\u4e86\u7c7b\u4f3c Javadoc \u6ce8\u91ca\u8bed\u6cd5\uff0c\u6bd4\u5982 C++ \u7684 Doxygen\u3001 PHP \u7684 phpDocumentor\uff09\u3002\u622a\u6b62 2020 \u5e74\u7ecf\u5386\u4e86 4 \u4e2a\u5927\u7248\u672c\u66f4\u65b0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2001 JSDoc (JSDoc.pm): \u4f7f\u7528 Perl \u7f16\u5199\uff0c\u4ee3\u7801\u6258\u7ba1\u5728 SourceForge"),(0,l.kt)("li",{parentName:"ul"},"2007 JsDoc Toolkit 1.0: \u4f7f\u7528 JavaScript \u7f16\u5199\uff0c\u57fa\u4e8e Rhino\uff0c\u8fd0\u884c\u5728 Java \u5e73\u53f0\uff0c\u4ee3\u7801\u6258\u7ba1\u5728 Google Code"),(0,l.kt)("li",{parentName:"ul"},"2008 JsDoc Toolkit 2.0: \u540c 1.0"),(0,l.kt)("li",{parentName:"ul"},"2011 JSDoc 3: \u57fa\u4e8e Node.js\uff0c\u4ee3\u7801\u6258\u7ba1\u5728 GitHub")),(0,l.kt)("p",null,"\u7f16\u8bd1\u6587\u6863\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g jsdoc \njsdoc yourjavascriptfile.js\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u5730\u5740: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jsdoc/jsdoc"},"https://github.com/jsdoc/jsdoc")),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u6587\u6863: ",(0,l.kt)("a",{parentName:"li",href:"https://jsdoc.app/"},"https://jsdoc.app/"),"  ",(0,l.kt)("a",{parentName:"li",href:"http://www.dba.cn/book/jsdoc/"},"http://www.dba.cn/book/jsdoc/"))),(0,l.kt)("h2",{id:"\u5e38\u7528\u6807\u6ce8"},"\u5e38\u7528\u6807\u6ce8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@type"),(0,l.kt)("li",{parentName:"ul"},"@typedef"),(0,l.kt)("li",{parentName:"ul"},"@property/@prop"),(0,l.kt)("li",{parentName:"ul"},"@template"),(0,l.kt)("li",{parentName:"ul"},"@enum"))),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@param/@argument/@arg"),(0,l.kt)("li",{parentName:"ul"},"@returns/@return"),(0,l.kt)("li",{parentName:"ul"},"@throws"),(0,l.kt)("li",{parentName:"ul"},"@deprecated"))),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u548c\u7ee7\u627f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@constructor/@class"),(0,l.kt)("li",{parentName:"ul"},"@this"),(0,l.kt)("li",{parentName:"ul"},"@extends"),(0,l.kt)("li",{parentName:"ul"},"@public"),(0,l.kt)("li",{parentName:"ul"},"@private"),(0,l.kt)("li",{parentName:"ul"},"@protected"),(0,l.kt)("li",{parentName:"ul"},"@readonly"))),(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@fileoverview"),(0,l.kt)("li",{parentName:"ul"},"@author"),(0,l.kt)("li",{parentName:"ul"},"@example"),(0,l.kt)("li",{parentName:"ul"},"@description"),(0,l.kt)("li",{parentName:"ul"},"@see"),(0,l.kt)("li",{parentName:"ul"},"@link"),(0,l.kt)("li",{parentName:"ul"},"@license"),(0,l.kt)("li",{parentName:"ul"},"@preserve")))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("p",null,"\u5b9a\u4e49\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * desc desc desc\n * @typedef {string|number} TypeName\n * /\n/**\n * desc desc desc\n * @typedef {Object} ObjectTypeName\n * @property {string} name\n * @property {number} age\n * /\n \n/**\n * desc desc desc\n * @typedef {{\n * name:string;\n * age:number;\n * count: string | number;\n * }} ObjectTypeName\n * /\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**@type {TypeName} **/\nlet a = '';\n\n\n/**@type {ObjectTypeName} **/\nlet obj = {};\n\n")),(0,l.kt)("h2",{id:"jsdoc-\u4e2d\u7c7b\u578b\u548c-typescipt\u4e2d\u7c7b\u578b\u7684\u533a\u522b"},"JSDOC \u4e2d\u7c7b\u578b\u548c Typescipt\u4e2d\u7c7b\u578b\u7684\u533a\u522b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u6cdb\u578b\u3002"),(0,l.kt)("li",{parentName:"ol"},"JSDOC \u672c\u8d28\u5c31\u662f\u6ce8\u91ca\uff0c \u65e0\u6cd5\u652f\u6301\uff0c ts\u7684\u7c7b\u578b\u68c0\u67e5\u3002\u53ea\u80fd\u63d0\u4f9b\u7c7b\u578b\u63d0\u793a\u3002")),(0,l.kt)("h2",{id:"jsdoc-\u597d\u5904"},"JSDOC \u597d\u5904"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6ce8\u91ca\u66f4\u52a0\u89c4\u8303\u5316\uff0c"),(0,l.kt)("li",{parentName:"ol"},"\u8ba9js \u5177\u5907\u7c7b\u578b\u63d0\u793a\uff0c\u4ee3\u7801\u63d0\u793a\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u589e\u52a0js\u4ee3\u7801\u53ef\u8bfb\u6027\uff0c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u76f4\u63a5\u751f\u6210 api \u6587\u6863\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528jsdoc-\u7684\u5f00\u6e90\u9879\u76ee"},"\u4f7f\u7528JSDOC \u7684\u5f00\u6e90\u9879\u76ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"loadash ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lodash/lodash"},"https://github.com/lodash/lodash")),(0,l.kt)("li",{parentName:"ul"},"axios ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/axios/axios"},"https://github.com/axios/axios")),(0,l.kt)("li",{parentName:"ul"},"mathjs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/josdejong/mathjs"},"https://github.com/josdejong/mathjs")),(0,l.kt)("li",{parentName:"ul"},"ramda ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ramda/ramda"},"https://github.com/ramda/ramda"))))}k.isMDXComponent=!0}}]);