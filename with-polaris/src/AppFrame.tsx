import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Frame, TopBar, Navigation } from '@shopify/polaris';
import { HomeMinor, OrdersMinor, MarketingMinor, CategoriesMajor } from '@shopify/polaris-icons';
import { observer } from 'mobx-react-lite';

import Routes from './Routes';

const initObj = {
    home: false,
    categories: false,
    products: false,
    marketing: false,
};

function AppFrame() {
    const location = useLocation();

    const [statusOpen, setStatusOpen] = useState(initObj);

    const [mobileNavigationActive, setMobileNavigationActive] = React.useState(false);

    const toggleMobileNavigationActive = React.useCallback(
        () => setMobileNavigationActive(mobileNavigationActive => !mobileNavigationActive),
        [],
    );

    const handleExpand = (props: string) => {
        setStatusOpen({
            ...initObj,
            [props]: true,
        });
    };

    return (
        <Frame
            showMobileNavigation={mobileNavigationActive}
            onNavigationDismiss={toggleMobileNavigationActive}
            topBar={<TopBar showNavigationToggle onNavigationToggle={toggleMobileNavigationActive} />}
            navigation={
                <Navigation location={location.pathname}>
                    <Navigation.Section
                        items={[
                            {
                                url: '/',
                                label: 'Home',
                                icon: HomeMinor,
                                matches: statusOpen.home,
                                onClick: () => handleExpand('home'),
                            },
                            {
                                url: '/categories',
                                label: 'Categories',
                                icon: CategoriesMajor,
                                matches: statusOpen.categories,
                                onClick: () => handleExpand('categories'),
                            },
                            {
                                url: location.pathname,
                                label: 'Products',
                                icon: OrdersMinor,
                                badge: '15',
                                selected: statusOpen.products,
                                onClick: () => handleExpand('products'),
                                subNavigationItems: [
                                    {
                                        url: '/products/collections',
                                        label: 'Collections',
                                    },
                                    {
                                        url: '/products/inventory',
                                        label: 'Inventory',
                                    },
                                ],
                            },
                            {
                                url: location.pathname,
                                label: 'Marketing',
                                icon: MarketingMinor,
                                badge: '15',
                                selected: statusOpen.marketing,
                                onClick: () => handleExpand('marketing'),
                                subNavigationItems: [
                                    {
                                        url: '/marketing/reports',
                                        disabled: false,
                                        label: 'Reports',
                                    },
                                    {
                                        url: '/marketing/live-view',
                                        disabled: false,
                                        label: 'Live view',
                                    },
                                ],
                            },
                        ]}
                    />
                </Navigation>
            }
        >
            <Routes />
        </Frame>
    );
}

export default observer(AppFrame);
