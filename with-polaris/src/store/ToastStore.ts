import { action, observable } from 'mobx';
import { RootStore } from './RootStore';

export default class ToastStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable.shallow toastState = {
        open: false,
        body: null,
    };

    @action openToast = (content: any) => {
        this.toastState.open = true;
        this.toastState.body = content;
    };

    @action closeModal = () => {
        this.toastState.open = false;
        this.toastState.body = null;
    };
}
