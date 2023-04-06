/**
 * @file DisplayModal.jsx
 * @description Defines a popup modal that ask the user to enter a stock symbol.
 * @requires React
 * @requires './modal.css'
 */
import Modal from "react-modal";
import "./modal.css";

// Accessibility feature that ensures screen readers will ignore elements outside the modal.
Modal.setAppElement(document.body);

/**
 * Defines a modal that will be used to ask the user the stock symbol they would like to track
 * @param {*} param 
 * @returns 
 */
const DisplayModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-wrapper"
        >
            <h2>Stock Selection</h2>
            <label htmlFor="add-stock">Enter a stock symbol you would like to track: </label>
            <input type="text" id="add-stock" />
            <br />
            <button onClick={onRequestClose}>Submit</button>
            <br />
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default DisplayModal;