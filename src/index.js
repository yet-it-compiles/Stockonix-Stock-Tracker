import React from 'react';
import ReactDOM from 'react-dom';

import WidgetInitialState from './components/dashboard/Widget';

// Declares the root of the 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <WidgetInitialState />
  // </React.StrictMode>
);