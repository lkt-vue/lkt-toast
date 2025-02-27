import {ToastConfig} from 'lkt-vue-kernel';

export class ToastController {
    static components: ToastConfig[] = [];
    static zIndex: number = 1000;

    static open(config: ToastConfig) {
        ToastController.components.push({...config, zIndex: ToastController.zIndex});
        ++ToastController.zIndex;
    }

    static close(zIndex: number) {
        const needle = ToastController.components.findIndex((z:ToastConfig) => z.zIndex === zIndex);
        if (needle >= 0) {
            ToastController.components.splice(needle, 1);
            if (ToastController.components.length === 0) {
                ToastController.zIndex = 1000;
            }
        }
    }
}
