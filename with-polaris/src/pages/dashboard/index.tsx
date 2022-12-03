import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { RootStoreContext } from '../../store/RootStore';

const Dashboard = () => {
    const rootStore = useContext(RootStoreContext);

    const handleToast = () => {
        rootStore.toastStore.openToast('Mo len ');
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={handleToast} style={{ cursor: 'pointer' }}>
                Show Toast
            </button>
            {/* <Outlet /> */}
        </div>
    );
};

export default Dashboard;
