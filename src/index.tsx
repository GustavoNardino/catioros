import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DogsProvider} from './Providers/useDogs'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DogsProvider>
      <App />
    </DogsProvider>
  </React.StrictMode>
);