import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackHome from './home/backHome';
import Home from './home/index';
import { routes } from './router';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <BackHome />
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route index element={<Home />} key="index" />
            {routes.map((route) => (
              <Route element={<route.component />} key={route.path} path={route.path} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
