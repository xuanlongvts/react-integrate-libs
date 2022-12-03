import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export const type = {
    error: 'error',
};

export default class ToastStore {
    rootStore: RootStore;

    toastState = {
        open: false,
        body: null,
        type: '',
    };

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeAutoObservable(this);
    }

    // Communicate between stores
    openToast(content: any, type?: string) {
        this.toastState.open = true;
        this.toastState.body = content;
        if (type) {
            this.toastState.type = type;
        }
    }

    closeModal = () => {
        this.toastState.open = false;
        this.toastState.body = null;
        this.toastState.type = '';
    };
}
