import React from 'react';
import ReactDOM from 'react-dom';

// File imports for testing
import WidgetInitialState from './components/widget/Widget';

// Declares the root of the 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WidgetInitialState />
  </React.StrictMode>
);