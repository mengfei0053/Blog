"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6560],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),b=o,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2976:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return l},assets:function(){return c},toc:function(){return d},default:function(){return b}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],u={title:"Linux\u4e0bnodejs\u5b89\u88c5\u6e90nodesource",authors:["meng"],tags:["yarn","nodejs","npm"],keywords:["linux","nodejs","nodejs install","nodesource","Linux\u4e0bnodejs\u5b89\u88c5\u6e90nodesource"],description:"Linux\u4e0bnodejs\u5b89\u88c5\u6e90nodesource"},a="Linux\u4e0bnodejs\u5b89\u88c5\u6e90nodesource",l={permalink:"/Blog/blog/Linux/Linux-install-nodejs",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/Linux/Linux-install-nodejs.md",source:"@site/blog/Linux/Linux-install-nodejs.md",title:"Linux\u4e0bnodejs\u5b89\u88c5\u6e90nodesource",description:"Linux\u4e0bnodejs\u5b89\u88c5\u6e90nodesource",date:"2021-11-26T14:01:11.832Z",formattedDate:"November 26, 2021",tags:[{label:"yarn",permalink:"/Blog/blog/tags/yarn"},{label:"nodejs",permalink:"/Blog/blog/tags/nodejs"},{label:"npm",permalink:"/Blog/blog/tags/npm"}],readingTime:.39,truncated:!1,authors:[{name:"MengFei",title:"Front-End Developer",url:"https://github.com/mengfei0053",imageURL:"/Blog/img/avatar.png",key:"meng"}],prevItem:{title:"Docker/Docker\u5e38\u7528\u547d\u4ee4",permalink:"/Blog/blog/Docker/Docker\u5e38\u7528\u547d\u4ee4"},nextItem:{title:"NPM\u5305\u5f00\u53d1KnowledgeMap",permalink:"/Blog/blog/Nodejs/NPM\u5305\u5f00\u53d1KnowledgeMap"}},c={authorsImageUrls:[void 0]},d=[{value:"\u5e38\u7528",id:"\u5e38\u7528",children:[{value:"Debian and Ubuntu based distributions",id:"debian-and-ubuntu-based-distributions",children:[],level:3},{value:"Enterprise Linux based distributions",id:"enterprise-linux-based-distributions",children:[],level:3}],level:2}],p={toc:d};function b(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodesource/distributions"},"https://github.com/nodesource/distributions")),(0,i.kt)("h2",{id:"\u5e38\u7528"},"\u5e38\u7528"),(0,i.kt)("h3",{id:"debian-and-ubuntu-based-distributions"},"Debian and Ubuntu based distributions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Using Ubuntu\ncurl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -\nsudo apt-get install -y nodejs\n\n# Using Debian, as root\ncurl -fsSL https://deb.nodesource.com/setup_14.x | bash -\napt-get install -y nodejs\n")),(0,i.kt)("h3",{id:"enterprise-linux-based-distributions"},"Enterprise Linux based distributions"),(0,i.kt)("p",null,"Run on RHEL, CentOS, CloudLinux, Amazon Linux or Fedora:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# As root\ncurl -fsSL https://rpm.nodesource.com/setup_14.x | bash -\n\n# No root privileges\ncurl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -\n")))}b.isMDXComponent=!0}}]);