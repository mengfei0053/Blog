"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2136],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),l=["components"],o={title:"Typescript\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7",authors:["meng"],tags:["ts","react"]},i=void 0,c={permalink:"/Blog/blog/Ts/Typescript\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/Ts/Typescript\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7.md",source:"@site/blog/Ts/Typescript\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7.md",title:"Typescript\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7",description:"- Typescript \u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7",date:"2021-11-26T13:27:21.665Z",formattedDate:"November 26, 2021",tags:[{label:"ts",permalink:"/Blog/blog/tags/ts"},{label:"react",permalink:"/Blog/blog/tags/react"}],readingTime:9.4,truncated:!1,authors:[{name:"MengFei",title:"Front-End Developer",url:"https://github.com/mengfei0053",imageURL:"/Blog/img/avatar.png",key:"meng"}],prevItem:{title:"ReactHooks",permalink:"/Blog/blog/React/ReactHooks"},nextItem:{title:"\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b",permalink:"/Blog/blog/Ts/\u5982\u4f55\u5728JS\u6587\u4ef6\u91cc\u5199\u7c7b\u578b"}},s={authorsImageUrls:[void 0]},u=[{value:"1. Typescript \u90e8\u5206\u5e38\u7528\u53ef\u80fd\u4f1a\u88ab\u5ffd\u7565\u7684\u77e5\u8bc6\u70b9",id:"1-typescript-\u90e8\u5206\u5e38\u7528\u53ef\u80fd\u4f1a\u88ab\u5ffd\u7565\u7684\u77e5\u8bc6\u70b9",children:[{value:"1.1 \u7c7b\u578b\u83b7\u53d6",id:"11-\u7c7b\u578b\u83b7\u53d6",children:[{value:"1.1.1 typeof",id:"111-typeof",children:[],level:4},{value:"1.1.2 \u7d22\u5f15\u7c7b\u578b\u67e5\u8be2\u64cd\u4f5c\u7b26 keyof",id:"112-\u7d22\u5f15\u7c7b\u578b\u67e5\u8be2\u64cd\u4f5c\u7b26-keyof",children:[],level:4},{value:"1.1.3 \u7d22\u5f15\u8bbf\u95ee",id:"113-\u7d22\u5f15\u8bbf\u95ee",children:[],level:4}],level:3},{value:"1.2 \u6cdb\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49",id:"12-\u6cdb\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49",children:[],level:3},{value:"1.3 \u6761\u4ef6\u7c7b\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49",id:"13-\u6761\u4ef6\u7c7b\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49",children:[],level:3}],level:2},{value:"2. React \u9879\u76ee\u4e2d\u7684 Typescript",id:"2-react-\u9879\u76ee\u4e2d\u7684-typescript",children:[{value:"2.1 \u81ea\u5b9a\u4fee\u590d\u548c\u81ea\u52a8\u5bfc\u5165",id:"21-\u81ea\u5b9a\u4fee\u590d\u548c\u81ea\u52a8\u5bfc\u5165",children:[{value:"2.1.1 \u4e66\u5199\u65f6\u7684\u667a\u80fd\u63d0\u793a\u548c\u5bfc\u5165",id:"211-\u4e66\u5199\u65f6\u7684\u667a\u80fd\u63d0\u793a\u548c\u5bfc\u5165",children:[],level:4},{value:"2.1.2 \u81ea\u52a8 fix \u7684\u81ea\u52a8\u5bfc\u5165",id:"212-\u81ea\u52a8-fix-\u7684\u81ea\u52a8\u5bfc\u5165",children:[],level:4}],level:3},{value:"2.2 \u5b9a\u4e49\u7ec4\u4ef6\u7684 props \u4e2d\u7684\u7c7b\u578b",id:"22-\u5b9a\u4e49\u7ec4\u4ef6\u7684-props-\u4e2d\u7684\u7c7b\u578b",children:[{value:"2.2.1 props \u7684 interface \u5b9a\u4e49\u4f4d\u7f6e",id:"221-props-\u7684-interface-\u5b9a\u4e49\u4f4d\u7f6e",children:[],level:4},{value:"2.2.2 \u5bfc\u51fa\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u7c7b\u578b\uff08interface/type/enum\uff09",id:"222-\u5bfc\u51fa\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u7c7b\u578binterfacetypeenum",children:[],level:4},{value:"2.2.3 \u4f7f\u7528\u548c\u67e5\u627e\u5df2\u5b9a\u4e49\u7684\u7c7b\u578b",id:"223-\u4f7f\u7528\u548c\u67e5\u627e\u5df2\u5b9a\u4e49\u7684\u7c7b\u578b",children:[],level:4}],level:3},{value:"2.3 \u4f20\u9012\u7ec4\u4ef6 props \u65f6\uff0c\u4f7f\u7528\u5230\u7684\u7c7b\u578b",id:"23-\u4f20\u9012\u7ec4\u4ef6-props-\u65f6\u4f7f\u7528\u5230\u7684\u7c7b\u578b",children:[],level:3},{value:"2.4 Vsocde \u4e2d\u7684\u91cd\u6784",id:"24-vsocde-\u4e2d\u7684\u91cd\u6784",children:[{value:"2.4.1 \u5f15\u7528\u67e5\u627e",id:"241-\u5f15\u7528\u67e5\u627e",children:[],level:4},{value:"2.4.2 \u5f15\u7528\u91cd\u547d\u540d",id:"242-\u5f15\u7528\u91cd\u547d\u540d",children:[],level:4}],level:3},{value:"2.5 \u4f7f\u7528 code snippets",id:"25-\u4f7f\u7528-code-snippets",children:[{value:"2.4.1 ES7 React/Redux/React-Native/JS snippets",id:"241-es7-reactreduxreact-nativejs-snippets",children:[],level:4},{value:"2.4.2 Typescript React Code snippets",id:"242-typescript-react-code-snippets",children:[],level:4}],level:3}],level:2},{value:"3 React Redux \u7ed3\u5408 Typescript",id:"3-react-redux-\u7ed3\u5408-typescript",children:[],level:2}],m={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#typescript-%E4%BD%BF%E7%94%A8%E6%80%BB%E7%BB%93%E5%8F%8A%E9%83%A8%E5%88%86%E5%B0%8F%E6%8A%80%E5%B7%A7"},"Typescript \u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#1-typescript-%E9%83%A8%E5%88%86%E5%B8%B8%E7%94%A8%E5%8F%AF%E8%83%BD%E4%BC%9A%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9"},"1. Typescript \u90e8\u5206\u5e38\u7528\u53ef\u80fd\u4f1a\u88ab\u5ffd\u7565\u7684\u77e5\u8bc6\u70b9"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#11-%E7%B1%BB%E5%9E%8B%E8%8E%B7%E5%8F%96"},"1.1 \u7c7b\u578b\u83b7\u53d6"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#111-typeof"},"1.1.1 typeof")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#112-%E7%B4%A2%E5%BC%95%E7%B1%BB%E5%9E%8B%E6%9F%A5%E8%AF%A2%E6%93%8D%E4%BD%9C%E7%AC%A6-keyof"},"1.1.2 \u7d22\u5f15\u7c7b\u578b\u67e5\u8be2\u64cd\u4f5c\u7b26 keyof")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#113-%E7%B4%A2%E5%BC%95%E8%AE%BF%E9%97%AE"},"1.1.3 \u7d22\u5f15\u8bbf\u95ee")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#12-%E6%B3%9B%E5%9E%8B%E7%9A%84%E4%BD%BF%E7%94%A8%E5%92%8C%E5%AE%9A%E4%B9%89"},"1.2 \u6cdb\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#13-%E6%9D%A1%E4%BB%B6%E7%B1%BB%E5%9E%8B%E7%9A%84%E4%BD%BF%E7%94%A8%E5%92%8C%E5%AE%9A%E4%B9%89"},"1.3 \u6761\u4ef6\u7c7b\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#2-react-%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84-typescript"},"2. React \u9879\u76ee\u4e2d\u7684 Typescript"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#21-%E8%87%AA%E5%AE%9A%E4%BF%AE%E5%A4%8D%E5%92%8C%E8%87%AA%E5%8A%A8%E5%AF%BC%E5%85%A5"},"2.1 \u81ea\u5b9a\u4fee\u590d\u548c\u81ea\u52a8\u5bfc\u5165"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#211-%E4%B9%A6%E5%86%99%E6%97%B6%E7%9A%84%E6%99%BA%E8%83%BD%E6%8F%90%E7%A4%BA%E5%92%8C%E5%AF%BC%E5%85%A5"},"2.1.1 \u4e66\u5199\u65f6\u7684\u667a\u80fd\u63d0\u793a\u548c\u5bfc\u5165")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#212-%E8%87%AA%E5%8A%A8-fix-%E7%9A%84%E8%87%AA%E5%8A%A8%E5%AF%BC%E5%85%A5"},"2.1.2 \u81ea\u52a8 fix \u7684\u81ea\u52a8\u5bfc\u5165")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#22-%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-props-%E4%B8%AD%E7%9A%84%E7%B1%BB%E5%9E%8B"},"2.2 \u5b9a\u4e49\u7ec4\u4ef6\u7684 props \u4e2d\u7684\u7c7b\u578b"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#221-props-%E7%9A%84-interface-%E5%AE%9A%E4%B9%89%E4%BD%8D%E7%BD%AE"},"2.2.1 props \u7684 interface \u5b9a\u4e49\u4f4d\u7f6e")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#222-%E5%AF%BC%E5%87%BA%E5%8F%AF%E8%83%BD%E4%BC%9A%E7%94%A8%E5%88%B0%E7%9A%84%E7%B1%BB%E5%9E%8Binterfacetypeenum"},"2.2.2 \u5bfc\u51fa\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u7c7b\u578b\uff08interface/type/enum\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#223-%E4%BD%BF%E7%94%A8%E5%92%8C%E6%9F%A5%E6%89%BE%E5%B7%B2%E5%AE%9A%E4%B9%89%E7%9A%84%E7%B1%BB%E5%9E%8B"},"2.2.3 \u4f7f\u7528\u548c\u67e5\u627e\u5df2\u5b9a\u4e49\u7684\u7c7b\u578b")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#23-%E4%BC%A0%E9%80%92%E7%BB%84%E4%BB%B6-props-%E6%97%B6%E4%BD%BF%E7%94%A8%E5%88%B0%E7%9A%84%E7%B1%BB%E5%9E%8B"},"2.3 \u4f20\u9012\u7ec4\u4ef6 props \u65f6\uff0c\u4f7f\u7528\u5230\u7684\u7c7b\u578b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#24-vsocde-%E4%B8%AD%E7%9A%84%E9%87%8D%E6%9E%84"},"2.4 Vsocde \u4e2d\u7684\u91cd\u6784"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#241-%E5%BC%95%E7%94%A8%E6%9F%A5%E6%89%BE"},"2.4.1 \u5f15\u7528\u67e5\u627e")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#242-%E5%BC%95%E7%94%A8%E9%87%8D%E5%91%BD%E5%90%8D"},"2.4.2 \u5f15\u7528\u91cd\u547d\u540d")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#25-%E4%BD%BF%E7%94%A8-code-snippets"},"2.5 \u4f7f\u7528 code snippets"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#241-es7-reactreduxreact-nativejs-snippets"},"2.4.1 ES7 React/Redux/React-Native/JS snippets")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#242-typescript-react-code-snippets"},"2.4.2 Typescript React Code snippets")))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#3-react-redux-%E7%BB%93%E5%90%88-typescript"},"3 React Redux \u7ed3\u5408 Typescript"))))),(0,p.kt)("h1",{id:"typescript-\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7"},"Typescript \u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7"),(0,p.kt)("p",null,"\u5907\u4efd\u4e00\u7bc7\u53bb\u5e74\u5199\u7684\u5173\u4e8ets \u4f7f\u7528\u7684\u5c0f\u6587\u7ae0\u3002"),(0,p.kt)("h2",{id:"1-typescript-\u90e8\u5206\u5e38\u7528\u53ef\u80fd\u4f1a\u88ab\u5ffd\u7565\u7684\u77e5\u8bc6\u70b9"},"1. Typescript \u90e8\u5206\u5e38\u7528\u53ef\u80fd\u4f1a\u88ab\u5ffd\u7565\u7684\u77e5\u8bc6\u70b9"),(0,p.kt)("h3",{id:"11-\u7c7b\u578b\u83b7\u53d6"},"1.1 \u7c7b\u578b\u83b7\u53d6"),(0,p.kt)("h4",{id:"111-typeof"},"1.1.1 typeof"),(0,p.kt)("p",null,"\u4f7f\u7528 typeof \u83b7\u53d6\u53d8\u91cf\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'const Setting = {\n  color: "red",\n  font: "xxx",\n  width: 100,\n  height: 100,\n  title: "xxxx",\n};\n\ntype SettingType = typeof Setting;\n\nfunction getPropX() {\n  return "xxx";\n}\n\ntype GetPropXType = typeof getPropX;\ntype GetPropXReturnType = ReturnType<typeof getPropX>;\n')),(0,p.kt)("h4",{id:"112-\u7d22\u5f15\u7c7b\u578b\u67e5\u8be2\u64cd\u4f5c\u7b26-keyof"},"1.1.2 \u7d22\u5f15\u7c7b\u578b\u67e5\u8be2\u64cd\u4f5c\u7b26 keyof"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const Setting = {\n  color: \"red\",\n  font: \"xxx\",\n  width: 100,\n  height: 100,\n  title: \"xxxx\",\n};\n\n// type SettingKey = 'color' | 'font' | 'width' | 'height' | 'title'\ntype SettingKey = keyof typeof Setting;\n")),(0,p.kt)("h4",{id:"113-\u7d22\u5f15\u8bbf\u95ee"},"1.1.3 \u7d22\u5f15\u8bbf\u95ee"),(0,p.kt)("p",null,"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"typeName['propName']")," \u683c\u5f0f\u8bfb\u53d6\u5c5e\u6027\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'interface Person {\n  name: string;\n  age: string;\n  sex: "man" | "woman";\n  job?: string;\n  eat: (food: string) => void;\n}\n\ntype eat = Person["eat"];\n')),(0,p.kt)("h3",{id:"12-\u6cdb\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49"},"1.2 \u6cdb\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6cdb\u578b\u5176\u5b9e\u5c31\u662f\u7c7b\u578b\u53d8\u91cf\uff0c\u6839\u636e\u4f20\u5165\u7684\u7c7b\u578b\uff0c\u83b7\u53d6\u5230\u9700\u8981\u7684\u7c7b\u578b")),(0,p.kt)("p",null,"\u6dfb\u52a0\u6cdb\u578b\u7684\u4f4d\u7f6e:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u51fd\u6570\u6cdb\u578b -- \u5728\u51fd\u6570\u4e0a\u6dfb\u52a0\u6cdb\u578b")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"auto import",src:n(1778).Z})),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u7c7b\u6cdb\u578b -- \u5728\u7c7b\u4e0a\u6dfb\u52a0\u6cdb\u578b")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"class GenericNumber<T> {\n  zeroValue: T;\n  add: (x: T, y: T) => T;\n}\n")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u6cdb\u578b -- \u5728\u63a5\u53e3\u6216\u7c7b\u578b\u522b\u540d(\u4f7f\u7528 type \u6216 interface \u5b9a\u4e49\u7684\u7c7b\u578b)\u4e0a\u6dfb\u52a0\u6cdb\u578b")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'// antd rowSelection \u7684\u7c7b\u578b\nexport interface TableRowSelection<T> {\n  type?: RowSelectionType;\n  selectedRowKeys?: Key[];\n  onChange?: (selectedRowKeys: Key[], selectedRows: T[]) => void;\n  getCheckboxProps?: (record: T) => Partial<Omit<CheckboxProps, "checked" | "defaultChecked">>;\n  onSelect?: SelectionSelectFn<T>;\n  onSelectMultiple?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;\n  /** @deprecated This function is meaningless and should use `onChange` instead */\n  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;\n  /** @deprecated This function is meaningless and should use `onChange` instead */\n  onSelectInvert?: (selectedRowKeys: Key[]) => void;\n  selections?: INTERNAL_SELECTION_ITEM[] | boolean;\n  hideDefaultSelections?: boolean;\n  fixed?: boolean;\n  columnWidth?: string | number;\n  columnTitle?: string | React.ReactNode;\n  renderCell?: (\n    value: boolean,\n    record: T,\n    index: number,\n    originNode: React.ReactNode,\n  ) => React.ReactNode | RcRenderedCell<T>;\n}\n\n// antd table columns \u7684\u7c7b\u578b\nexport declare type ColumnsType<RecordType = unknown> = (\n  | ColumnGroupType<RecordType>\n  | ColumnType<RecordType>\n)[];\n')),(0,p.kt)("h3",{id:"13-\u6761\u4ef6\u7c7b\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49"},"1.3 \u6761\u4ef6\u7c7b\u578b\u7684\u4f7f\u7528\u548c\u5b9a\u4e49"),(0,p.kt)("p",null,"\u5e38\u7528\u7684\u6761\u4ef6\u7c7b\u578b"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u66f4\u8fc7\u9884\u5b9a\u4e49\u7684\u6761\u4ef6\u7c7b\u578b typescript/lib/lib.d.ts")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"- Partial<T> -- \u4f7f T \u4e2d\u7684\u6240\u6709\u5c5e\u6027\u53d8\u6210\u53ef\u9009\u5c5e\u6027\n- Pick<T,K extends keyof T> -- \u4ece T \u4e2d\u6311\u9009\u5c5e\u6027 K\uff0c\u7ec4\u6210\u65b0\u7684\u7c7b\u578b\n- Omit<T, K extends keyof any> -- \u4ece T \u4e2d\u5220\u9664\u5c5e\u6027 K\uff0c\u7ec4\u6210\u65b0\u7684\u7c7b\u578b\n- ReturnType<T extends (...args: any) => any> -- \u83b7\u53d6\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\n- Required<T> -- \u4f7f T \u4e2d\u7684\u6240\u6709\u5c5e\u6027\u53d8\u6210\u5fc5\u9009\u5c5e\u6027\n- Readonly<T> -- \u4f7f T \u4e2d\u7684\u6240\u6709\u5c5e\u6027\u53d8\u6210\u53ea\u8bfb\u5c5e\u6027\n- Exclude<T, U> -- \u4ece T \u4e2d\u5254\u9664\u53ef\u4ee5\u8d4b\u503c\u7ed9 U \u7684\u7c7b\u578b\u3002\n- Extract<T, U> -- \u63d0\u53d6 T \u4e2d\u53ef\u4ee5\u8d4b\u503c\u7ed9 U \u7684\u7c7b\u578b\u3002\n- NonNullable<T> -- \u4ece T \u4e2d\u5254\u9664 null \u548c undefined\u3002\n- ReturnType<T> -- \u83b7\u53d6\u51fd\u6570\u8fd4\u56de\u503c\u7c7b\u578b\u3002\n- InstanceType<T> -- \u83b7\u53d6\u6784\u9020\u51fd\u6570\u7c7b\u578b\u7684\u5b9e\u4f8b\u7c7b\u578b\u3002\n")),(0,p.kt)("h2",{id:"2-react-\u9879\u76ee\u4e2d\u7684-typescript"},"2. React \u9879\u76ee\u4e2d\u7684 Typescript"),(0,p.kt)("p",null,"\u6b64\u7ae0\u8282\u91cd\u70b9,\u7c7b\u578b\u5b9a\u4e49\u548c\u7c7b\u578b\u4f7f\u7528\u7ecf\u9a8c\u548c\u5c0f\u6280\u5de7"),(0,p.kt)("blockquote",null,(0,p.kt)("ol",{parentName:"blockquote"},(0,p.kt)("li",{parentName:"ol"},"\u4f7f\u7528 vscode \u5f00\u53d1 typescript \u65f6\uff0c\u5f3a\u5927\u7684\u667a\u80fd\u63d0\u793a\u548c\u81ea\u52a8\u5bfc\u5165\u4ee5\u53ca\u81ea\u52a8\u4fee\u590d\u529f\u80fd\u7684\u4f7f\u7528\u3002"))),(0,p.kt)("blockquote",null,(0,p.kt)("ol",{parentName:"blockquote",start:2},(0,p.kt)("li",{parentName:"ol"},"\u7c7b\u578b\u7684\u590d\u7528"))),(0,p.kt)("h3",{id:"21-\u81ea\u5b9a\u4fee\u590d\u548c\u81ea\u52a8\u5bfc\u5165"},"2.1 \u81ea\u5b9a\u4fee\u590d\u548c\u81ea\u52a8\u5bfc\u5165"),(0,p.kt)("h4",{id:"211-\u4e66\u5199\u65f6\u7684\u667a\u80fd\u63d0\u793a\u548c\u5bfc\u5165"},"2.1.1 \u4e66\u5199\u65f6\u7684\u667a\u80fd\u63d0\u793a\u548c\u5bfc\u5165"),(0,p.kt)("p",null,"\u8de8\u6587\u4ef6\uff0c\u53ef\u5bfc\u5165\u7684 \u7c7b\u578b / \u65b9\u6cd5 / \u53d8\u91cf ...\u7684\u667a\u80fd\u63d0\u793a\uff0c\u4ee5\u53ca\u81ea\u52a8\u5bfc\u5165"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"auto import",src:n(94).Z})),(0,p.kt)("h4",{id:"212-\u81ea\u52a8-fix-\u7684\u81ea\u52a8\u5bfc\u5165"},"2.1.2 \u81ea\u52a8 fix \u7684\u81ea\u52a8\u5bfc\u5165"),(0,p.kt)("p",null,"\u5355\u4e2a\u4fee\u590d\u5bfc\u5165 ",(0,p.kt)("img",{alt:"fix import",src:n(1671).Z})),(0,p.kt)("p",null,"\u6240\u6709\u4fee\u590d\u5bfc\u5165 ",(0,p.kt)("img",{alt:"fix import all",src:n(5556).Z})),(0,p.kt)("h3",{id:"22-\u5b9a\u4e49\u7ec4\u4ef6\u7684-props-\u4e2d\u7684\u7c7b\u578b"},"2.2 \u5b9a\u4e49\u7ec4\u4ef6\u7684 props \u4e2d\u7684\u7c7b\u578b"),(0,p.kt)("h4",{id:"221-props-\u7684-interface-\u5b9a\u4e49\u4f4d\u7f6e"},"2.2.1 props \u7684 interface \u5b9a\u4e49\u4f4d\u7f6e"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"props \u7684 interface \u5b9a\u4e49\u4f4d\u7f6e: \u7ec4\u4ef6\u6587\u4ef6\u4e2d")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\n\ninterface IComNameProps {}\n\nconst ComName: React.FunctionComponent<IComNameProps> = (props) => {\n  return <div>ComName</div>;\n};\n\nexport default ComName;\n')),(0,p.kt)("h4",{id:"222-\u5bfc\u51fa\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u7c7b\u578binterfacetypeenum"},"2.2.2 \u5bfc\u51fa\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u7c7b\u578b\uff08interface/type/enum\uff09"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5927\u90e8\u5206\u7ec4\u4ef6\u7684 props \u7684 interface, \u53ef\u4ee5\u4f7f\u7528 export \u5bfc\u51fa,\u65b9\u4fbf\u5728\u4f7f\u7528\u7ec4\u4ef6\u65f6\uff0c\u90e8\u5206\u7c7b\u578b\u7684\u4f7f\u7528(\u53ef\u4ee5\u53c2\u8003\u4e0b\u4e00\u7ae0\u8282:",(0,p.kt)("a",{parentName:"p",href:"#%E4%BC%A0%E9%80%92%E7%BB%84%E4%BB%B6-props-%E6%97%B6%E4%BD%BF%E7%94%A8%E5%88%B0%E7%9A%84%E7%B1%BB%E5%9E%8B"},"\u4f20\u9012\u7ec4\u4ef6 props \u65f6\uff0c\u4f7f\u7528\u5230\u7684\u7c7b\u578b"),")\u3002")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IComNameProps {}\n")),(0,p.kt)("h4",{id:"223-\u4f7f\u7528\u548c\u67e5\u627e\u5df2\u5b9a\u4e49\u7684\u7c7b\u578b"},"2.2.3 \u4f7f\u7528\u548c\u67e5\u627e\u5df2\u5b9a\u4e49\u7684\u7c7b\u578b"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5b9a\u4e49\u7ec4\u4ef6 props \u5c5e\u6027\u65f6\uff0c\u5f15\u7528\u7c7b\u5c5e\u6027\uff0c\u4f18\u5148\u8003\u8651\u4f7f\u7528\u5df2\u5b9a\u4e49\u7684\u7c7b\u578b\uff08\u5584\u7528 vsocde \u5f3a\u5927\u7684\u5f15\u7528\u63d0\u793a\uff0c\u4ee5\u53ca\u81ea\u52a8\u5f15\u5165\u529f\u80fd\uff09")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Store } from "antd/lib/form/interface";\nimport { ResourceSaveDto } from "@/client/services/umgt/resource";\n\nexport interface PopupStore extends Store, ResourceSaveDto {}\n')),(0,p.kt)("h3",{id:"23-\u4f20\u9012\u7ec4\u4ef6-props-\u65f6\u4f7f\u7528\u5230\u7684\u7c7b\u578b"},"2.3 \u4f20\u9012\u7ec4\u4ef6 props \u65f6\uff0c\u4f7f\u7528\u5230\u7684\u7c7b\u578b"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u5b9a\u4e49\u5e76\u5bfc\u51fa\u597d\u7ec4\u4ef6\u548c\u7ec4\u4ef6\u7684\u7c7b\u578b\u540e\uff0c\u5728\u4f7f\u7528\u6b64\u7ec4\u4ef6\u65f6\uff0c\u53ef\u540c\u65f6\u5f15\u5165\u53ef\u80fd\u7528\u5230\u7684\u7c7b\u578b")),(0,p.kt)("p",null,"\u5927\u90e8\u5206\u7ec4\u4ef6\u7684 props \u4f20\u9012\u65f6\uff0c\u9700\u8981\u7684\u6570\u636e\u7c7b\u578b\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u9f20\u6807\u653e\u4e0a\u53bb\u7684\u63d0\u793a\u6765\u627e\u5230\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("ol",{parentName:"blockquote"},(0,p.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u4f7f\u7528\u548c\u5f15\u5165\u5355\u4e2a props \u5c5e\u6027\u7c7b\u578b"),(0,p.kt)("li",{parentName:"ol"},"\u5f15\u5165\u6574\u4e2a\u7ec4\u4ef6 props \u7c7b\u578b\uff0c\u4f7f\u7528 interfaceName","['propsName]"))),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"\u7c7b\u578b\u67e5\u627e",src:n(4532).Z})),(0,p.kt)("h3",{id:"24-vsocde-\u4e2d\u7684\u91cd\u6784"},"2.4 Vsocde \u4e2d\u7684\u91cd\u6784"),(0,p.kt)("h4",{id:"241-\u5f15\u7528\u67e5\u627e"},"2.4.1 \u5f15\u7528\u67e5\u627e"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"\u5f15\u7528\u67e5\u627e",src:n(2433).Z})),(0,p.kt)("h4",{id:"242-\u5f15\u7528\u91cd\u547d\u540d"},"2.4.2 \u5f15\u7528\u91cd\u547d\u540d"),(0,p.kt)("p",null,"\u90ae\u4ef6\u91cd\u547d\u540d\u6216\u8005 F2 \u91cd\u547d\u540d"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"\u5f15\u7528\u67e5\u627e",src:n(9514).Z})),(0,p.kt)("h3",{id:"25-\u4f7f\u7528-code-snippets"},"2.5 \u4f7f\u7528 code snippets"),(0,p.kt)("p",null,"\u7ed9\u5927\u5bb6\u63a8\u8350\u7684 React Ts Extension Pack \u5305\u91cc\uff0c\u5305\u542b\u4e86\u4e24\u4e2a\u4e0b\u8f7d\u91cf\u6bd4\u8f83\u5927\u7684 react \u8bed\u6cd5\u6bb5\u7684\u5305"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"\u8bed\u6cd5\u7247\u6bb5\u5305",src:n(9015).Z})),(0,p.kt)("h4",{id:"241-es7-reactreduxreact-nativejs-snippets"},"2.4.1 ES7 React/Redux/React-Native/JS snippets"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"imp\u2192    import moduleName from 'module'\nimd\u2192    import { destructuredModule } from 'module'\nimr\u2192    import React from 'react'\n\nedf\u2192    export default (params) => { }\ncp\u2192 const { } = this.props\ncs\u2192 const { } = this.state\n\n------------------------------------------------------------------\nrcc\u2192\nimport React, { Component } from 'react'\n\nexport default class FileName extends Component {\n  render() {\n    return <div>$2</div>\n  }\n}\n\n------------------------------------------------------------------\nrcep\u2192\nimport React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\nexport class FileName extends Component {\n  static propTypes = {}\n\n  render() {\n    return <div>$2</div>\n  }\n}\n-----------------------------------------------------------------\nrafcp\u2192\nimport React from 'react'\nimport PropTypes from 'prop-types'\n\nconst $1 = (props) => {\n  return <div>$0</div>\n}\n\n$1.propTypes = {}\n\nexport default $1\n\nexport default $1\n\n-----------------------------------------------------------------\nrcredux\u2192\nimport React, { Component } from 'react'\nimport { connect } from 'react-redux'\n\nexport class FileName extends Component {\n  render() {\n    return <div>$4</div>\n  }\n}\n\nconst mapStateToProps = (state) => ({})\n\nconst mapDispatchToProps = {}\n\nexport default connect(mapStateToProps, mapDispatchToProps)(FileName)\n\n")),(0,p.kt)("h4",{id:"242-typescript-react-code-snippets"},"2.4.2 Typescript React Code snippets"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},'// tsrsfc   stateless functional component\nimport * as React from "react";\n\ninterface IAppProps {}\n\nconst App: React.FunctionComponent<IAppProps> = (props) => {};\n\nexport default App;\n-----------------------------------------------------------------\n// tsrcc\u2192   class component skeleton\nimport * as React from "react";\n\nexport interface IAppProps {}\n\nexport default class App extends React.Component<IAppProps> {\n  public render() {\n    return <div />;\n  }\n}\n-----------------------------------------------------------------\n// tscntr\u2192  react redux container skeleton\nimport * as React from "react";\nimport { connect } from "react-redux";\n\nexport interface IAppProps {}\n\nclass App extends React.Component<IAppProps> {\n  public render() {\n    return <div />;\n  }\n}\n\nconst mapState2Props = (state) => {\n  return {};\n};\n\nexport default connect(mapState2Props)(App);\n\n\n')),(0,p.kt)("h2",{id:"3-react-redux-\u7ed3\u5408-typescript"},"3 React Redux \u7ed3\u5408 Typescript"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://redux.js.org/recipes/usage-with-typescript#type-checking-state"},"Redux Typescript \u57fa\u7840\u5199\u6cd5")))}d.isMDXComponent=!0},94:function(e,t,n){t.Z=n.p+"assets/images/1-6219a770f848a2930a598ce3afc03830.gif"},1671:function(e,t,n){t.Z=n.p+"assets/images/2-791a492f78e5c8e685359eec597afad1.gif"},9015:function(e,t,n){t.Z=n.p+"assets/images/2-42426328eafb13574e46b7c64621c098.png"},5556:function(e,t,n){t.Z=n.p+"assets/images/3-cd7969c057c3718ccb887b3f37f4f8d0.gif"},1778:function(e,t,n){t.Z=n.p+"assets/images/3-2672314d63e71850a8ca080dab061316.png"},4532:function(e,t,n){t.Z=n.p+"assets/images/6-83fdd965fb07dce17877a530a3aa40a9.gif"},2433:function(e,t,n){t.Z=n.p+"assets/images/7-e18e63efec7e3ef75b62a90362c58f61.gif"},9514:function(e,t,n){t.Z=n.p+"assets/images/8-a9f25b0750ba62f4dff63f261f6c33b8.gif"}}]);