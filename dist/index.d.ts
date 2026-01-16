import { Plugin } from 'vue';
import "./../lkt-toast.css";
import { ToastCanvasInterface } from "lkt-vue-kernel";
export { closeToast, openToast } from 'lkt-vue-kernel';
declare const LktToast: Plugin;
export default LktToast;
export declare const setToastCanvas: (component: ToastCanvasInterface) => void;
