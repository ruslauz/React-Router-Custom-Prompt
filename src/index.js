import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter getUserConfirmation={()=>{}}>
     <App />
  </BrowserRouter>,
  document.getElementById('root')
);