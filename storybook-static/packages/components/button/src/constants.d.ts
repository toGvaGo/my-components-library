import { InjectionKey } from 'vue';
import { ButtonProps } from './button';
export interface buttonGroupContext {
    size?: ButtonProps['size'];
    type?: ButtonProps['type'];
}
export declare const buttonGroupContextKey: InjectionKey<buttonGroupContext>;
