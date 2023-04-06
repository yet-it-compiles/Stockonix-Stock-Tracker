/**
 * @file Dashboard.jsx
 * @description Defines the initial layout of the dashboard by 
 * creating a dense array, where each element represents a widget and is given a unique id based on its index within the array.
 * @requires React
 * @requires './widgets.css'
 */

import React from "react";
import './widgets.css';

/**
 * Displays a grid of ten widgets, separated in two rows of five
 * @returns JSX element representing the dashboards initial layout
 */
const StockonixDashboard = () => {

    /**
     * Declares an dense array of length 10, representing each widget
     */
    const displayWidgets = Array.from({ length: 10 }, (_, index) => (
        <div className='widget-default' widgetId={index + 1} key={index}>
            <p>Add Stock</p>
        </div>
    ));

    return <div className="grid-layout">{displayWidgets}</div>;
}

export default StockonixDashboard;