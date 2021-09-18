"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5654],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6851:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return s},toc:function(){return f},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={},p="npm-shrinkwrap.json\u3001package-lock.json\u548cyarn.lock",l={permalink:"/Blog/blog/nodejs/npm\u5305\u9501\u7248\u672c",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/nodejs/npm\u5305\u9501\u7248\u672c.md",source:"@site/blog/nodejs/npm\u5305\u9501\u7248\u672c.md",title:"npm-shrinkwrap.json\u3001package-lock.json\u548cyarn.lock",description:"\u521d\u59cb",date:"2021-09-18T07:17:48.198Z",formattedDate:"September 18, 2021",tags:[],readingTime:.895,truncated:!1,authors:[],prevItem:{title:"\u4ecenpm-shrinkwrap \u5230 package-lock",permalink:"/Blog/blog/\u4ecenpm-shrinkwrap \u5230 package-lock"},nextItem:{title:"Nodejs Process \u4fe1\u53f7\u4e8b\u4ef6",permalink:"/Blog/blog/nodejs/process\u4fe1\u53f7\u4e8b\u4ef6"}},s={authorsImageUrls:[]},f=[{value:"\u521d\u59cb",id:"\u521d\u59cb",children:[]}],m={toc:f};function u(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u521d\u59cb"},"\u521d\u59cb"),(0,o.kt)("p",null,"\u9501\u7248\u672c\u7684\u8d77\u59cb\nnpm v1.1.2 \u7248\u672c\uff0c 2012\u5e742\u670825\u53f7 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/cli/commit/d54ce3154dfe5283fcfeffc13d4e003bbade6370#diff-160056e00187b4f9fa30cb1ccf52d15febbae3f425abb1cf72a5e56b388d2a67"},"https://github.com/npm/cli/commit/d54ce3154dfe5283fcfeffc13d4e003bbade6370#diff-160056e00187b4f9fa30cb1ccf52d15febbae3f425abb1cf72a5e56b388d2a67"),"\n\u8fd9\u4e2acommit \u5f00\u59cb \u6dfb\u52a0\u4e86 npm shrinkwrap\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/cli/blob/v1.1.2/doc/cli/shrinkwrap.md"},"v1.1.2 npm-shrinkwrap \u89e3\u91ca\u6587\u6863"),"\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"By default, \"npm install\" recursively installs the target's dependencies (as specified in package.json), choosing the latest available version that satisfies the dependency's semver pattern.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'When "npm install" installs a package with a npm-shrinkwrap.json file in the package root, the shrinkwrap file (rather than package.json files) completely drives the installation of that package and all of its dependencies (recursively). \n')),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"npm i \u9012\u5f52\u5b89\u88c5package.json \u4e2d\u8bb0\u8f7d\u7684\u4f9d\u8d56\uff0c\u4f9d\u8d56\u7248\u672c\u9009\u62e9\u7b26\u5408 semver \u7248\u672c\u7684\u6700\u65b0\u7248\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 npm shrinkwrap \u751f\u6210 npm-shrinkwrap.json \u6587\u4ef6\u6765\u4fdd\u5b58\u5f53\u524d\u4f9d\u8d56\u7684\u7248\u672c\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ol"},"\u5f53 npm-shrinkwrap.json \u6587\u4ef6\u5b58\u5728\u65f6,\u6309\u7167\u6b64\u6587\u4ef6\u4e2d\u8bb0\u8f7d\u7684\u4f9d\u8d56\u7248\u672c\uff0c\u8fdb\u884c\u5b89\u88c5")))}u.isMDXComponent=!0}}]);