/**
 * @file Dashboard.jsx
 * 
 * @description Defines the initial layout of the dashboard by 
 * creating a dense array, where each element represents a widget and 
 * is given a unique id based on its index within the array.
 * 
 * @requires React
 * @requires './widgets.css'
 */

import React, { useState } from "react";
import DisplayModal from "../modal/DisplayModal";
import "./default-widget.css"
import "./stock-widget.css"

/**
 * Defines a default widget, and assigns a modal to request a stock 
 * symbol for the user 
 * 
 * @returns a default widget intractable widget 
 */
const DefaultWidget = () => {

    // Determines if the modal is currently opened or closed
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Determines if a widget is actively tracking a stock or not
    const [stockTracked, setStockTracked] = useState('');

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

    const handleWidgetSetting = (requestedStock) => {
        if (requestedStock !== "") {
            setStockTracked(() => requestedStock);
            setIsModalOpen(() => false);
        }
    }

    const widgetContent = stockTracked ? (
        <>
            <div className='widget-container' onClick={handleOpenModal}>
                <div className='wave'></div>
                <div className='wave wave-2'></div>
                <div className='wave wave-3'></div>
                <div id='add-stock-symbol'>Tesla Inc.</div>
                <div>$202.77</div>
                <div className='test'>1 minute ago</div>
            </div>
            <DisplayModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
        </>
    ) : (
        <>
            <div className="widget-default" onClick={handleOpenModal}>
                <p>Add Stock</p>
            </div>
            <DisplayModal isOpen={isModalOpen} onRequestClose={handleCloseModal} onSelectStock={handleWidgetSetting} />
        </>
    );

    return widgetContent;
};

const StockonixDashboard = () => {

    const displayWidgets = Array.from({ length: 10 }, (_, index) => (
        <DefaultWidget widgetid={index++} key={index} />
    ));

    return <div className="grid-layout">{displayWidgets}</div>;
}

export default StockonixDashboard;
