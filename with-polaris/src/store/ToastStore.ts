import { action, observable, makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export default class ToastStore {
    rootStore: RootStore;

    toastState = {
        open: false,
        body: null,
    };

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        makeAutoObservable(this);
    }

    // Communicate between stores
    openToast(content: any) {
        this.toastState.open = true;
        this.toastState.body = content;
    }

    closeModal = () => {
        this.toastState.open = false;
        this.toastState.body = null;
    };
}
