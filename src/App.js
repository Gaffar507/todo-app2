import React from 'react';

import { AppProvider } from './components/stripe/Context';
import StripeApp from './components/stripe/StripeApp';

const App = () => {
    return (
        <AppProvider>
            <StripeApp/>
        </AppProvider>
    );
};

export default App;
