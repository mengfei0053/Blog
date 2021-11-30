"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8446],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||p;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=s;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7090:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=t(7462),a=t(3366),p=(t(7294),t(3905)),l=["components"],i={slug:"npm-security-check",title:"Npm\u5305\u5b89\u5168\u68c0\u67e5",authors:["meng"],tags:["npm"],keywords:["npm","nodejs","ncu","snyk","\u524d\u7aef\u5b89\u5168","npm\u5305\u5b89\u5168","Npm\u5305\u5b89\u5168\u68c0\u67e5"],description:"Npm\u5305\u5b89\u5168\u68c0\u67e5"},o="Npm\u5305\u5b89\u5168\u68c0\u67e5",c={permalink:"/blog/npm-security-check",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/Nodejs/Npm\u5305\u5b89\u5168\u68c0\u67e5.md",source:"@site/blog/Nodejs/Npm\u5305\u5b89\u5168\u68c0\u67e5.md",title:"Npm\u5305\u5b89\u5168\u68c0\u67e5",description:"Npm\u5305\u5b89\u5168\u68c0\u67e5",date:"2021-11-30T11:32:39.971Z",formattedDate:"November 30, 2021",tags:[{label:"npm",permalink:"/blog/tags/npm"}],readingTime:4.88,truncated:!1,authors:[{name:"MengFei",title:"Front-End Developer",url:"https://github.com/mengfei0053",imageURL:"/img/avatar.png",key:"meng"}],prevItem:{title:"NPM\u5305\u5f00\u53d1KnowledgeMap",permalink:"/blog/npm-development-knowledgemap"},nextItem:{title:"Npm\u6e90\u7ba1\u7406",permalink:"/blog/npm-resource-manager"}},u={authorsImageUrls:[void 0]},m=[{value:"\u524d\u8a00 - npm\u5305\u5b89\u5168\u95ee\u9898",id:"\u524d\u8a00---npm\u5305\u5b89\u5168\u95ee\u9898",children:[{value:"\u7ec6\u6570\u5386\u5e74npm\u5305\u5b89\u5168\u95ee\u9898",id:"\u7ec6\u6570\u5386\u5e74npm\u5305\u5b89\u5168\u95ee\u9898",children:[],level:3}],level:2},{value:"\u793e\u533a\u89e3\u51b3\u65b9\u6848",id:"\u793e\u533a\u89e3\u51b3\u65b9\u6848",children:[{value:"npm audit (npm@&gt;6.x)",id:"npm-audit-npm6x",children:[],level:3},{value:"snyk",id:"snyk",children:[],level:3},{value:"snyk \u548c npm audit\u7684\u5bf9\u6bd4",id:"snyk-\u548c-npm-audit\u7684\u5bf9\u6bd4",children:[],level:3},{value:"\u89c2\u70b9",id:"\u89c2\u70b9",children:[],level:3},{value:"\u5e38\u7528\u4f9d\u8d56\u68c0\u67e5\u547d\u4ee4",id:"\u5e38\u7528\u4f9d\u8d56\u68c0\u67e5\u547d\u4ee4",children:[],level:3},{value:"\u63a8\u8350\u4e00\u4e2a\u68c0\u67e5\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5305 npm-check-updates",id:"\u63a8\u8350\u4e00\u4e2a\u68c0\u67e5\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5305-npm-check-updates",children:[],level:3}],level:2}],s={toc:m};function d(e){var n=e.components,i=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u524d\u8a00---npm\u5305\u5b89\u5168\u95ee\u9898"},"\u524d\u8a00 - npm\u5305\u5b89\u5168\u95ee\u9898"),(0,p.kt)("h3",{id:"\u7ec6\u6570\u5386\u5e74npm\u5305\u5b89\u5168\u95ee\u9898"},"\u7ec6\u6570\u5386\u5e74npm\u5305\u5b89\u5168\u95ee\u9898"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"2021\u5e7411\u67084\u65e5, npm\u5305 coa\u88ab\u52ab\u6301, \u5927\u91cfreact\u9879\u76ee\u88ab\u5f71\u54cd. \u3010\u90e8\u5206\u516c\u53f8\u9879\u76ee\uff0c\u5728\u53d1\u5e03\u65f6\u56e0\u5176\u5f71\u54cd\u800c\u53d1\u5e03\u5931\u8d25\u3011"),(0,p.kt)("li",{parentName:"ul"},"2021\u5e7410\u670822\u65e5, ua-parser-js\u88ab\u6076\u610f\u52ab\u6301\uff0c\u591a\u4e2a\u7248\u672c\u690d\u5165\u6316\u77ff\u811a\u672c"),(0,p.kt)("li",{parentName:"ul"},"2019\u5e747\u6708\uff0c\u6709\u5f00\u53d1\u8005\u5728purescript npm \u5b89\u88c5\u7a0b\u5e8f\u4e2d\u53d1\u73b0\u4e00\u4e9b\u6076\u610f\u4ee3\u7801\u3002\u539f\u6765\u662f\u6709\u653b\u51fb\u8005\u83b7\u53d6\u4e86@shinnn\uff08purescript npm \u5b89\u88c5\u7a0b\u5e8f\u539f\u59cb\u4f5c\u8005\uff09\u7684npm\u8d26\u6237\uff0c\u968f\u540e\u5728purescript npm\u5b89\u88c5\u7a0b\u5e8f\u4e2d\u63d2\u5165\u6076\u610f\u4ee3\u7801\u3002"),(0,p.kt)("li",{parentName:"ul"},"2019\u5e746\u6708\uff0c\u9ed1\u5ba2\u5411 npm \u53d1\u5e03\u4e00\u4e2a\u201cuseful\u201d\u7684\u5305\uff08electron-native-notify\uff09\uff0c\u7b49\u5230\u5b83\u88ab\u76ee\u6807\uff08\u67d0\u5e94\u7528\u7a0b\u5e8f\uff09\u4f7f\u7528\u540e\u66f4\u65b0\u5305\u5185\u5bb9\uff0c\u52a0\u5165\u6076\u610f\u4ee3\u7801\u3002\u800c\u67d0\u5e94\u7528\u7a0b\u5e8f\u53c8\u662f Agama \u52a0\u5bc6\u8d27\u5e01\u94b1\u5305\u7684\u4e00\u90e8\u5206\u3002"),(0,p.kt)("li",{parentName:"ul"},"2018\u5e7411\u6708\uff0cnpm \u4e0b\u8f7d\u91cf\u8d85\u8fc7 200 \u4e07\u7684 package \u88ab\u6ce8\u5165\u4e86\u6076\u610f\u4ee3\u7801\uff0c\u9ed1\u5ba2\u5229\u7528\u8be5\u6076\u610f\u4ee3\u7801\u8bbf\u95ee\u70ed\u95e8 JavaScript \u5e93\uff0c\u76ee\u6807\u662f copay\uff08\u5f00\u6e90\u6bd4\u7279\u5e01\u94b1\u5305\uff09\u53ca\u5176\u884d\u751f\u4ea7\u54c1\u7684\u7528\u6237\uff0c\u4ee5\u6b64\u7a83\u53d6\u7528\u6237\u7684\u6570\u5b57\u8d27\u5e01\u3002"),(0,p.kt)("li",{parentName:"ul"},"2018\u5e747\u6708\uff0c\u9ed1\u5ba2\u5229\u7528\u6076\u610f\u4ee3\u7801\u7834\u574fESLint\u5e93\u3002\u8be5\u6076\u610f\u4ee3\u7801\u88ab\u8bbe\u8ba1\u7528\u6765\u7a83\u53d6\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u7684npm\u8bc1\u4e66\u3002"),(0,p.kt)("li",{parentName:"ul"},"2018\u5e745\u6708\uff0c\u9ed1\u5ba2\u8bd5\u56fe\u5728\u540d\u4e3agetcookies\u7684\u6d41\u884cnpm\u5305\u4e2d\u9690\u85cf\u540e\u95e8\u3002")),(0,p.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u6076\u610f\u7684\u9ed1\u5ba2\u5bfc\u81f4\u7684\u5b89\u5168\u95ee\u9898\u5916\uff0c\u67d0\u4e9bnpm\u5305\uff0c\u6709\u610f\u6216\u65e0\u610f\u7684\u5b58\u5728\u5404\u79cd\u5404\u6837\u7684\u6f0f\u6d1e\u6216bug\u3002\u5e38\u89c1\u7684\u5982\uff1aDOS, REDOS, Prototype Pollution, XSS\u6f0f\u6d1e\u7b49\u7b49\u3002"),(0,p.kt)("h2",{id:"\u793e\u533a\u89e3\u51b3\u65b9\u6848"},"\u793e\u533a\u89e3\u51b3\u65b9\u6848"),(0,p.kt)("h3",{id:"npm-audit-npm6x"},"npm audit (npm@>6.x)"),(0,p.kt)("p",null,"npm \u6536\u8d2dnsp\u540e\u63a8\u51fa\u7684\u5b98\u65b9\u68c0\u67e5\u5de5\u5177\uff0c \u4e4b\u524d\u5e94\u8be5\u662f\u57fa\u4e8ensp\u6570\u636e\u5e93\u3002\n\u76ee\u524d\u57fa\u4e8e ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/advisories"},"https://github.com/advisories")),(0,p.kt)("p",null,"npm audit \u4f9d\u8d56\u4e8enpm package-lock.json \u6216 npm-shrinkwrap.json"),(0,p.kt)("p",null,"\u5e38\u7528\u65b9\u6cd5"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm audit # \u53ea\u626b\u63cf\uff0c\u663e\u793a\u6709\u95ee\u9898\u7684\u4f9d\u8d56\u5305\nnpm audit fix #\u626b\u63cf\u5e76\u81ea\u52a8\u4fee\u590d\u548c\u5b89\u88c5\u7b26\u5408\u517c\u5bb9\u6027\u8981\u6c42\u7684\u5305\nnpm audit fix --package-lock-only #\u53ea\u4fee\u6539package-lock.json \u9700\u8981\u624b\u52a8\u5b89\u88c5\u4f9d\u8d56\nnpm audit fix --only=prod #\u626b\u63cf\u5e76\u4fee\u590d\nnpm audit --audit-level=moderate #\u8bbe\u7f6e\u626b\u63cf\u62a5\u544a\u7b49\u7ea7\n")),(0,p.kt)("p",null,"\u68c0\u67e5\u62a5\u544a\uff0c\u4f1a\u5305\u542b\u6709\u95ee\u9898\u7684\u5305\u548c\u7248\u672c\u4fe1\u606f\uff0c\u4ee5\u53ca\u6f0f\u6d1e\u4fe1\u606f\uff0c\u6f0f\u6d1e\u7684\u4e25\u91cd\u7a0b\u5ea6\u7b49\u7b49\n",(0,p.kt)("img",{alt:"\u68c0\u67e5\u62a5\u544a",src:t(9284).Z})),(0,p.kt)("h3",{id:"snyk"},"snyk"),(0,p.kt)("p",null,"snyk\u662f\u4e00\u5bb6\u7f8e\u56fd\u7684\u7f51\u7edc\u5b89\u5168\u516c\u53f8\uff0c\u6709\u81ea\u5df1\u7684\u5b89\u5168\u6570\u636e\u5e93\n\u540c\u65f6\u652f\u6301yarn \u548c npm "),(0,p.kt)("p",null,"snyk cli \u5de5\u5177\u662f\u8be5\u516c\u53f8\u7684\u5f00\u6e90\u9879\u76ee",(0,p.kt)("a",{parentName:"p",href:"https://github.com/snyk/snyk"},"https://github.com/snyk/snyk")),(0,p.kt)("p",null,"\u57fa\u7840\u4f7f\u7528\u65b9\u6cd5"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5\nnpm i -g snyk\n\n# \u767b\u5f55, snyk cli \u4f9d\u8d56\u4e8esnyk.io \u63d0\u4f9b\u7684api\nsnyk auth\n\n# \u626b\u63cf\nsnyk test\n")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"\u68c0\u67e5\u62a5\u544a",src:t(4528).Z})),(0,p.kt)("h3",{id:"snyk-\u548c-npm-audit\u7684\u5bf9\u6bd4"},"snyk \u548c npm audit\u7684\u5bf9\u6bd4"),(0,p.kt)("p",null,"\u8fd9\u4e2a\u662fsnyk\u516c\u53f8\u51fa\u7684\u529f\u80fd\u5bf9\u6bd4\n",(0,p.kt)("img",{alt:"\u68c0\u67e5\u62a5\u544a",src:t(9781).Z})),(0,p.kt)("h3",{id:"\u89c2\u70b9"},"\u89c2\u70b9"),(0,p.kt)("p",null,"\u5b9a\u671f\u6216\u811a\u672c\u7684\u68c0\u67e5\u4f9d\u8d56\uff0c\u66f4\u65b0\u4f9d\u8d56\u662f\u6709\u5fc5\u8981\u7684\uff0c\u4e14\u6ca1\u6709\u592a\u5927\u6210\u672c\u7684\u3002\n\u50cf\u524d\u6bb5\u65f6\u95f4\u7684 ua-parser-js \u548c coa\u4e8b\u4ef6\uff0c\u90fd\u4f1a\u88ab\u4e0a\u8ff0\u4e24\u79cd\u65b9\u6848\u6240\u6536\u5f55\u3002\n\u811a\u672c\u5316\u7684\u68c0\u67e5\uff0c\u53ef\u4ee5\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u907f\u514d\u4e00\u4e9b\u5df2\u7ecf\u88ab\u53d1\u73b0\u7684\u6709\u95ee\u9898\u7684\u5305\uff0c\u6240\u5bfc\u81f4\u7684\u5b89\u5168\u95ee\u9898\u3002"),(0,p.kt)("h3",{id:"\u5e38\u7528\u4f9d\u8d56\u68c0\u67e5\u547d\u4ee4"},"\u5e38\u7528\u4f9d\u8d56\u68c0\u67e5\u547d\u4ee4"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"yarn why <pkg> # \u67e5\u770b\u67d0npm\u5305\u4f9d\u8d56\u5173\u7cfb\uff0c\u9879\u76ee\u5fc5\u987b\u5305\u542byarn.lock\nyarn info [pkg] [package.json field] # \u67e5\u770b\u67d0\u5305\u7684\u4fe1\u606f\uff0c\u4e0d\u4f20\u5305\u540d\uff0c\u663e\u793a\u5f53\u524d\u9879\u76ee\u7684package.json\u4fe1\u606f\u3002\nyarn info chalk versions # \u67e5\u770b chalk \u76ee\u524dnpm\u63d0\u4f9b\u7684\u6240\u6709\u7248\u672c\nyarn info chalk@4.0.0 dependencies # \u67e5\u770b chalk 4.0.0\u7248\u672c\u7684\u751f\u4ea7\u4f9d\u8d56 \n\nnpm ls #\u67e5\u770b\u9879\u76ee\u4f9d\u8d56\u6811\nnpm ls [pkg] #\u67e5\u770b\u67d0\u5305\u7684\u4f9d\u8d56\u6811\nnpm ls --depth 1 #\u9650\u5b9a\u5c55\u793a\u4f9d\u8d56\u5c42\u7ea7\n\nnpm outdated #\u67e5\u770b\u9879\u76ee\u54ea\u4e9b\u4f9d\u8d56\u9700\u8981\u66f4\u65b0\n")),(0,p.kt)("h3",{id:"\u63a8\u8350\u4e00\u4e2a\u68c0\u67e5\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5305-npm-check-updates"},"\u63a8\u8350\u4e00\u4e2a\u68c0\u67e5\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u5305 npm-check-updates"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'npm i -g npm-check-updates\n\nncu # \u68c0\u67e5\u9879\u76ee\u6240\u6709\u4f9d\u8d56\nncu -u #\u68c0\u67e5\u5e76\u66f4\u65b0package.json \u9700\u8981\u624b\u52a8\u5b89\u88c5\u4f9d\u8d56\nncu "/.*scope.*/" #\u68c0\u67e5\u5305\u542bscope\u5173\u952e\u5b57\u7684\u5305\nncu -u "/.*scope.*/" #\u68c0\u67e5\u5305\u542bscope\u5173\u952e\u5b57\u7684\u5305,\u5e76\u66f4\u65b0package.json \u9700\u8981\u624b\u52a8\u5b89\u88c5\u4f9d\u8d56\n')))}d.isMDXComponent=!0},4528:function(e,n,t){n.Z=t.p+"assets/images/Lark20211128-163432-688d259a82cd6f360ae6d42a2dba7f32.png"},9284:function(e,n,t){n.Z=t.p+"assets/images/Lark20211128-165730-edb535587077eb73fe867f2fe974f844.png"},9781:function(e,n,t){n.Z=t.p+"assets/images/npm-vs-snyk-40d2de54a63a4b8001bd398fa454c771.png"}}]);