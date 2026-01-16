import {App, Plugin} from 'vue';
import LktToastCanvas from './lib-components/LktToastCanvas.vue';
import {default as libComponent} from './lib-components/LktToast.vue';

import "./../lkt-toast.css";
import {ToastController, ToastCanvasInterface} from "lkt-vue-kernel";

export {closeToast, openToast} from 'lkt-vue-kernel';

const LktToast: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-toast-canvas') === undefined) app.component('lkt-toast-canvas', LktToastCanvas);
        if (app.component('lkt-toast') === undefined) app.component('lkt-toast', libComponent);
    }
};

export default LktToast;

export const setToastCanvas = (component: ToastCanvasInterface): void => {
    ToastController.canvas = component;
};
