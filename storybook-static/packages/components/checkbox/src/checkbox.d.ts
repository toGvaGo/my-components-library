import { ExtractPropTypes } from 'vue';
import { default as Checkbox } from './checkbox.vue';
export type CheckboxValueType = string | number | boolean;
export declare const checkboxProps: {
    ariaControls: StringConstructor;
    modelValue: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    label: {
        type: (ObjectConstructor | NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    value: {
        type: (ObjectConstructor | NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    trueValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    falseValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    trueLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    falseLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    size: any;
    tabindex: (NumberConstructor | StringConstructor)[];
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const checkboxEmits: {
    "update:modelValue": (val: CheckboxValueType) => val is string | number | boolean;
    change: (val: CheckboxValueType) => val is string | number | boolean;
};
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export type CheckboxEmits = typeof checkboxEmits;
export type CheckboxInstance = InstanceType<typeof Checkbox>;
