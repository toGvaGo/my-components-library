import { CheckboxGroupValueType } from './checkbox-group';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly ariaLabel: StringConstructor;
    readonly modelValue: import('../../../utils').EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | (((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType)) | null)[], unknown, unknown, () => never[], boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: any;
    readonly fill: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (val: CheckboxGroupValueType) => void;
    change: (val: import('./checkbox').CheckboxValueType[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly ariaLabel: StringConstructor;
    readonly modelValue: import('../../../utils').EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | (((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType)) | null)[], unknown, unknown, () => never[], boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: any;
    readonly fill: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((val: CheckboxGroupValueType) => any) | undefined;
    onChange?: ((val: import('./checkbox').CheckboxValueType[]) => any) | undefined;
}>, {
    readonly size: any;
    readonly disabled: boolean;
    readonly modelValue: CheckboxGroupValueType;
    readonly tag: string;
    readonly validateEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
