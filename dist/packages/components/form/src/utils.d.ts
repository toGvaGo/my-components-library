import { Arrayable } from '../../../utils';
import { FormItemContext } from './types';
import { FormItemProp } from './form-item';
export declare function useFormLabelWidth(): {
    autoLabelWidth: import('vue').ComputedRef<string>;
    registerLabelWidth: (val: number, oldVal: number) => void;
    deregisterLabelWidth: (val: number) => void;
};
export declare const filterFields: (fields: FormItemContext[], props: Arrayable<FormItemProp>) => FormItemContext[];
