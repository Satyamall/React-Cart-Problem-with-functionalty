import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppContexProvider from './Components/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContexProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppContexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

