import React, { useEffect, useState, useCallback } from 'react';
/* 用react.memo */
const DemoChildren = React.memo((props:{getInfo:Function}) => {
  /* 只有初始化的时候打印了 子组件更新 */
  console.log('子组件更新');
  useEffect(() => {
    props.getInfo('子组件');
  }, []);
  return <div>子组件</div>;
});
function DemoUseCallback() {
  console.log('DemoUseCallback渲染');
  const [number, setNumber] = useState(1);
  /* 此时usecallback的第一参数 (sonName)=>{ console.log(sonName) }
    经过处理赋值给 getInfo */
  const getInfo = useCallback((sonName:any) => {
    console.log(sonName);
  }, [number]);
  return (
    <div>
      {/* 点击按钮触发父组件更新 ，但是子组件没有更新 */}
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)} type="button">增加</button>
      <DemoChildren getInfo={getInfo} />
    </div>
  );
}
export default function () {
  return <DemoUseCallback />;
}
