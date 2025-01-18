import { SetupContext } from 'vue';
import { ButtonEmits, ButtonProps } from './button';
export declare const useButton: (props: ButtonProps, emit: SetupContext<ButtonEmits>["emit"]) => {
    _disabled: import('vue').ComputedRef<boolean>;
    _size: import('vue').ComputedRef<"" | "small" | "default" | "large">;
    _type: import('vue').ComputedRef<"" | "default" | "success" | "warning" | "info" | "primary" | "danger">;
    _ref: import('vue').Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
    _props: import('vue').ComputedRef<{
        ariaDisabled: boolean;
        disabled: boolean;
        autofocus: boolean;
        type: import('../../../utils').GpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
    } | {
        ariaDisabled?: undefined;
        disabled?: undefined;
        autofocus?: undefined;
        type?: undefined;
    }>;
    shouldAddSpace: import('vue').ComputedRef<boolean>;
    handleClick: (evt: MouseEvent) => void;
};
