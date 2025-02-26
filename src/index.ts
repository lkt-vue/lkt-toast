import {App, Plugin} from 'vue';
import LktToastCanvas from './lib-components/LktToastCanvas.vue';
import {default as libComponent} from './lib-components/LktToast.vue';
import {Settings} from './settings/Settings';

import "./../lkt-modal.css";
import {ValidCanvas} from "./types/ValidCanvas";

export {closeToast, openToast} from './functions/functions';

const LktToast: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-toast-canvas') === undefined) app.component('lkt-toast-canvas', LktToastCanvas);
        if (app.component('lkt-toast') === undefined) app.component('lkt-toast', libComponent);
    }
};

export default LktToast;

export const setToastCanvas = (component: ValidCanvas): void => {
    Settings.canvas = component;
};
