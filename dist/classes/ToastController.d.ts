import { ToastConfig } from 'lkt-vue-kernel';
export declare class ToastController {
    static components: ToastConfig[];
    static zIndex: number;
    static open(config: ToastConfig): void;
    static close(zIndex: number): void;
}
