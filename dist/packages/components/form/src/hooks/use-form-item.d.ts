import { ComputedRef, Ref } from 'vue';
import { FormItemContext } from '../types';
export declare const useFormItem: () => {
    form: import('../types').FormContext | undefined;
    formItem: FormItemContext | undefined;
};
export type IUserFormItemInputCommonProps = {
    id?: string;
    label?: string | number | boolean | Record<string, any>;
    ariaLabel?: string | number | boolean | Record<string, any>;
};
export declare const useFormItemInputId: (props: Partial<IUserFormItemInputCommonProps>, { formItemContext, disableIdGeneration, disableIdManagement, }: {
    formItemContext?: FormItemContext;
    disableIdGeneration?: ComputedRef<boolean> | Ref<boolean>;
    disableIdManagement?: ComputedRef<boolean> | Ref<boolean>;
}) => {
    isLabeledByFormItem: ComputedRef<boolean>;
    inputId: Ref<string | undefined, string | undefined>;
};
