import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../router/index';

export default function Home() {
  return (
    <div className="home">
      {routes.map((route) => (
        <div className="border-2 m-3 p-3" key={route.path}>
          <Link key={route.path} to={route.path}>
            {route.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
