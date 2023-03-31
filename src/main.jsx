import React from 'react'
import ReactDOM from 'react-dom'
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InitialStockState from './components/stock-dashboard/InitialStockState'
import PopulateDashboard from './components/stock-dashboard/PopulateDashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <React.StrictMode>
      <InitialStockState />
      <PopulateDashboard />
    </React.StrictMode>
  </CookiesProvider>
);