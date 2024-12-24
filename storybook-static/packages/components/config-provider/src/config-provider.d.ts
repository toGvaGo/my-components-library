import { MessageConfigContext } from '../../message';
export declare const messageConfig: MessageConfigContext;
declare const ConfigProvider: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
        readonly type: import('vue').PropType<import('../..').ButtonConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly experimentalFeatures: {
        readonly type: import('vue').PropType<import('./config-provider-props').ExperimentalFeatures>;
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
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
        readonly type: import('vue').PropType<import('../..').ButtonConfigContext>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly experimentalFeatures: {
        readonly type: import('vue').PropType<import('./config-provider-props').ExperimentalFeatures>;
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
}>> & Readonly<{}>, {
    readonly size: any;
    readonly keybordNavigation: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly namespace: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>;
export default ConfigProvider;
