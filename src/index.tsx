import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ProducsContext from './context/productsContext';

import LandingPage from './pages/landing/landing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProducsContext>
      <LandingPage />
    </ProducsContext>
  </React.StrictMode>
);

