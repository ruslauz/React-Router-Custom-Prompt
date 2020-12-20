import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter 
    getUserConfirmation={()=>{}}
    basename={process.env.PUBLIC_URL}>
     <App />
  </HashRouter>,
  document.getElementById('root')
);