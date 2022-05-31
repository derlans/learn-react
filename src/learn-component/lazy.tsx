import React, { ComponentType, lazy, Suspense } from 'react';

const LazeComponent = lazy<ComponentType<{}>>(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      default: () => <div>i am lazy</div>,
    });
  }, 3000);
}));

export default function LazyParent() {
  return (
    <div>
      <Suspense fallback={<div>loading... 三秒后加载出</div>}><LazeComponent /></Suspense>
    </div>
  );
}
