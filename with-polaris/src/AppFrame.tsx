import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Frame, TopBar, Navigation } from '@shopify/polaris';
import { HomeMinor, OrdersMinor, MarketingMinor, CategoriesMajor, PlusMinor, MinusMinor, ChevronDownMinor } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';

import { observer } from 'mobx-react-lite';

import Routes from './Routes';
import ToastComp from './components/toast';

const initObj = {
    home: false,
    categories: false,
    products: false,
    marketing: false,
};

function AppFrame() {
    const location = useLocation();

    const [statusOpen, setStatusOpen] = useState<any>(initObj);

    const [mobileNavigationActive, setMobileNavigationActive] = React.useState(false);

    const toggleMobileNavigationActive = React.useCallback(
        () => setMobileNavigationActive(mobileNavigationActive => !mobileNavigationActive),
        [],
    );

    const handleExpand = (props: string) => {
        setStatusOpen({
            ...initObj,
            [props]: !statusOpen[props],
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
                                matches: location.pathname === '/',
                                onClick: () => handleExpand('home'),
                            },
                            {
                                url: '/categories',
                                label: 'Categories',
                                icon: CategoriesMajor,
                                matches: location.pathname === '/categories',
                                onClick: () => handleExpand('categories'),
                            },
                            {
                                url: '#',
                                label: 'Products',
                                icon: OrdersMinor,
                                badge: (
                                    <div style={{ width: 15 }}>
                                        <Icon
                                            source={
                                                ['/products/collections', '/products/inventory'].includes(location.pathname) ||
                                                statusOpen.products
                                                    ? MinusMinor
                                                    : PlusMinor
                                            }
                                            color="subdued"
                                        />
                                    </div>
                                ),
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
                                url: '#',
                                label: 'Marketing',
                                icon: MarketingMinor,
                                badge: (
                                    <div style={{ width: 15 }}>
                                        <Icon
                                            source={
                                                ['/marketing/reports', '/marketing/live-view'].includes(location.pathname) ||
                                                statusOpen.marketing
                                                    ? MinusMinor
                                                    : PlusMinor
                                            }
                                            color="subdued"
                                        />
                                    </div>
                                ),
                                selected: statusOpen.marketing,
                                onClick: () => handleExpand('marketing'),
                                expanded: statusOpen.marketing,
                                subNavigationItems: [
                                    {
                                        url: '/marketing/reports',
                                        label: 'Reports',
                                    },
                                    {
                                        url: '/marketing/live-view',
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
            <ToastComp />
        </Frame>
    );
}

export default observer(AppFrame);
