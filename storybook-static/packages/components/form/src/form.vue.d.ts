import { Arrayable } from '../../../utils';
import { FormItemContext, FormItemRule, FormValidateCallback, FormValidationResult } from './types';
import { FormItemProp } from './form-item';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import('vue').PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly labelPosition: import('../../../utils').EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
    readonly requireAsteriskPosition: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "left", boolean>;
    readonly labelWidth: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelSuffix: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly validateOnRuleChage: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideRequiredAsterisk: BooleanConstructor;
    readonly scrollToError: BooleanConstructor;
    readonly scrollIntoViewOptions: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly size: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly disabled: BooleanConstructor;
}>, {
    validate: (callback?: FormValidateCallback) => FormValidationResult;
    validateField: (props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult;
    resetFields: (props?: Arrayable<FormItemProp>) => void;
    clearValidate: (props?: Arrayable<FormItemProp>) => void;
    scrollToField: (prop: FormItemProp) => void;
    fields: FormItemContext[];
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    validate: (prop: FormItemProp, isValid: boolean, message: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import('vue').PropType<Partial<Record<string, Arrayable<FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly labelPosition: import('../../../utils').EpPropFinalized<StringConstructor, "left" | "right" | "top", unknown, "right", boolean>;
    readonly requireAsteriskPosition: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "left", boolean>;
    readonly labelWidth: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelSuffix: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly validateOnRuleChage: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideRequiredAsterisk: BooleanConstructor;
    readonly scrollToError: BooleanConstructor;
    readonly scrollIntoViewOptions: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly size: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly disabled: BooleanConstructor;
}>> & Readonly<{
    onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
}>, {
    readonly inline: boolean;
    readonly disabled: boolean;
    readonly labelWidth: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly labelPosition: import('../../../utils').GpPropMergeType<StringConstructor, "left" | "right" | "top", unknown>;
    readonly inlineMessage: boolean;
    readonly showMessage: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly requireAsteriskPosition: string;
    readonly labelSuffix: string;
    readonly validateOnRuleChage: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly statusIcon: boolean;
    readonly hideRequiredAsterisk: boolean;
    readonly scrollToError: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
