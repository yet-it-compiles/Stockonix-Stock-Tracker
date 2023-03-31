import React from "react";
import "./initial-stock.css";
import WidgetInitialState from "./InitialStockState";

export default function PopulateDashboard() {
  /**
   * <div className="widget-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div >
   */

  const eachWidget = Array.from({ length: 10 }, (_, index) => (
    //<WidgetInitialState widgetId={index + 1} key={index} />
    <div className='initial-widget-state' widgetId={index + 1} key={index}></div>
  ));

  return (
    <di>
      <div className="grid-container">{eachWidget}</div>
    </di>


  );
}
