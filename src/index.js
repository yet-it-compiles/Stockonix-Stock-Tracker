/**
 * This module is responsible for rendering the React application into the HTML
 * and handles the routing logic for the rest of the application.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from './components/metrics-page/metrics-page';
import DisplayWidget from './components/widget/DisplayWidget';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayWidget />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById('root')
);