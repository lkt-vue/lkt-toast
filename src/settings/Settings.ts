import {ToastController} from '../classes/ToastController';
import {ValidCanvas} from "../types/ValidCanvas";

export class Settings {
    static controller: ToastController = new ToastController();
    static canvas: ValidCanvas = undefined;
    static defaultCloseIcon: string = '';
}
