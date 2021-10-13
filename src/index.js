import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import PrincipalPage from './PrincipalPage';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <PrincipalPage />
  </React.StrictMode>,
  document.getElementById('root')
);
