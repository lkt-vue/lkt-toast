import {ToastConfig} from 'lkt-vue-kernel';
import {Settings} from '../settings/Settings';
import {ToastController} from "../classes/ToastController";

export const openToast = (config: ToastConfig) => {
    if (!Settings.canvas) {
        console.warn('ToastCanvas not defined');
        return;
    }
    ToastController.open(config);
    //@ts-ignore
    Settings.canvas.refresh();
};

export const closeToast = (zIndex: number) => {
    if (!Settings.canvas) {
        console.warn('ToastCanvas not defined');
        return;
    }
    ToastController.close(zIndex);
    //@ts-ignore
    Settings.canvas.refresh();
};