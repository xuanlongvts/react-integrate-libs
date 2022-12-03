import { useStores } from '../../store/RootStore';

const Dashboard = () => {
    const { toastStore } = useStores();

    const handleToast = () => {
        toastStore.openToast('Mo len ban');
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
