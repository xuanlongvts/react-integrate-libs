import { useContext, useState, useCallback } from 'react';
import { Toast } from '@shopify/polaris';
import { observer } from 'mobx-react-lite';

import { RootStoreContext } from '../../store/RootStore';

const ToastComp = () => {
    const rootStore = useContext(RootStoreContext);

    const {
        toastStore: { toastState },
    } = rootStore;

    console.log('toastState.open: ', toastState.open);

    const [active, setActive] = useState(toastState.open);

    const toggleActive = useCallback(() => setActive(active => !active), []);

    return (
        <div style={{ height: '250px' }}>
            {active ? <Toast content={toastState.body || 'Message'} onDismiss={toggleActive} duration={2000} /> : null}
            {/* <Toast content={toastState.body || 'Message'} onDismiss={toggleActive} duration={2000} /> */}
        </div>
    );
};

export default observer(ToastComp);
