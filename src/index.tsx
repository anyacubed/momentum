import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Momentum } from './pages/Momentum/Momentum';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(store)

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Momentum />
    </Provider>,
  // </React.StrictMode>
);
