import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import  ErrorBoundary  from './components/ErrorBoundary';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);