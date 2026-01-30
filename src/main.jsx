import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ReportProvider } from './context/ReportContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ReportProvider>
          <App />
        </ReportProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);