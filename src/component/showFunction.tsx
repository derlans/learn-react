import React from 'react';

interface Props{
  fn:()=>void;
}
export default function ShowFunction({ fn }:Props) {
  return (
    <div className="p-10 text-left flex justify-center flex-col items-center">
      <button type="button" onClick={fn} className="btn mb-4">触发</button>
      <pre className="bg-white text-black">
        <code>
          { fn.toString() }
        </code>
      </pre>
    </div>
  );
}
