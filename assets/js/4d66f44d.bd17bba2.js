"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2426],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),f=s(n),k=a,m=f["".concat(c,".").concat(k)]||f[k]||p[k]||u;return n?r.createElement(m,l(l({ref:t},i),{},{components:n})):r.createElement(m,l({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<u;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return i},toc:function(){return p},default:function(){return k}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),l=["components"],o={title:"ReactHooks",authors:["meng"],tags:["react","hooks"],keywords:["react","hooks","\u901f\u67e5"],description:"ReactHooks"},c=void 0,s={permalink:"/blog/React/ReactHooks",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/React/ReactHooks.md",source:"@site/blog/React/ReactHooks.md",title:"ReactHooks",description:"ReactHooks",date:"2021-11-29T11:21:34.048Z",formattedDate:"November 29, 2021",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"hooks",permalink:"/blog/tags/hooks"}],readingTime:4.54,truncated:!1,authors:[{name:"MengFei",title:"Front-End Developer",url:"https://github.com/mengfei0053",imageURL:"/Blog/img/avatar.png",key:"meng"}],prevItem:{title:"\u524d\u7aef\u5e38\u7528\u547d\u4ee4\u901f\u67e5\u5907\u5fd8",permalink:"/blog/Others/\u524d\u7aef\u5e38\u7528\u547d\u4ee4\u901f\u67e5\u5907\u5fd8"},nextItem:{title:"Typescript\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7",permalink:"/blog/Ts/Typescript\u4f7f\u7528\u603b\u7ed3\u53ca\u90e8\u5206\u5c0f\u6280\u5de7"}},i={authorsImageUrls:[void 0]},p=[{value:"\u57fa\u7840 hooks",id:"\u57fa\u7840-hooks",children:[{value:"useState",id:"usestate",children:[],level:3},{value:"useEffect",id:"useeffect",children:[],level:3},{value:"useContext",id:"usecontext",children:[],level:3}],level:2},{value:"\u5176\u4ed6 hooks",id:"\u5176\u4ed6-hooks",children:[{value:"useReducer",id:"usereducer",children:[],level:3},{value:"useCallback",id:"usecallback",children:[],level:3},{value:"useMemo",id:"usememo",children:[],level:3},{value:"useRef",id:"useref",children:[],level:3},{value:"useImperativeHandle",id:"useimperativehandle",children:[],level:3},{value:"useLayoutEffect",id:"uselayouteffect",children:[],level:3},{value:"useDebugValue",id:"usedebugvalue",children:[],level:3}],level:2}],f={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E7%A1%80-hooks"},"\u57fa\u7840 hooks"),(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#usestate"},"useState")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#useeffect"},"useEffect")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#usecontext"},"useContext")))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#%E5%85%B6%E4%BB%96-hooks"},"\u5176\u4ed6 hooks"),(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#usereducer"},"useReducer")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#usecallback"},"useCallback")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#usememo"},"useMemo")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#useref"},"useRef")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#useimperativehandle"},"useImperativeHandle")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#uselayouteffect"},"useLayoutEffect")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#usedebugvalue"},"useDebugValue"))))),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"React 16.8 \u52a0\u5165\u7684\u7279\u6027\u3002 React hooks \u5141\u8bb8\u5f00\u53d1\u8005\uff0c\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\uff0c\u4f7f\u7528 state,\u548c\u7c7b\u4f3c\u751f\u547d\u5468\u671f\u7684\u529f\u80fd\u3002")),(0,u.kt)("h2",{id:"\u57fa\u7840-hooks"},"\u57fa\u7840 hooks"),(0,u.kt)("h3",{id:"usestate"},"useState"),(0,u.kt)("p",null,"\u6982\u8ff0\uff1a\u7528\u6765\u58f0\u660e\u72b6\u6001\uff0c\u548c\u6539\u53d8\u8be5\u72b6\u6001\u7684\u51fd\u6570\u3002"),(0,u.kt)("p",null,"\u53c2\u6570\uff1a\u72b6\u6001\u521d\u59cb\u503c\uff0c\u6216\u8005\u4e00\u4e2a\u8fd4\u56de\u521d\u59cb\u503c\u7684\u51fd\u6570\u3002\u53ea\u4f1a\u5728\u7ec4\u4ef6\u51fa\u521d\u6b21\u6e32\u67d3\u65f6\u6267\u884c\u3002"),(0,u.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},"const [state, setState] = useState(initialState); // \u53c2\u8003Es6 \u6570\u7ec4\u7684\u7ed3\u6784\u8d4b\u503c\n\nconst [state, setState] = useState(() => {\n   const initialState = someExpensiveComputation(props);\n   return initialState;\n});\n\n")),(0,u.kt)("p",null,"eg\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},"function Counter({initialCount}) {\n  const [count, setCount] = useState(initialCount);\n  return (\n    <>\n      Count: {count}\n      <button onClick={() => setCount(0)}>Reset</button>\n      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>\n      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>\n    </>\n  );\n}\n")),(0,u.kt)("h3",{id:"useeffect"},"useEffect"),(0,u.kt)("p",null,"\u6982\u8ff0\uff1a\u5904\u7406\u5177\u6709\u526f\u4f5c\u7528\u7684\u884c\u4e3a\uff0c\u4f8b\u5982\uff08\u8ba2\u9605\uff0c\u8ba1\u65f6\u5668\uff0c\u65e5\u5fd7\u8bb0\u5f55\u7b49\u3002\uff09\uff0c\u5e76\u5728\u51fd\u6570\u7ec4\u4ef6\u6e32\u67d3\u7ed3\u675f\u540e\u8fd0\u884c\u3002"),(0,u.kt)("p",null,"\u53c2\u6570\uff1a"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u63a5\u6536\u4e00\u4e2a\u53ef\u80fd\u5177\u6709\u526f\u4f5c\u7528\uff08\u8ba2\u9605\uff0c\u8ba1\u65f6\u5668\uff0c\u65e5\u5fd7\u8bb0\u5f55\u7b49\u3002\uff09\u7684\u51fd\u6570\u3002\u8be5\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff0c\u53ef\u80fd\u662f\u4e00\u4e2a\u6e05\u7406\u51fd\u6570\u3002"),(0,u.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff08\u53ef\u9009\uff09\uff0c\u542b\u6709\u6267\u884c\u4f9d\u8d56\u7684\u6570\u7ec4\u3002\u5f53\u8be5\u53c2\u6570\u4e3a\u7a7a\u6570\u7ec4\u65f6\uff0c\u8be5 effects \u53ea\u5728\u521d\u6b21\u6e32\u67d3\u540e\u6267\u884c\u3002")),(0,u.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},"useEffect(\n  () => {\n    const subscription = props.source.subscribe();\n    return () => { // \u7ec4\u4ef6\u88ab\u79fb\u9664\u524d\u6267\u884c\u6e05\u7406\u51fd\u6570\n      subscription.unsubscribe();\n    };\n  },\n  [props.source], // \u4f9d\u8d56\u6539\u53d8\uff0c\u8ba2\u9605\u51fd\u6570\u624d\u4f1a\u6267\u884c\n);\nuseEffect(\n  () => {\n    const subscription = props.source.subscribe();\n    return () => { // \u7ec4\u4ef6\u88ab\u79fb\u9664\u524d\u6267\u884c\u6e05\u7406\u51fd\u6570\n      subscription.unsubscribe();\n    };\n  },\n  [], // \u521d\u6b21\u6e32\u67d3 \u6267\u884c\n);\n")),(0,u.kt)("h3",{id:"usecontext"},"useContext"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},"const MyContext = React.createContext(defaultValue);\nconst value = useContext(MyContext);\n")),(0,u.kt)("h2",{id:"\u5176\u4ed6-hooks"},"\u5176\u4ed6 hooks"),(0,u.kt)("h3",{id:"usereducer"},"useReducer"),(0,u.kt)("p",null,"\u6982\u8ff0\uff1a\u5728\u72b6\u6001\u8f83\u590d\u6742\u65f6\u4f7f\u7528.\u6211\u7684\u7406\u89e3\u662f\uff0c\u548c redux \u7c7b\u4f3c\u7684\u6982\u5ff5\u3002\u56e0\u4e3a\u5de5\u4f5c\u4e00\u76f4\u5728 \u4f7f\u7528 redux\u3002\u6240\u4ee5\u8fd9\u4e2a\u6982\u5ff5\uff0c\u6682\u65f6\u4e0d\u505a\u6df1\u5165\u4e86\u89e3\u3002\u4ee5\u540e\u6709\u673a\u4f1a\u7528\u5230\u7684\u8bdd\uff0c\u518d\u6df1\u5165\u5b66\u4e60\u3002"),(0,u.kt)("h3",{id:"usecallback"},"useCallback"),(0,u.kt)("p",null,"\u6982\u8ff0\uff1a\u7c7b\u4f3c useMemo\uff0c\u8fd4\u56de\u4e00\u4e2a callback \u51fd\u6570\uff0c"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},"const memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u4e2d\uff0c\u9047\u5230\u95ee\u9898\uff1a\u4f9d\u8d56\u503c\u6ca1\u53d8\uff0c\u4f46\u4f1a\u91cd\u65b0\u8fdb\u884c\u8ba1\u7b97\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u6709\u70b9\u6ca1\u641e\u61c2\uff0c\u8fd9\u4e2a hook \u7684\u4f7f\u7528\u573a\u666f")),(0,u.kt)("h3",{id:"usememo"},"useMemo"),(0,u.kt)("p",null,"\u6982\u8ff0\uff1a\u8fd4\u56de\u4e00\u4e2a\u8ba1\u7b97\u503c\uff0c\u53ea\u5728\u4f9d\u8d56\u53d1\u751f\u53d8\u5316\u65f6\u8ba1\u7b97\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")),(0,u.kt)("h3",{id:"useref"},"useRef"),(0,u.kt)("p",null,"\u6982\u8ff0\uff1auseRef \u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\u3002\u521d\u59cb\u5316\u65f6\uff0c\u521d\u59cb\u5316\u53c2\u6570\u5c06\u88ab\u8d4b\u503c\u7ed9\u8be5\u5bf9\u8c61\u7684 current \u5c5e\u6027\u3002\u8fd9\u4e2a ref \u5bf9\u8c61\uff0c\u5b58\u5728\u5728\u6574\u4e2a\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u5185"),(0,u.kt)("p",null,"\u6700\u5e38\u7528\u7684\u7528\u6cd5\uff0c\u662f\u7528 ref \u5bf9\u8c61\u5b58\u50a8\u4e00\u4e2a dom \u5bf9\u8c61\u3002eg:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},'function TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => {\n    // `current` points to the mounted text input element\n    inputEl.current.focus();\n  };\n  return (\n    <>\n      <input ref={inputEl} type="text" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}\n')),(0,u.kt)("p",null,"\u4f46\u662f\uff0cref \u5bf9\u8c61\u5e76\u4e0d\u662f\u53ea\u80fd\u5b58\u50a8 dom \u5bf9\u8c61\u3002\u5b83\u662f\u4e00\u4e2a\u901a\u7528\u5bb9\u5668\u3002\u6709\u4e9b\u7c7b\u4f3c \u7c7b\u7684\u5b9e\u4f8b\u5c5e\u6027\u3002\u53ef\u4ee5\u5b58\u50a8\u4efb\u610f\u7c7b\u578b\u7684\u503c\u3002eg:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},"function Timer() {\n  const intervalRef = useRef();\n\n  useEffect(() => {\n    const id = setInterval(() => {\n      // ...\n    });\n    intervalRef.current = id;\n    return () => {\n      clearInterval(intervalRef.current);\n    };\n  });\n\n  // ...\n}\n")),(0,u.kt)("h3",{id:"useimperativehandle"},"useImperativeHandle"),(0,u.kt)("p",null,"\u6982\u8ff0\uff1a\u5728\u4f7f\u7528 ref \u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 useImperativeHandle\uff0c\u9009\u62e9\u7279\u5b9a\u7684\u5b9e\u4f8b\u5c5e\u6027\u66b4\u6f0f\u7ed9\u7236\u7ec4\u4ef6\u3002"),(0,u.kt)("p",null,"\u5fc5\u987b\u7ed3\u5408 forwardRef \u4f7f\u7528"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-react"},"function FancyInput(props, ref) {\n  const inputRef = useRef();\n  useImperativeHandle(ref, () => ({\n    focus: () => {\n      inputRef.current.focus();\n    }\n  }));\n  return <input ref={inputRef} ... />;\n}\nFancyInput = forwardRef(FancyInput);\n\n// \u5728\u7236\u7ec4\u4ef6\u4e2d\u62ff\u5230\u7684ref\u5f15\u7528\uff0c\u662f\u4e00\u4e2a { focus:Function } \u7684\u5bf9\u8c61\u3002\n\n")),(0,u.kt)("h3",{id:"uselayouteffect"},"useLayoutEffect"),(0,u.kt)("p",null,"\u4e0e useEffect \u7c7b\u4f3c\uff0c"),(0,u.kt)("p",null,"useLayoutEffect \u5728 componentDidMount \u548c componentDidUpdate \u76f8\u540c\u7684\u9636\u6bb5\u89e6\u53d1\u3002"),(0,u.kt)("p",null,"React \u5b98\u65b9\u5efa\u8bae\uff0c\u4f18\u5148\u4f7f\u7528 useEffect\uff0c\u53ea\u5728\u4f7f\u7528 useEffect \u9047\u5230\u95ee\u9898\u65f6\uff0c\u5c1d\u8bd5\u4f7f\u7528 useLayoutEffect"),(0,u.kt)("h3",{id:"usedebugvalue"},"useDebugValue"))}k.isMDXComponent=!0}}]);