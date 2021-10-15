import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './features/i18n/i18n';

const app = (
  <BrowserRouter>
    <Suspense fallback={<h3>Loading...</h3>}>
      <App />
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
