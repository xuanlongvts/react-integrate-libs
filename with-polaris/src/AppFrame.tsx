import React from 'react';
import { useLocation } from 'react-router-dom';
import { Frame, TopBar, Navigation } from '@shopify/polaris';
import { HomeMinor, OrdersMinor, MarketingMinor, ProductsMinor } from '@shopify/polaris-icons';

import Routes from './Routes';

function AppFrame() {
    const location = useLocation();

    // Track the open state of the mobile navigation
    const [mobileNavigationActive, setMobileNavigationActive] = React.useState(false);

    const toggleMobileNavigationActive = React.useCallback(
        () => setMobileNavigationActive(mobileNavigationActive => !mobileNavigationActive),
        [],
    );

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
                                url: '/home',
                                label: 'Home',
                                icon: HomeMinor,
                            },
                            {
                                url: '/orders',
                                label: 'Orders',
                                icon: OrdersMinor,
                                badge: '15',
                                subNavigationItems: [
                                    {
                                        url: '/orders/collections',
                                        disabled: false,
                                        label: 'Collections',
                                    },
                                    {
                                        url: '/orders/inventory',
                                        disabled: false,
                                        label: 'Inventory',
                                    },
                                ],
                            },
                            {
                                url: '/marketing',
                                label: 'Marketing',
                                icon: MarketingMinor,
                                badge: '15',
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
                            {
                                url: '/products',
                                label: 'Products',
                                icon: ProductsMinor,
                                selected: true,
                                subNavigationItems: [
                                    {
                                        url: '/products/collections',
                                        disabled: false,
                                        label: 'Collections',
                                    },
                                    {
                                        url: '/products/inventory',
                                        disabled: false,
                                        label: 'Inventory',
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

export default AppFrame;
