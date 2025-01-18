import { Arrayable } from '../../../utils';
import { FormItemRule } from './types';
declare function __VLS_template(): {
    slots: {
        label?(_: {
            label: void;
        }): any;
        default?(_: {}): any;
        error?(_: {
            error: string;
        }): any;
    };
    refs: {
        formItemRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly label: StringConstructor;
    readonly labelWidth: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelPosition: import('../../../utils').EpPropFinalized<StringConstructor, "" | "left" | "right" | "top", unknown, "", boolean>;
    readonly prop: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import('./form-item').FormItemProp) | (((new (...args: any[]) => string | string[]) | (() => import('./form-item').FormItemProp)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly required: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly rules: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>) | (((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly error: StringConstructor;
    readonly validateStatus: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<StringConstructor, "" | "error" | "validating" | "success", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly for: StringConstructor;
    readonly inlineMessage: import('../../../utils').EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    readonly showMessage: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
}>, {
    size: import('vue').ComputedRef<"" | "small" | "default" | "large">;
    validateMessage: import('vue').Ref<string, string>;
    validateState: import('vue').Ref<"" | "error" | "validating" | "success", "" | "error" | "validating" | "success">;
    validate: (trigger: string, callback?: import('./types').FormValidateCallback) => import('./types').FormValidationResult;
    clearValidate: () => void;
    resetField: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly label: StringConstructor;
    readonly labelWidth: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelPosition: import('../../../utils').EpPropFinalized<StringConstructor, "" | "left" | "right" | "top", unknown, "", boolean>;
    readonly prop: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import('./form-item').FormItemProp) | (((new (...args: any[]) => string | string[]) | (() => import('./form-item').FormItemProp)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly required: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly rules: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>) | (((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => Arrayable<FormItemRule>)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly error: StringConstructor;
    readonly validateStatus: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<StringConstructor, "" | "error" | "validating" | "success", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly for: StringConstructor;
    readonly inlineMessage: import('../../../utils').EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
    readonly showMessage: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly size: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
}>> & Readonly<{}>, {
    readonly required: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly labelWidth: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly labelPosition: import('../../../utils').GpPropMergeType<StringConstructor, "" | "left" | "right" | "top", unknown>;
    readonly inlineMessage: import('../../../utils').GpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
    readonly showMessage: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
