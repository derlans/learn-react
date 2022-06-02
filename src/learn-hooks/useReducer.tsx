import React, { useReducer } from 'react';

export default function DemoUseReducer() {
  /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
  const [number, dispatchNumbner] = useReducer((
    state:number,
    action:{payload?:number, name:string},
  ) => {
    const { payload, name } = action;
    /* return的值为新的state */
    switch (name) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      case 'reset':
        return payload || 0;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      当前值：
      { number }
      { /* 派发更新 */ }
      <button type="button" onClick={() => dispatchNumbner({ name: 'add' })}>增加</button>
      <button type="button" onClick={() => dispatchNumbner({ name: 'sub' })}>减少</button>
      <button type="button" onClick={() => dispatchNumbner({ name: 'reset', payload: 666 })}>赋值</button>
    </div>
  );
}
