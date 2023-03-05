import React, { useState } from "react";
import './widget.css';

/**
 * Defines the functionality of the initial state of a widget. When a user 
 * enters valid input, the input is then retrieved and displayed 
 * 
 * @returns 
 */
const WidgetInitialState = () => {
  // Sets the initial state of the stock, and defines the logic to update it
  const [newStock, setNewStock] = useState('');
  const [showStockWidget, setStockWidget] = useState(false);

  const handleSettingStock = (newStockSymbol) => {
    setNewStock(newStockSymbol);
  }

  // Defines the logic for what happens when an empty widget is pressed. 
  const handleStockPrompt = () => {
    const retrieveNewStock = window.prompt("Enter the name of the stock:");

    if (retrieveNewStock) {
      handleSettingStock(retrieveNewStock);
      setStockWidget(true);
    }
  }

  if (showStockWidget) {
    return <WidgetInteraction stockSymbol={newStock} />;
  } else {

    return (
      <div id="stock-container-initial">
        <h1 id="add-stock" onClick={handleStockPrompt}>+</h1>
      </div>
    );
  }
}


/**
 * @TODO - Add labels to buttons, document
 * Widget which contains information regarding the user selected stock
 * 
 * @returns 
 */
const WidgetInteraction = ({ stockSymbol }) => {
  const [widgetClicked, setWidget] = useState(false);

  const handleSettingWidget = () => {
    setWidget();
  }

  return (
    <div id="stock-container">

      {/* Defines both the edit widget, and show additional metrics button*/}
      <input type="button" id="edit-widget-button" class="button" value="✍🏽"></input>
      <input type="button" id="navigate-to-metrics-button" class="button" value="📉"></input>

      <h1 id="stock-symbol">{stockSymbol}</h1>

      <h2 id="current-price" class="type-number">$202.77
        <span id="denomination">USD</span></h2>

      <h3 id="price-change" class="type-number">+$4.12
        <span id="percent-change" class="type-number"> (+7.53%)</span></h3>
      <h4 id="last-updated">Last Updated: 03/04/2022</h4>
    </div>
  )
}

export default WidgetInitialState;