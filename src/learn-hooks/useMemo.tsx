import React, { useMemo, useState } from 'react';

interface Item{
  name:string,
  prise:number
}
function GoodList({ list }:{list:Item[]}) {
  console.log('GoodList渲染');
  return (
    <>
      {list.map((item, index) => <li key={item.name}>{index + item.name + item.prise}</li>)}
    </>
  );
}

export default function () {
  console.log('useMemo渲染');
  const [list] = useState([{ name: '香蕉', prise: 1 }, { name: '苹果', prise: 2 }]);
  const MemoGoodList = useMemo(() => GoodList({ list }), [list]);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>{count}</button>
      {MemoGoodList}
    </div>
  );
}
