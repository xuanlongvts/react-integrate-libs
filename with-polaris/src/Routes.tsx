import { Route, Routes, Outlet } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import RequireAuth from './requireAuth';

function ProductsCollection() {
    return (
        <div>
            <h1>Products collections</h1>
            <Outlet />
        </div>
    );
}

function ProductsInventory() {
    return (
        <div>
            <h1>Products Inventory</h1>
            <Outlet />
        </div>
    );
}

function MarketingReport() {
    return (
        <div>
            <h1>Marketing Report</h1>
            <Outlet />
        </div>
    );
}

function MarketingListView() {
    return (
        <div>
            <h1>Marketing List View</h1>
            <Outlet />
        </div>
    );
}

function Categories() {
    return (
        <div>
            <h1>Categories</h1>
            <Outlet />
        </div>
    );
}

function Layout() {
    return (
        <>
            <Outlet />
        </>
    );
}

function RoutesApp() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <>
                            <Layout />
                        </>
                    </RequireAuth>
                }
            >
                <Route path="/" element={<Dashboard />} />
                <Route path="/categories" element={<Categories />} />

                <Route path="/products/collections" element={<ProductsCollection />} />
                <Route path="/products/inventory" element={<ProductsInventory />} />

                <Route path="/marketing/reports" element={<MarketingReport />} />
                <Route path="/marketing/live-view" element={<MarketingListView />} />
            </Route>
        </Routes>
    );
}

export default RoutesApp;
