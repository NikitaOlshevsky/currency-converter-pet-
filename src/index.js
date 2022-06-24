import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
     <Sidebar/>
    <App />
  </React.StrictMode>
);


