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

function RoutesApp() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />

                    <Route path="/products/collections" element={<ProductsCollection />} />
                    <Route path="/products/inventory" element={<ProductsInventory />} />
                </Route>
            </Routes>
        </>
    );
}

export default RoutesApp;
