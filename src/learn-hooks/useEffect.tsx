import React, { useEffect, useRef, useState } from 'react';

function getUserInfo(a:string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: a,
        age: 16,
      });
    }, 500);
  });
}
export default function DemoEffect({ a }:{a:string} = { a: '默认' }) {
  const [userMessage, setUserMessage] :any = useState({});
  const div = useRef(null);
  const [number, setNumber] = useState(0);
  /* 模拟事件监听处理函数 */
  const handleResize = () => {
    console.log('handleResize');
  };
  /* useEffect使用 ，这里如果不加限制 ，会是函数重复执行，陷入死循环 */
  useEffect(() => {
    /* 请求数据 */
    getUserInfo(a).then((res) => {
      setUserMessage(res);
    });
    /* 操作dom  */
    console.log(div.current); /* div */
    /* 事件监听等 */
    window.addEventListener('resize', handleResize);
    // 在返回函数中，返回一个函数，这个函数会在组件卸载时执行
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  /* 只有当props->a和state->number改变的时候 ,useEffect副作用函数重新执行 ，如果此时数组为空[]，
    证明函数只有在初始化的时候执行一次相当于componentDidMount */
  }, [a, number]);
  return (
    <div ref={div}>
      <span>{ userMessage.name }</span>
      <span>{ userMessage.age }</span>
      <div onClick={() => setNumber(number + 1)}>{ number }</div>
    </div>
  );
}
