/**
 * @file DisplayModal.jsx
 * @description Defines a modal that ask the user to enter a stock symbol
 * @requires React
 * @requires './modal.css'
 */

import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import "./modal.css";

// Accessibility feature that ensures screen readers will ignore elements outside the modal.
Modal.setAppElement(document.body);

/**
 * Defines a modal that will be used to ask the user the stock symbol they would like to track
 * 
 * @TODO
 * @param {*} param 
 * @returns 
 */
const DisplayModal = ({ isOpen, onRequestClose, onSelectStock }) => {
    const [requestedStockToQuery, setRequestedStockToQuery] = React.useState('');

    const handleInputChange = useCallback((event) => {
        setRequestedStockToQuery(event.target.value);
    }, []);

    const handleSubmit = () => {
        if (requestedStockToQuery.trim() !== "") {
            onSelectStock(requestedStockToQuery);
            onRequestClose();
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel=""
            className="modal"
            overlayClassName="modal-wrapper">

            <h2>Stock Selection</h2>

            <label htmlFor="add-stock">Enter a stock symbol you would like to track: </label>
            <input type="text" id="add-stock" value={requestedStockToQuery} onChange={handleInputChange} />

            <br />

            <button onClick={handleSubmit}>Submit</button>

            <br />

            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
}

export default React.memo(DisplayModal);