import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebar] = useState(false);
    const [isModalOpen, setModal] = useState(false);

    const openSidebar = () => {
        setSidebar(true);
    };
    const closeSidebar = () => {
        setSidebar(false);
    };
    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };

    return <AppContext.Provider value={{ isModalOpen, isSidebarOpen, openSidebar, closeSidebar, openModal, closeModal }}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };

export const useGlobalContext = () => {
    return useContext(AppContext);
};
