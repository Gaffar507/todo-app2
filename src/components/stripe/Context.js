import React, { useContext, useState } from 'react';
import sublinks from './data';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebar] = useState(false);
    const [isSubmenuOpen, setSubmenu] = useState(false);
    const [location, setLocation] = useState({});
    const [page,setPage] = useState({page:'', links:[]});

    const openSidebar = () => {
        setSidebar(true);
    };
    const closeSidebar = () => {
        setSidebar(false);
    };
    const openSubmenu = (text, coordinates) => {
      const newPage=sublinks.find((item)=>item.page===text)
        setPage(newPage)
        setLocation(coordinates);
        setSubmenu(true);
    };
    const closeSubmenu = () => {
        setSubmenu(false);
    };
    return <AppContext.Provider value={{ isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu, location, page }}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
