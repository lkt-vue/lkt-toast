import {ToastConfig} from 'lkt-vue-kernel';
import {Settings} from '../settings/Settings';

export const openToast = (config: ToastConfig) => {
    if (!Settings.canvas) {
        console.warn('ToastCanvas not defined');
        return;
    }
    Settings.controller.open(config);
    //@ts-ignore
    Settings.canvas.refresh();
};

export const closeToast = (zIndex: number) => {
    if (!Settings.canvas) {
        console.warn('ToastCanvas not defined');
        return;
    }
    Settings.controller.close(zIndex);
    //@ts-ignore
    Settings.canvas.refresh();
};