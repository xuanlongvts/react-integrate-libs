import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
}

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

function Settings() {
    return (
        <div>
            <h1>Settings</h1>
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

function RoutesApp() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />

                <Route path="/products/collections" element={<ProductsCollection />} />
                <Route path="/products/inventory" element={<ProductsInventory />} />

                <Route path="/marketing/reports" element={<MarketingReport />} />
                <Route path="/marketing/live-view" element={<MarketingListView />} />
            </Route>
        </Routes>
    );
}

export default RoutesApp;
