import React from 'react';

import SidebarApp from './components/sidebar/SidebarApp';
import { AppProvider } from './components/sidebar/Context';


const App = () => {
    return (
        <AppProvider>
            <SidebarApp/>
        </AppProvider>
    );
};

export default App;
