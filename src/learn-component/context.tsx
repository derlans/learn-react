import React from 'react';

const MyContext = React.createContext({ name: 'alien', mes: 'let us learn React ' });
interface Props {
  name: string;
  mes: string;
}
function ComponentA(props:Props) {
  const { name, mes } = props;
  return (
    <div>
      <div>
        {' '}
        姓名：
        { name }
      </div>
      <div>
        {' '}
        想对大家说：
        { mes }
      </div>
    </div>
  );
}
function ComponentB() {
  /* 用 Consumer 订阅， 来自 Provider 中 value 的改变  */
  return (
    <MyContext.Consumer>
      { (value) => <ComponentA {...value} /> }
    </MyContext.Consumer>
  );
}

export default function index() {
  const [value] = React.useState({
    name: 'alien',
    mes: 'let us learn React ',
  });
  return (
    <div style={{ marginTop: '50px' }}>
      <MyContext.Provider value={value}>
        <ComponentB />
      </MyContext.Provider>
    </div>
  );
}
