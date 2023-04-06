/**
 * @file Dashboard.jsx
 * 
 * @description Defines the initial layout of the dashboard by 
 * creating a dense array, where each element represents a widget and 
 * is given a unique id based on its index within the array.
 * 
 * @requires React
 */

import React, { useState } from "react";
import DisplayModal from "../modal/DisplayModal";
import DefaultWidget from "../default-widget/DefaultWidget";
import TrackingWidget from "../update-widget/TrackingWidget";

/**
 * @TODO
 * @returns 
 */
const StockonixDashboard = () => {

    /**
     * @TODO 
     */
    const displayWidgets = Array.from({ length: 10 }, (_, index) => (
        <RenderWidgets widgetid={index++} key={index} />
    ));

    return <div className="grid-layout">{displayWidgets}</div>;
}

/**
 * Defines a default widget, and assigns a modal to request a stock 
 * symbol for the user 
 * 
 * @returns a default widget intractable widget 
 */
const RenderWidgets = () => {

    // Determines if the modal is currently opened or closed
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Determines if a widget is actively tracking a stock or not
    const [requestedStockToQuery, setStockTracked] = useState('');

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

    /**
     * An event handler that checks to see if a stock has been requested for 
     * a specific widget, if so, sets the tracked stock and closes the modal.
     * 
     * @TODO
     * @param {*} requestedStockToQuery the stock the user would like to track
     */
    const handleWidgetSetting = (requestedStockToQuery) => {
        if (requestedStockToQuery !== "") {
            setStockTracked(() => requestedStockToQuery);
            setIsModalOpen(() => false);
        }
    }

    /**
     * Checks to see if the widget has received a stock to track, if it 
     * does, then it will change appearance from default to stock tracking.
     */
    const widgetContent = requestedStockToQuery ? (
        <>
            <TrackingWidget theRequestedStock={requestedStockToQuery} onClick={handleOpenModal} />
        </>
    ) : (
        <>
            <DefaultWidget onClick={handleOpenModal} />
        </>
    );

    return (
        <>
            {widgetContent}
            <DisplayModal isOpen={isModalOpen} onRequestClose={handleCloseModal} onSelectStock={handleWidgetSetting} />
        </>

    );
};

export default StockonixDashboard;