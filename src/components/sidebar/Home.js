import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { useGlobalContext } from './Context';

const Home = () => {
    const { openModal, openSidebar } = useGlobalContext();
    return (
        <div className="home-container">
            <button
                className="sidebar-toggle-btn"
                type="click"
                onClick={() => {
                    openSidebar();
                }}>
                <GoThreeBars />
            </button>
            <button
                className="modal-toggle-btn"
                type="click"
                onClick={() => {
                    openModal();
                }}>
                Show Modal
            </button>
        </div>
    );
};
export default Home;
