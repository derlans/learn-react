import React, { lazy } from 'react';

const learnComponent = import.meta.glob('../learn-component/*.tsx');
const learnHooks = import.meta.glob('../learn-hooks/*.tsx');
const learnDoms = import.meta.glob('../learn-doms/*.tsx');
const learns = {
  ...learnComponent,
  ...learnHooks,
  ...learnDoms,
};
export const routes:{
  path: string,
  component: React.LazyExoticComponent<React.FC>,
  name: string,
}[] = [];
for (const path of Object.keys(learns)) {
  const name = path.match(/(.*)(\/)(.+)(\.tsx)$/)![3]!;
  routes.push({
    name,
    path: encodeURIComponent(name),
    component: lazy(learns[path] as any),
  });
}
