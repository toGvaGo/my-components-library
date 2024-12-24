import { ComponentInternalInstance } from 'vue';
import { CheckboxProps } from '../checkbox';
export declare const useCheckbox: (props: CheckboxProps, slots: ComponentInternalInstance["slots"]) => {
    inputId: import('vue').Ref<string | undefined, string | undefined>;
    isLabeledByFormItem: import('vue').ComputedRef<boolean>;
    isChecked: import('vue').ComputedRef<boolean>;
    isDisabled: import('vue').ComputedRef<boolean>;
    isFocused: import('vue').Ref<boolean, boolean>;
    checkboxButtonSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
    checkboxSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
    hasOwnLabel: import('vue').ComputedRef<boolean>;
    model: import('vue').WritableComputedRef<any, unknown>;
    actualValue: import('vue').ComputedRef<string | number | boolean | Record<string, any> | undefined>;
    handleChange: (e: Event) => void;
    onClickRoot: (e: MouseEvent) => Promise<void>;
};
