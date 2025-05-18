// index.tsx または main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ← ✅ これを使っているか？
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HashRouter> {/* ✅ BrowserRouter ではダメ */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
