import React from 'react';
import ReactDOM from 'react-dom/client';
import { Momentum } from './pages/Momentum/Momentum';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <Momentum />
  // </React.StrictMode>
);
