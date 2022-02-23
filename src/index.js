import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UpdateContextProvider from "./context/UpdateContext"

ReactDOM.render(
  <React.StrictMode>
    <UpdateContextProvider>
    <App />
    </UpdateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

