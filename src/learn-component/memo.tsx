import React from 'react';

interface Props{
  number:number;
}
function memoedComponent(props:Props) {
  return (
    <div>
      memo组件
      {JSON.stringify(props)}
    </div>
  );
}
const controlIsRender = (pre:Props, next:Props) => {
  if (pre.number === next.number) {
    // number 不改变 ，不渲染组件
    return true;
  }
  if (pre.number !== next.number && next.number > 5) {
    // number 改变 ，但值大于5 ， 不渲染组件
    return true;
  } // 否则渲染组件
  return false;
};
const MemoComponent = React.memo(memoedComponent, controlIsRender);
export default function () {
  const [number, setNumber] = React.useState(0);
  return (
    <div>
      <MemoComponent number={number} />
      <input
        type="number"
        className="text-black"
        value={number}
        onInput={(e) => {
          setNumber(parseInt((e.target as HTMLInputElement).value || '0', 10));
        }}
      />
      <pre>{controlIsRender.toString()}</pre>
    </div>
  );
}
