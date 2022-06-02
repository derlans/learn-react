import React, {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';

export function DemoUseLayoutEffect({ number }:{number:number}) {
  const target = useRef<HTMLDivElement>(null);
  const target2 = useRef<HTMLDivElement>(null);
  console.log('DemoUseLayoutEffect渲染');
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    /* 我们需要在dom绘制之前，移动dom到制定位置 */
    const div = target.current!;
    div.style.left = '100px';
  }, [number]);
  useEffect(() => {
    console.log('useEffect');
    for (let i = 0; i < 1e9; i += 1) {
      // do nothing
    }
    const div = target2.current!;
    div.style.left = '100px';
  }, [number]);
  return (
    <div>
      <div
        ref={target}
        style={{
          backgroundColor: 'red',
          width: '100px',
          height: '100px',
          position: 'relative',
        }}
      />
      <div
        ref={target2}
        style={{
          backgroundColor: 'yellow',
          width: '100px',
          height: '100px',
          position: 'relative',
        }}
      />
    </div>
  );
}
export default function () {
  const [number, setNumber] = useState(0);
  if (number % 2 === 0) {
    return (
      <div>
        <div onClick={() => { setNumber(number + 1); }} className="text-lg">{number}</div>
        <DemoUseLayoutEffect number={number} />
      </div>
    );
  }
  return (
    <div>
      <div onClick={() => { setNumber(number + 1); }} className="text-lg">{number}</div>
      <DemoUseLayoutEffect number={number} />
    </div>
  );
}
