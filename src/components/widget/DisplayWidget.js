import React from "react";
import './widget.css';
import WidgetInitialState from "./widget";
import projectIcon from '../../assets/project-icon.png';

export default function DisplayWidget() {
  const widgets = Array.from({ length: 10 }, (_, index) => (
    <WidgetInitialState widgetId={index + 1} key={index} />
  ));

  return (
    <div id="main">
      <div className="adddiv">
        <img src={projectIcon} id="icon1" alt="Project Logo" />
        <h1 id="welcome">Welcome to Stockonix</h1>
        <div className="stocks">
          {widgets.slice(0, 5)}
        </div>
        <div className="stocks1">
          {widgets.slice(5)}
        </div>
      </div>
    </div>
  );
};