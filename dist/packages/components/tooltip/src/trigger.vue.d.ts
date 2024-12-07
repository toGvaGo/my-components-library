import { OnlyChildExpose } from '../../slot';
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly disabled: BooleanConstructor;
    readonly trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
    readonly triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
    readonly virtualRef: {
        readonly type: import('vue').PropType<import('../../popper').Measurable>;
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
}>, {
    triggerRef: import('vue').Ref<{
        forwardRef: HTMLElement;
    } | null, OnlyChildExpose | {
        forwardRef: HTMLElement;
    } | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly disabled: BooleanConstructor;
    readonly trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
    readonly triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
    readonly virtualRef: {
        readonly type: import('vue').PropType<import('../../popper').Measurable>;
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
}>> & Readonly<{}>, {
    readonly open: boolean;
    readonly disabled: boolean;
    readonly trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>)) | null)[], unknown, unknown>;
    readonly virtualTriggering: boolean;
    readonly triggerKeys: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
