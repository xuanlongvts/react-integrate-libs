import { useState, useCallback, useEffect } from 'react';
import { Toast } from '@shopify/polaris';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../store/RootStore';

const ToastComp = () => {
    const { toastStore } = useStores();

    const { toastState } = toastStore;

    const [active, setActive] = useState(toastState.open);

    const toggleActive = useCallback(() => {
        setActive(active => !active);
        toastStore.closeModal();
    }, []);

    useEffect(() => {
        setActive(toastState.open);
    }, [toastState.open]);

    return (
        <div style={{ height: '250px' }}>
            {active ? (
                <Toast
                    content={toastState.body || 'Message'}
                    error={toastState.type === 'error'}
                    onDismiss={toggleActive}
                    duration={3000}
                />
            ) : null}
        </div>
    );
};

export default observer(ToastComp);
