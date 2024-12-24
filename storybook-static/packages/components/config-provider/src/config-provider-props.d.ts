import { ExtractPropTypes } from 'vue';
import { ButtonConfigContext } from '../../button';
import { MessageConfigContext } from '../../message';
export type ExperimentalFeatures = {};
export declare const configProviderProps: {
    readonly emptyValues: ArrayConstructor;
    readonly valueOnClear: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly locale: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly size: any;
    readonly button: {
        readonly type: import('vue').PropType<ButtonConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly experimentalFeatures: {
        readonly type: import('vue').PropType<ExperimentalFeatures>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly keybordNavigation: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly message: {
        readonly type: import('vue').PropType<MessageConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly zIndex: NumberConstructor;
    readonly namespace: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "gp", boolean>;
};
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
