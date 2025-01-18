import { ExtractPropTypes } from 'vue';
import { Arrayable } from '../../../utils';
import { FormItemRule } from './types';
export declare const formItemValidateStates: readonly ["", "error", "validating", "success"];
export type FormItemValidateState = typeof formItemValidateStates[number];
export type FormItemProp = Arrayable<string>;
export declare const formItemProps: {
    readonly label: StringConstructor;
    readonly labelWidth: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelPosition: import('../../../utils').EpPropFinalized<StringConstructor, "" | "left" | "right" | "top", unknown, "", boolean>;
    readonly prop: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | string[]) | (() => FormItemProp) | (((new (...args: any[]) => string | string[]) | (() => FormItemProp)) | null)[], unknown, unknown>>;
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
};
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
