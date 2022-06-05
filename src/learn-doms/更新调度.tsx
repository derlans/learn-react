import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ShowFunction from '../component/showFunction';
// 已经过期 现在会自动调度
export default function () {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('张三');
  console.log('渲染', number);
  const fn1 = () => {
    setNumber(number + 1);
    console.log(number, 'number');
    setNumber(number + 1);
    console.log(number, 'number');
    setNumber(number + 1);
    console.log(number, 'number');
  };
  const fn2 = () => {
    setTimeout(() => {
      setNumber(number + 1);
      console.log(number, 'number');
      setNumber(number + 1);
      console.log(number, 'number');
      setNumber(number + 1);
      console.log(number, 'number');
      setName(name + number);
    }, 1000);
  };
  const fn3 = () => {
    Promise.resolve().then(() => {
      ReactDOM.unstable_batchedUpdates(() => {
        setNumber(number + 1);
        console.log(number, 'number');
        setNumber(number + 1);
        console.log(number, 'number');
        setNumber(number + 1);
        console.log(number, 'number');
      });
    });
  };
  return (
    <div>
      当前值：
      { number }
      <ShowFunction fn={fn1} />
      <ShowFunction fn={fn2} />
      <ShowFunction fn={fn3} />

    </div>
  );
}
