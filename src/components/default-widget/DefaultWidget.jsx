/**
 * @file DefaultWidget.jsx
 * 
 * @description Defines the initial appearance of the default widget
 * 
 * @requires React
 * @requires './default-widget.css'
 */

import React from 'react';
import "./default-widget.css"

/**
 * Defines the initial default appearance of the widget
 * 
 * @returns an interactive default widget
 */
const DefaultWidget = ({ onClick }) => {
    return (
        <div className="widget-default" onClick={onClick}>
            <p>Add Stock</p>
        </div>
    );
}

export default DefaultWidget;