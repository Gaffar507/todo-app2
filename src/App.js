import React from 'react';

import CocktailsApp from './components/cocktails/CocktailsApp';
import { AppProvider } from './components/cocktails/context';


const App = () => {
    return (
        <AppProvider>
            <CocktailsApp/>
        </AppProvider>
    );
};

export default App;
