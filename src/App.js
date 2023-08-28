import React from 'react';

import CardApp from './components/card-e-commerce/CardApp';
import { AppProvider } from './components/card-e-commerce/Context';


const App = () => {
    return (
        <AppProvider>
            <CardApp/>
        </AppProvider>
    );
};

export default App;
