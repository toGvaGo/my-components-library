import { InjectionKey, ToRefs, WritableComputedRef } from 'vue';
import { CheckboxGroupProps } from './checkbox-group';
type CheckboxGroupContext = {
    modelValue?: WritableComputedRef<any>;
    changeEvent?: (...args: any) => any;
} & ToRefs<Pick<CheckboxGroupProps, 'size' | 'min' | 'max' | 'disabled' | 'validateEvent' | 'fill' | 'textColor'>>;
export declare const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext>;
export {};
