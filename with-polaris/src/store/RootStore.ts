import { createContext, useContext } from 'react';

import ToastStore from './ToastStore';

export class RootStore {
    toastStore: ToastStore;

    constructor() {
        this.toastStore = new ToastStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());

export const useStores = () => useContext(RootStoreContext);
