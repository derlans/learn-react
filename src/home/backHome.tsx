import React from 'react';
import { Link } from 'react-router-dom';

export default function BackHome() {
  return (
    <div style={{ position: 'fixed', top: '20px', left: '20px' }}>
      <Link to="/">返回首页</Link>
    </div>
  );
}
