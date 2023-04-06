/**
 * @file Dashboard.jsx
 * @description Defines the initial layout of the dashboard by 
 * creating a dense array, where each element represents a widget and is given a unique id based on its index within the array.
 * @requires React
 * @requires './widgets.css'
 */

import React, { useState } from "react";
import DisplayModal from "../modal/DisplayModal";
import "./widgets.css";

/**
 * Defines a default widget, and assigns a modal to request a stock 
 * symbol for the user 
 * 
 * @returns a default widget intractable widget 
 */
const DefaultWidget = () => {
    // Determines if the modal is currently opened or closed
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * An event handler that enables the modal to open when the user 
     * interacts with a default widget.
     */
    const handleOpenModal = () => {
        setIsModalOpen(() => true);
    };

    /**
     * An event handler that closes the modal window on request
     */
    const handleCloseModal = () => {
        setIsModalOpen(() => false);
    };

    return (
        <>
            <div className="widget-default" onClick={handleOpenModal}>
                <p>Add Stock</p>
            </div>

            <DisplayModal isOpen={isModalOpen} isClosed={handleCloseModal} />
        </>
    );
};

/**
 * Initializes a dense array of length 10, representing each widget 
 * and assigns them a unique key determined by their index.
 * 
 * @returns JSX element representing the dashboards initial 5x2 layout
 */
const StockonixDashboard = () => {

    /**
     * Declares a dense array of length 10, representing each widget
     */
    const displayWidgets = Array.from({ length: 10 }, (_, index) => (
        <DefaultWidget widgetid={index++} key={index} />
    ));

    return <div className="grid-layout">{displayWidgets}</div>;
}

export default StockonixDashboard;
