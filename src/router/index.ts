import { lazy } from 'react';

export const routes = [
  {
    path: '/pureComponent',
    name: 'Pure组件',
    component: lazy(() => import('../learn-component/pure')),
  },
  {
    path: '/memoComponent',
    name: 'memo组件',
    component: lazy(() => import('../learn-component/memo')),
  },
  {
    path: '/forwardRef',
    name: 'forwardRef传递',
    component: lazy(() => import('../learn-component/forwardRef')),
  },
  {
    path: '/lazy',
    name: '懒加载',
    component: lazy(() => import('../learn-component/lazy')),
  },
  {
    path: '/fragment',
    name: 'fragment',
    component: lazy(() => import('../learn-component/fragment')),
  },
  {
    path: '/context',
    name: 'context',
    component: lazy(() => import('../learn-component/context')),
  },
  {
    path: '/useState',
    name: 'useState',
    component: lazy(() => import('../learn-hooks/useState')),
  },
];
