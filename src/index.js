import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter base="/goit-react-hw-05-movies">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
