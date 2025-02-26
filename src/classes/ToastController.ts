import {ToastConfig} from 'lkt-vue-kernel';

export class ToastController {
    private components: ToastConfig[] = [];
    private zIndex: number = 1000;

    open(config: ToastConfig) {
        console.log('openToast: ', config);
        this.components.push({...config, zIndex: this.zIndex});
        ++this.zIndex;
    }

    close(zIndex: number) {

        const needle = this.components.findIndex((z:ToastConfig) => z.zIndex === zIndex);
        if (needle) {
            delete this.components[needle];

            if (this.components.length === 0) {
                this.zIndex = 1000;
            }
        }
    }
}
