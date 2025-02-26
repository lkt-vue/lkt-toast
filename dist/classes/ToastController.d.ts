import { ToastConfig } from 'lkt-vue-kernel';
export declare class ToastController {
    private components;
    private zIndex;
    open(config: ToastConfig): void;
    close(zIndex: number): void;
}
