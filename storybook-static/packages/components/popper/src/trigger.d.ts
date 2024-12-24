import { Measurable } from './constants';
import { default as Trigger } from './trigger.vue';
export declare const popperTriggerProps: {
    readonly virtualRef: {
        readonly type: import('vue').PropType<Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly virtualTriggering: BooleanConstructor;
    readonly onMouseenter: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onMouseleave: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onClick: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onKeydown: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onFocus: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onBlur: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onContextmenu: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly id: StringConstructor;
    readonly open: BooleanConstructor;
};
export type PopperTriggerProps = typeof popperTriggerProps;
export type PopperTriggerInstance = InstanceType<typeof Trigger>;
export declare const usePopperTriggerProps: {
    readonly virtualRef: {
        readonly type: import('vue').PropType<Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly virtualTriggering: BooleanConstructor;
    readonly onMouseenter: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onMouseleave: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onClick: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onKeydown: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onFocus: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onBlur: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly onContextmenu: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly id: StringConstructor;
    readonly open: BooleanConstructor;
};
export type ElPopperArrowTrigger = PopperTriggerInstance;
