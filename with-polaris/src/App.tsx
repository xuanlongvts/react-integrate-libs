import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import { observer } from 'mobx-react-lite';

import AppFrame from './AppFrame';
import Link from './Link';

function App() {
    return (
        <BrowserRouter>
            <AppProvider i18n={translations} linkComponent={Link}>
                <AppFrame />
            </AppProvider>
        </BrowserRouter>
    );
}

export default observer(App);
