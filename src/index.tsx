import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import ProducsContext from './context/productsContext';

import App from './pages/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProducsContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProducsContext>
  </React.StrictMode>
);
