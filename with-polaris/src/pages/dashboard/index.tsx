import { useStores } from '../../store/RootStore';

import { type } from '../../store/ToastStore';

const Dashboard = () => {
    const { toastStore } = useStores();

    const handleToast = () => {
        toastStore.openToast('Mo len ban', type.error);
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={handleToast} style={{ cursor: 'pointer' }}>
                Show Toast
            </button>
        </div>
    );
};

export default Dashboard;
