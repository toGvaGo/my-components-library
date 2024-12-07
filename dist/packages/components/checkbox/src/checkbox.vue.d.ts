declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (val: import('./checkbox').CheckboxValueType) => void;
    change: (val: import('./checkbox').CheckboxValueType) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
}>> & Readonly<{
    "onUpdate:modelValue"?: ((val: import('./checkbox').CheckboxValueType) => any) | undefined;
    onChange?: ((val: import('./checkbox').CheckboxValueType) => any) | undefined;
}>, {
    size: any;
    border: boolean;
    disabled: boolean;
    value: string | number | boolean | Record<string, any>;
    modelValue: string | number | boolean;
    name: string;
    label: string | number | boolean | Record<string, any>;
    id: string;
    indeterminate: boolean;
    checked: boolean;
    trueValue: string | number;
    falseValue: string | number;
    trueLabel: string | number;
    falseLabel: string | number;
    validateEvent: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
