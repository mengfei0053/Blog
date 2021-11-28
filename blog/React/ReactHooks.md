---
title: ReactHooks
authors: [meng]
tags: [react, hooks]
keywords: [react, hooks, 速查]
description: ReactHooks
---


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [基础 hooks](#基础-hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useContext](#usecontext)
- [其他 hooks](#其他-hooks)
  - [useReducer](#usereducer)
  - [useCallback](#usecallback)
  - [useMemo](#usememo)
  - [useRef](#useref)
  - [useImperativeHandle](#useimperativehandle)
  - [useLayoutEffect](#uselayouteffect)
  - [useDebugValue](#usedebugvalue)

<!-- /code_chunk_output -->

> React 16.8 加入的特性。 React hooks 允许开发者，在函数组件中，使用 state,和类似生命周期的功能。

## 基础 hooks

### useState

概述：用来声明状态，和改变该状态的函数。

参数：状态初始值，或者一个返回初始值的函数。只会在组件出初次渲染时执行。

用法：

```react
const [state, setState] = useState(initialState); // 参考Es6 数组的结构赋值

const [state, setState] = useState(() => {
   const initialState = someExpensiveComputation(props);
   return initialState;
});

```

eg：

```react
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}
```

### useEffect

概述：处理具有副作用的行为，例如（订阅，计时器，日志记录等。），并在函数组件渲染结束后运行。

参数：

1. 第一个参数，接收一个可能具有副作用（订阅，计时器，日志记录等。）的函数。该函数的返回值，可能是一个清理函数。
2. 第二个参数（可选），含有执行依赖的数组。当该参数为空数组时，该 effects 只在初次渲染后执行。

用法：

```react
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => { // 组件被移除前执行清理函数
      subscription.unsubscribe();
    };
  },
  [props.source], // 依赖改变，订阅函数才会执行
);
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => { // 组件被移除前执行清理函数
      subscription.unsubscribe();
    };
  },
  [], // 初次渲染 执行
);
```

### useContext

```react
const MyContext = React.createContext(defaultValue);
const value = useContext(MyContext);
```

## 其他 hooks

### useReducer

概述：在状态较复杂时使用.我的理解是，和 redux 类似的概念。因为工作一直在 使用 redux。所以这个概念，暂时不做深入了解。以后有机会用到的话，再深入学习。

### useCallback

概述：类似 useMemo，返回一个 callback 函数，

```react
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

- 测试中，遇到问题：依赖值没变，但会重新进行计算。
- 有点没搞懂，这个 hook 的使用场景

### useMemo

概述：返回一个计算值，只在依赖发生变化时计算。

```react
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useRef

概述：useRef 返回一个可变的 ref 对象。初始化时，初始化参数将被赋值给该对象的 current 属性。这个 ref 对象，存在在整个组件的生命周期内

最常用的用法，是用 ref 对象存储一个 dom 对象。eg:

```react
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

但是，ref 对象并不是只能存储 dom 对象。它是一个通用容器。有些类似 类的实例属性。可以存储任意类型的值。eg:

```react
function Timer() {
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      // ...
    });
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  // ...
}
```

### useImperativeHandle

概述：在使用 ref 时，可以使用 useImperativeHandle，选择特定的实例属性暴漏给父组件。

必须结合 forwardRef 使用

```react
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);

// 在父组件中拿到的ref引用，是一个 { focus:Function } 的对象。

```

### useLayoutEffect

与 useEffect 类似，

useLayoutEffect 在 componentDidMount 和 componentDidUpdate 相同的阶段触发。

React 官方建议，优先使用 useEffect，只在使用 useEffect 遇到问题时，尝试使用 useLayoutEffect

### useDebugValue
