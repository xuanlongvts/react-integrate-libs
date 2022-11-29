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

function Products() {
    return (
        <div>
            <h1>Products</h1>
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
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
        </>
    );
}

export default RoutesApp;
