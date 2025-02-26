import { Plugin } from 'vue';
import "./../lkt-modal.css";
import { ValidCanvas } from "./types/ValidCanvas";
export { closeToast, openToast } from './functions/functions';
declare const LktToast: Plugin;
export default LktToast;
export declare const setToastCanvas: (component: ValidCanvas) => void;
