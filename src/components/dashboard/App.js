import React, { useState } from "react";
import AlphaVantageAPI from '../../scripts/AlphaVantageAPI.js';

import './dashboard.css';


/**
 * 
 * @returns 
 */
const WidgetInitialState = () => {

  const handleStockPrompt = () => {
    const insertNewStock = window.prompt("Enter the name of the stock:");
  }

  return (
    <div id="stock-container-initial">
      <h1 id="add-stock" onClick={handleStockPrompt}>+</h1>
    </div>
  )
}





/**
 * 
 * @returns 
 */
const WidgetInteraction = () => {
  const [widgetClicked, setWidget] = useState(false);

  const handleSettingWidget = () => {
    setWidget(!widgetClicked);
  }

  return (
    <div id="stock-container">
      {/* <input type="button" id="edit-widget-button" class="button"></input> */}
      <input type="button" id="edit-widget-button" class="button" value="✍🏽"></input>

      <input type="button" id="navigate-to-metrics-button" class="button" value="📉"></input>

      <h1 id="stock-symbol">TSLA</h1>

      <h2 id="current-price" class="type-number">$202.77
        <span id="denomination">USD</span></h2>

      <h3 id="price-change" class="type-number">+$4.12
        <span id="percent-change" class="type-number"> (+7.53%)</span></h3>
      <h4 id="last-updated">Last Updated: 03/04/2022</h4>
    </div>
  )
}

export default WidgetInitialState;
