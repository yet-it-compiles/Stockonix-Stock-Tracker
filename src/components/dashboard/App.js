import React, { useState } from "react";
import './dashboard.css';


/**
 * @todo This is a hardcoded example of what a widget would look like.
 * This 
 * @returns 
 */
const WidgetInteraction = () => {

  // 
  const [widgetClicked, setWidget] = useState(false);

  const handleSettingWidget = () => {
    setWidget(!widgetClicked);
  }

  return (
    <div id="stock-container">
      <h1 id="stock-symbol">TSLA</h1>

      <h2 id="current-price" class="type-number">$202.77
        <span id="denomination">USD</span></h2>

      <h3 id="price-change" class="type-number">+$4.12
        <span id="percent-change" class="type-number"> (+7.53%)</span></h3>
      <h4 id="last-updated" class="type-number">Last Updated: 03/04/2022</h4>
    </div>
  )
}

export default WidgetInteraction;
