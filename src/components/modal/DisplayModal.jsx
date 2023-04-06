/**
 * @file DisplayModal.jsx
 * @description Defines a reusable modal that will display both a child, and close button.
 * @requires React
 * @requires './modal.css'
 */

import React from "react";
import "./modal.css";

/**
 * @description - DisplayModal Component - A reusable modal component for displaying content
 * 
 * @param {Object} props - Takes two props by its parent component
 * @param {ReactNode} children - Child node that renders in the modal inside the modal
 * @param {Function} onClose - Callback function to close the
 * modal
 * @returns {JSX.Element} - Returns the JSX markup of the modal
*/
const DisplayModal = ({ children, onClose }) => {
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
}

export default DisplayModal;
