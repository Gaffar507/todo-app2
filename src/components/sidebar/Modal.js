import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useGlobalContext } from './Context';
const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();
    return (
        <div className={`${isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}`}>
            <div className="modal-container">
                <h2 className="modal-header">Modal Content</h2>
                <div>
                    <button
                        className="modal-cancel-btn"
                        onClick={
                            closeModal}>
                        <RxCross2 />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
