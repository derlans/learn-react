import React from 'react';

interface Props {
  grandRef: React.ForwardedRef<HTMLElement>;
}
function Son(props: Props) {
  const { grandRef } = props;
  return (
    <div>
      <div> i am alien </div>
      <span ref={grandRef}>这个是想要获取元素</span>
    </div>
  );
}

function Father(props: Props) {
  const { grandRef } = props;
  return (
    <div>
      <Son grandRef={grandRef} />
    </div>
  );
}

const NewFather = React.forwardRef((_, ref:React.ForwardedRef<HTMLElement>) => (
  <Father grandRef={ref} />
));
class GrandFather extends React.Component {
  node:HTMLElement | null = null;

  componentDidMount() {
    console.log(this.node);
  }

  render() {
    return (
      <div>
        <NewFather ref={(node) => { this.node = node; }} />
      </div>
    );
  }
}
export default GrandFather;
