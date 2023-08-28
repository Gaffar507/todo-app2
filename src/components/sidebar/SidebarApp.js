import React from 'react';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';

import './sidebarApp.css';
const SidebarApp = () => {
    return (
        <>
            <Home />
            <Sidebar />
            <Modal />
        </>
    );
};

export default SidebarApp;
