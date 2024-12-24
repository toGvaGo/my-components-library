import { CheckboxProps } from '../checkbox';
export declare const useCheckboxModel: (props: CheckboxProps) => {
    model: import('vue').WritableComputedRef<any, unknown>;
    isGroup: import('vue').ComputedRef<boolean>;
    isLimitExceeded: import('vue').Ref<boolean, boolean>;
};
export type CheckboxModel = ReturnType<typeof useCheckboxModel>;
