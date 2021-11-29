"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7683],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,N=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(N,l(l({ref:t},c),{},{components:n})):r.createElement(N,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Nodejs Process \u4fe1\u53f7\u4e8b\u4ef6",authors:["meng"],tags:["nodejs"],keywords:["nodejs","process","Nodejs Process \u4fe1\u53f7\u4e8b\u4ef6"],description:"Nodejs Process \u4fe1\u53f7\u4e8b\u4ef6"},p="Nodejs Process \u4fe1\u53f7\u4e8b\u4ef6",s={permalink:"/blog/Nodejs/process\u4fe1\u53f7\u4e8b\u4ef6",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/Nodejs/process\u4fe1\u53f7\u4e8b\u4ef6.md",source:"@site/blog/Nodejs/process\u4fe1\u53f7\u4e8b\u4ef6.md",title:"Nodejs Process \u4fe1\u53f7\u4e8b\u4ef6",description:"Nodejs Process \u4fe1\u53f7\u4e8b\u4ef6",date:"2021-11-29T12:15:32.833Z",formattedDate:"November 29, 2021",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:3.055,truncated:!1,authors:[{name:"MengFei",title:"Front-End Developer",url:"https://github.com/mengfei0053",imageURL:"/img/avatar.png",key:"meng"}],prevItem:{title:"npm-shrinkwrap.json\u3001package-lock.json\u548cyarn.loc",permalink:"/blog/Nodejs/npm\u5305\u9501\u7248\u672c"},nextItem:{title:"\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5",permalink:"/blog/Others/Front-End-Test"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f53 Node.js \u8fdb\u7a0b\u6536\u5230\u4fe1\u53f7\u65f6\uff0c\u5219\u5c06\u89e6\u53d1\u4fe1\u53f7\u4e8b\u4ef6\u3002 \u6709\u5173\u6807\u51c6 POSIX \u4fe1\u53f7\u540d\u79f0\uff08\u4f8b\u5982 'SIGINT'\u3001'SIGHUP' \u7b49\uff09\u7684\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/signal.7.html"},"signal(7)"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4fe1\u53f7\u5728 Worker \u7ebf\u7a0b\u4e0a\u4e0d\u53ef\u7528\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'SIGINT' \u6240\u6709\u5e73\u53f0\u90fd\u652f\u6301\u6765\u81ea\u7ec8\u7aef\u7684 'SIGINT'\uff0c\u901a\u5e38\u53ef\u4ee5\u4f7f\u7528 Ctrl+C \u751f\u6210\uff08\u4f46\u662f\u8fd9\u662f\u53ef\u914d\u7f6e\u7684\uff09\u3002 \u5f53\u542f\u7528\u7ec8\u7aef\u539f\u59cb\u6a21\u5f0f\u5e76\u4f7f\u7528 Ctrl+C \u65f6\u4e0d\u4f1a\u751f\u6210\u5b83\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"'SIGKILL' \u4e0d\u80fd\u5b89\u88c5\u76d1\u542c\u5668\uff0c\u5b83\u4f1a\u65e0\u6761\u4ef6\u5730\u7ec8\u6b62\u6240\u6709\u5e73\u53f0\u4e0a\u7684 Node.js\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u53d1\u9001 SIGINT\u3001SIGTERM\u3001\u548c SIGKILL \u4f1a\u5bfc\u81f4\u76ee\u6807\u8fdb\u7a0b\u65e0\u6761\u4ef6\u7684\u7ec8\u6b62\uff0c\u4e4b\u540e\u5b50\u8fdb\u7a0b\u4f1a\u62a5\u544a\u8fdb\u7a0b\u88ab\u4fe1\u53f7\u7ec8\u6b62\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGUSR1' \u7531 Node.js \u9884\u7559\u4ee5\u542f\u52a8\u8c03\u8bd5\u5668\u3002 \u53ef\u4ee5\u5b89\u88c5\u76d1\u542c\u5668\uff0c\u4f46\u8fd9\u6837\u505a\u53ef\u80fd\u4f1a\u5e72\u6270\u8c03\u8bd5\u5668\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGTERM' \u548c 'SIGINT' \u5728\u975e Windows \u5e73\u53f0\u4e0a\u5177\u6709\u9ed8\u8ba4\u7684\u53e5\u67c4\uff0c\u5176\u5728\u4f7f\u7528\u4ee3\u7801 128 + signal number \u9000\u51fa\u4e4b\u524d\u91cd\u7f6e\u7ec8\u7aef\u6a21\u5f0f\u3002 \u5982\u679c\u8fd9\u4e9b\u4fe1\u53f7\u4e4b\u4e00\u5b89\u88c5\u4e86\u76d1\u542c\u5668\uff0c\u5219\u5176\u9ed8\u8ba4\u884c\u4e3a\u5c06\u88ab\u5220\u9664\uff08Node.js \u5c06\u4e0d\u518d\u9000\u51fa\uff09\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGPIPE' \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5ffd\u7565\u3002 \u5b83\u53ef\u4ee5\u5b89\u88c5\u76d1\u542c\u5668\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGHUP' \u5728 Windows \u4e0a\u662f\u5728\u5173\u95ed\u63a7\u5236\u53f0\u7a97\u53e3\u65f6\u751f\u6210\uff0c\u5728\u5176\u4ed6\u5e73\u53f0\u4e0a\u662f\u5728\u5404\u79cd\u7c7b\u4f3c\u6761\u4ef6\u4e0b\u751f\u6210\u3002 \u53c2\u89c1 signal(7)\u3002 \u5b83\u53ef\u4ee5\u5b89\u88c5\u76d1\u542c\u5668\uff0c\u4f46\u662f Node.js \u5c06\u5728\u5927\u7ea6 10 \u79d2\u540e\u88ab Windows \u65e0\u6761\u4ef6\u5730\u7ec8\u6b62\u3002 \u5728\u975e Windows \u5e73\u53f0\u4e0a\uff0cSIGHUP \u7684\u9ed8\u8ba4\u884c\u4e3a\u662f\u7ec8\u6b62 Node.js\uff0c\u4f46\u4e00\u65e6\u5b89\u88c5\u4e86\u76d1\u542c\u5668\uff0c\u5219\u5176\u9ed8\u8ba4\u884c\u4e3a\u5c06\u88ab\u5220\u9664\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGTERM' Windows \u4e0a\u4e0d\u652f\u6301\uff0c\u53ef\u4ee5\u76d1\u542c\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGBREAK' \u5728 Windows \u4e0a\uff0c\u5f53\u6309\u4e0b Ctrl+Break \u65f6\u4f1a\u53d1\u9001\u3002 \u5728\u975e Windows \u5e73\u53f0\u4e0a\uff0c\u5b83\u53ef\u4ee5\u88ab\u76d1\u542c\uff0c\u4f46\u65e0\u6cd5\u53d1\u9001\u6216\u751f\u6210\u5b83\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGWINCH' \u5f53\u8c03\u6574\u63a7\u5236\u53f0\u5927\u5c0f\u65f6\u4f1a\u53d1\u9001\u3002 \u5728 Windows \u4e0a\uff0c\u8fd9\u53ea\u4f1a\u53d1\u751f\u5728\u5f53\u5149\u6807\u79fb\u52a8\u65f6\u5199\u5165\u63a7\u5236\u53f0\uff0c\u6216\u8005\u5f53\u5728\u539f\u59cb\u6a21\u5f0f\u4e0b\u4f7f\u7528\u53ef\u8bfb\u7684\u7ec8\u7aef\u65f6\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGSTOP' \u4e0d\u80fd\u5b89\u88c5\u76d1\u542c\u5668\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"'SIGBUS'\u3001'SIGFPE'\u3001'SIGSEGV' \u548c 'SIGILL'\uff0c\u5f53\u6ca1\u6709\u4f7f\u7528 kill(2) \u4eba\u4e3a\u5f15\u53d1\u65f6\uff0c\u672c\u8d28\u4e0a\u4f1a\u4f7f\u8fdb\u7a0b\u5904\u4e8e\u8c03\u7528 JS \u76d1\u542c\u5668\u4e0d\u5b89\u5168\u7684\u72b6\u6001\u3002 \u8fd9\u6837\u505a\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fdb\u7a0b\u505c\u6b62\u54cd\u5e94\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"0 \u53ef\u4ee5\u53d1\u9001\u6765\u6d4b\u8bd5\u8fdb\u7a0b\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u8fdb\u7a0b\u5b58\u5728\u5219\u6ca1\u5f71\u54cd\uff0c\u5982\u679c\u8fdb\u7a0b\u4e0d\u5b58\u5728\u5219\u629b\u51fa\u9519\u8bef\u3002\nWindows \u4e0d\u652f\u6301\u4fe1\u53f7\uff0c\u56e0\u6b64\u6ca1\u6709\u7b49\u4ef7\u7684\u4f7f\u7528\u4fe1\u53f7\u6765\u7ec8\u6b62\uff0c\u4f46 Node.js \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5bf9 process.kill() \u548c subprocess.kill() \u7684\u6a21\u62df\uff1a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53d1\u9001\u4fe1\u53f7 0 \u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u4e8e\u5e73\u53f0\u7684\u65b9\u5f0f\u6765\u6d4b\u8bd5\u8fdb\u7a0b\u662f\u5426\u5b58\u5728\u3002"))))}d.isMDXComponent=!0}}]);