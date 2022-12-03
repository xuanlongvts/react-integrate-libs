import { configure } from 'mobx';
import { createContext } from 'react';

import ToastStore from './ToastStore';

configure({ enforceActions: 'always' });

export class RootStore {
    toastStore: ToastStore;

    constructor() {
        this.toastStore = new ToastStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());
