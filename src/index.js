import React from 'react';
import ReactDOM from 'react-dom';
import { Stocks } from './components/Stock.js';
import { BrowserRouter } from "react-router-dom"
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Stocks />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


