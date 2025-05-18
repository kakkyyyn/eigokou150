import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'; // ← これを使う！

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter> {/* ← ここも変更 */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
