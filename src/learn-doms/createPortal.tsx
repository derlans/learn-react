import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

function WrapComponent({ children }:{children:React.ReactNode}) {
  const domRef = useRef<HTMLDivElement>(null);
  const domRef2 = useRef<HTMLDivElement>(null);
  const [PortalComponent, setPortalComponent] = useState<React.ReactNode | null>(null);
  console.log(PortalComponent, 'PortalComponent');
  React.useEffect(() => {
    setPortalComponent(ReactDOM.createPortal(children, domRef2.current!));
  }, []);
  return (
    <div>
      <div className="container" ref={domRef}>
        { PortalComponent }
      </div>
      <div className="container2" ref={domRef2} />
    </div>
  );
}

export default function () {
  return (
    <div style={{ marginTop: '50px' }}>
      <WrapComponent>
        <div>hello,world</div>
      </WrapComponent>
    </div>
  );
}
