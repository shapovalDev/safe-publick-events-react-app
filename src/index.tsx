import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Box, CircularProgress } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './features/i18n/i18n';

const app = (
  <BrowserRouter>
    <Suspense
      fallback={
        <Box display="flex" justifyContent="center" width="100%">
          <CircularProgress />
        </Box>
      }
    >
      <App />
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
