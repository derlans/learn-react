import React from 'react';

interface State{
  data:{
    name:string;
    age:number;
  }
}
export default class MyPureComponent extends React.PureComponent<any, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      data: {
        name: 'alien',
        age: 28,
      },
    };
  }

  handerClick = () => {
    const { data } = this.state;
    data.age += 1;
    this.setState({ data });
  };

  handerClick2 = () => {
    const { data } = this.state;
    data.age += 1;
    this.setState({ data: { ...data } });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <div>{JSON.stringify(data)}</div>
          <div>
            {' '}
            你的姓名是:
            {data.name}
          </div>
          <div>
            {' '}
            年龄：
            {data.age}
          </div>
          <button onClick={this.handerClick} type="button" className="">
            点击不会增加
          </button>
          <pre className="bg-white text-black">
            {'const {data} = this.state;\n data.age += 1;\n this.setState({data});'}
          </pre>
          <p>点击数据更新了视图不会更新 PureComponent只会浅层比较</p>
          <button onClick={this.handerClick2} type="button" className="">
            点击增加
          </button>
          <pre className="bg-white text-black">
            {'const {data} = this.state;\n data.age += 1;\n this.setState({ data: { ...data } }););'}
          </pre>
          <p>直接更新整个引用变量</p>
        </div>
      </div>
    );
  }
}
