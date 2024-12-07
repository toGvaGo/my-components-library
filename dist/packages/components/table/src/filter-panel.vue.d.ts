import { Placement } from '../../popper';
import { PropType, WritableComputedRef } from 'vue';
import { TableColumnCtx } from './table-column/defaults';
import { Store } from './store';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    store: {
        type: PropType<Store<unknown>>;
    };
    column: {
        type: PropType<TableColumnCtx<unknown>>;
    };
    upDataColumn: {
        type: FunctionConstructor;
    };
    appendTo: {
        type: StringConstructor;
    };
}>, {
    tooltipVisible: import('vue').Ref<boolean, boolean>;
    multiple: import('vue').ComputedRef<boolean>;
    filterClassName: import('vue').ComputedRef<string>;
    filteredValue: WritableComputedRef<unknown[], unknown[]>;
    filterValue: WritableComputedRef<string, string>;
    filters: import('vue').ComputedRef<import('./table-column/defaults').Filters | undefined>;
    handleConfirm: () => void;
    handleReset: () => void;
    handleSelect: (_filterValue?: string) => void;
    isActive: (filter: any) => boolean;
    ns: {
        namespace: import('vue').ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string) => string;
        m: (modifier?: string) => string;
        be: (blockSuffix?: string, element?: string) => string;
        em: (element?: string, modifier?: string) => string;
        bm: (blockSuffix?: string, modifer?: string) => string;
        bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    showFilterPanel: (e: MouseEvent) => void;
    hideFilterPanel: () => void;
    popperPaneRef: import('vue').ComputedRef<HTMLElement | undefined>;
    tooltip: import('vue').Ref<({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            content: string;
            offset: number;
            visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            open: boolean;
            disabled: boolean;
            showAfter: number;
            hideAfter: number;
            autoClose: number;
            placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
            strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            effect: string;
            role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
            arrowOffset: number;
            virtualTriggering: boolean;
            boundariesPadding: number;
            fallbackPlacements: Placement[];
            gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import('../../popper').Options>;
            enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            pure: boolean;
            triggerKeys: string[];
            teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            rawContent: boolean;
            persistent: boolean;
            "onUpdate:visible": any;
            showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            readonly content: string;
            readonly offset: number;
            readonly visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            readonly open: boolean;
            readonly disabled: boolean;
            readonly showAfter: number;
            readonly hideAfter: number;
            readonly autoClose: number;
            readonly placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
            readonly strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            readonly effect: string;
            readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            readonly trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
            readonly arrowOffset: number;
            readonly virtualTriggering: boolean;
            readonly boundariesPadding: number;
            readonly gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popperOptions: Partial<import('../../popper').Options>;
            readonly enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly pure: boolean;
            readonly triggerKeys: string[];
            readonly teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly rawContent: boolean;
            readonly persistent: boolean;
            readonly "onUpdate:visible": any;
            readonly showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly zIndex?: number | undefined;
            readonly transition?: string | undefined;
            readonly style?: import('vue').StyleValue;
            readonly ariaLabel?: string | undefined;
            readonly id?: string | undefined;
            readonly appendTo?: import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown> | undefined;
            readonly onFocus?: ((e: Event) => void) | undefined;
            readonly onBlur?: ((e: Event) => void) | undefined;
            readonly onKeydown?: ((e: Event) => void) | undefined;
            readonly onClick?: ((e: Event) => void) | undefined;
            readonly onContextmenu?: ((e: Event) => void) | undefined;
            readonly onMouseenter?: ((e: Event) => void) | undefined;
            readonly onMouseleave?: ((e: Event) => void) | undefined;
            readonly className?: (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined;
            readonly virtualRef?: import('../../popper').Measurable | undefined;
            readonly fallbackPlacements?: Placement[] | undefined;
            readonly popperClass?: (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined;
            readonly popperStyle?: import('vue').StyleValue;
            readonly referenceEl?: HTMLElement | undefined;
            readonly triggerTargetEl?: HTMLElement | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "content" | "offset" | "visible" | "open" | "disabled" | "showAfter" | "hideAfter" | "autoClose" | "placement" | "strategy" | "effect" | "role" | "trigger" | "arrowOffset" | "virtualTriggering" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "pure" | "triggerKeys" | "teleported" | "rawContent" | "persistent" | "onUpdate:visible" | "showArrow">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            disabled: BooleanConstructor;
            trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
            triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
            virtualRef: {
                readonly type: PropType<import('../../popper').Measurable>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            virtualTriggering: BooleanConstructor;
            onMouseenter: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onMouseleave: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onClick: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onKeydown: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onFocus: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onBlur: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onContextmenu: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            id: StringConstructor;
            open: BooleanConstructor;
            ariaLabel: StringConstructor;
            appendTo: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            content: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            rawContent: BooleanConstructor;
            persistent: BooleanConstructor;
            visible: import('../../../utils').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown, null, boolean>;
            transition: StringConstructor;
            teleported: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            style: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            className: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
            enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            pure: BooleanConstructor;
            focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperClass: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            popperStyle: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            referenceEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            triggerTargetEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zIndex: NumberConstructor;
            boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | (((new (...args: any[]) => Placement[]) | (() => Placement[])) | null)[], unknown, unknown, undefined, boolean>;
            gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
            placement: import('../../../utils').EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
            popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
            strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
            showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            "onUpdate:visible": any;
            role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, {
            popperRef: import('vue').Ref<({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }> & Omit<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & Readonly<{}>, {
                    triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    contentRef: import('vue').Ref<HTMLElement | undefined>;
                    popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                    referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    role: import('vue').ComputedRef<string>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined, ({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }> & Omit<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & Readonly<{}>, {
                    triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    contentRef: import('vue').Ref<HTMLElement | undefined>;
                    popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                    referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    role: import('vue').ComputedRef<string>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined>;
            contentRef: import('vue').Ref<any, any>;
            isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
            updatePopper: () => void;
            onOpen: (event?: Event) => void;
            onClose: (event?: Event) => void;
            hide: (event?: Event) => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            content: string;
            offset: number;
            visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            open: boolean;
            disabled: boolean;
            showAfter: number;
            hideAfter: number;
            autoClose: number;
            placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
            strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            effect: string;
            role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
            arrowOffset: number;
            virtualTriggering: boolean;
            boundariesPadding: number;
            fallbackPlacements: Placement[];
            gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import('../../popper').Options>;
            enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            pure: boolean;
            triggerKeys: string[];
            teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            rawContent: boolean;
            persistent: boolean;
            "onUpdate:visible": any;
            showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        content: string;
        offset: number;
        visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
        open: boolean;
        disabled: boolean;
        showAfter: number;
        hideAfter: number;
        autoClose: number;
        placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
        strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
        effect: string;
        role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
        arrowOffset: number;
        virtualTriggering: boolean;
        boundariesPadding: number;
        fallbackPlacements: Placement[];
        gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        popperOptions: Partial<import('../../popper').Options>;
        enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        pure: boolean;
        triggerKeys: string[];
        teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        rawContent: boolean;
        persistent: boolean;
        "onUpdate:visible": any;
        showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    }> & Omit<Readonly<import('vue').ExtractPropTypes<{
        showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
        disabled: BooleanConstructor;
        trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
        triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
        virtualRef: {
            readonly type: PropType<import('../../popper').Measurable>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        virtualTriggering: BooleanConstructor;
        onMouseenter: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onMouseleave: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onClick: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onKeydown: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onFocus: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onBlur: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onContextmenu: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        id: StringConstructor;
        open: BooleanConstructor;
        ariaLabel: StringConstructor;
        appendTo: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        content: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        rawContent: BooleanConstructor;
        persistent: BooleanConstructor;
        visible: import('../../../utils').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown, null, boolean>;
        transition: StringConstructor;
        teleported: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        style: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        className: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
        enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        pure: BooleanConstructor;
        focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        popperClass: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        popperStyle: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        referenceEl: {
            readonly type: PropType<HTMLElement>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        triggerTargetEl: {
            readonly type: PropType<HTMLElement>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        zIndex: NumberConstructor;
        boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | (((new (...args: any[]) => Placement[]) | (() => Placement[])) | null)[], unknown, unknown, undefined, boolean>;
        gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
        placement: import('../../../utils').EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
        popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
        strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
        showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
        autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        "onUpdate:visible": any;
        role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
    }>> & Readonly<{}>, "hide" | "onClose" | "contentRef" | "updatePopper" | "onOpen" | "popperRef" | "isFocusInsideContent" | ("content" | "offset" | "visible" | "open" | "disabled" | "showAfter" | "hideAfter" | "autoClose" | "placement" | "strategy" | "effect" | "role" | "trigger" | "arrowOffset" | "virtualTriggering" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "pure" | "triggerKeys" | "teleported" | "rawContent" | "persistent" | "onUpdate:visible" | "showArrow")> & import('vue').ShallowUnwrapRef<{
        popperRef: import('vue').Ref<({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, {
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
            triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            contentRef: import('vue').Ref<HTMLElement | undefined>;
            popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
            referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            role: import('vue').ComputedRef<string>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | undefined, ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, {
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
            triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            contentRef: import('vue').Ref<HTMLElement | undefined>;
            popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
            referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            role: import('vue').ComputedRef<string>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | undefined>;
        contentRef: import('vue').Ref<any, any>;
        isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
        updatePopper: () => void;
        onOpen: (event?: Event) => void;
        onClose: (event?: Event) => void;
        hide: (event?: Event) => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
            content?(_: {}): any;
        };
    }) | null, ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            content: string;
            offset: number;
            visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            open: boolean;
            disabled: boolean;
            showAfter: number;
            hideAfter: number;
            autoClose: number;
            placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
            strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            effect: string;
            role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
            arrowOffset: number;
            virtualTriggering: boolean;
            boundariesPadding: number;
            fallbackPlacements: Placement[];
            gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import('../../popper').Options>;
            enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            pure: boolean;
            triggerKeys: string[];
            teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            rawContent: boolean;
            persistent: boolean;
            "onUpdate:visible": any;
            showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<{
            readonly content: string;
            readonly offset: number;
            readonly visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            readonly open: boolean;
            readonly disabled: boolean;
            readonly showAfter: number;
            readonly hideAfter: number;
            readonly autoClose: number;
            readonly placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
            readonly strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            readonly effect: string;
            readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            readonly trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
            readonly arrowOffset: number;
            readonly virtualTriggering: boolean;
            readonly boundariesPadding: number;
            readonly gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popperOptions: Partial<import('../../popper').Options>;
            readonly enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly pure: boolean;
            readonly triggerKeys: string[];
            readonly teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly rawContent: boolean;
            readonly persistent: boolean;
            readonly "onUpdate:visible": any;
            readonly showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly zIndex?: number | undefined;
            readonly transition?: string | undefined;
            readonly style?: import('vue').StyleValue;
            readonly ariaLabel?: string | undefined;
            readonly id?: string | undefined;
            readonly appendTo?: import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown> | undefined;
            readonly onFocus?: ((e: Event) => void) | undefined;
            readonly onBlur?: ((e: Event) => void) | undefined;
            readonly onKeydown?: ((e: Event) => void) | undefined;
            readonly onClick?: ((e: Event) => void) | undefined;
            readonly onContextmenu?: ((e: Event) => void) | undefined;
            readonly onMouseenter?: ((e: Event) => void) | undefined;
            readonly onMouseleave?: ((e: Event) => void) | undefined;
            readonly className?: (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined;
            readonly virtualRef?: import('../../popper').Measurable | undefined;
            readonly fallbackPlacements?: Placement[] | undefined;
            readonly popperClass?: (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined;
            readonly popperStyle?: import('vue').StyleValue;
            readonly referenceEl?: HTMLElement | undefined;
            readonly triggerTargetEl?: HTMLElement | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "content" | "offset" | "visible" | "open" | "disabled" | "showAfter" | "hideAfter" | "autoClose" | "placement" | "strategy" | "effect" | "role" | "trigger" | "arrowOffset" | "virtualTriggering" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "pure" | "triggerKeys" | "teleported" | "rawContent" | "persistent" | "onUpdate:visible" | "showArrow">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            disabled: BooleanConstructor;
            trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
            triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
            virtualRef: {
                readonly type: PropType<import('../../popper').Measurable>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            virtualTriggering: BooleanConstructor;
            onMouseenter: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onMouseleave: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onClick: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onKeydown: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onFocus: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onBlur: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onContextmenu: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            id: StringConstructor;
            open: BooleanConstructor;
            ariaLabel: StringConstructor;
            appendTo: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            content: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            rawContent: BooleanConstructor;
            persistent: BooleanConstructor;
            visible: import('../../../utils').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown, null, boolean>;
            transition: StringConstructor;
            teleported: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            style: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            className: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
            enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            pure: BooleanConstructor;
            focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperClass: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            popperStyle: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            referenceEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            triggerTargetEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zIndex: NumberConstructor;
            boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | (((new (...args: any[]) => Placement[]) | (() => Placement[])) | null)[], unknown, unknown, undefined, boolean>;
            gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
            placement: import('../../../utils').EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
            popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
            strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
            showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            "onUpdate:visible": any;
            role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, {
            popperRef: import('vue').Ref<({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }> & Omit<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & Readonly<{}>, {
                    triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    contentRef: import('vue').Ref<HTMLElement | undefined>;
                    popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                    referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    role: import('vue').ComputedRef<string>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined, ({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }> & Omit<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & Readonly<{}>, {
                    triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    contentRef: import('vue').Ref<HTMLElement | undefined>;
                    popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                    referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    role: import('vue').ComputedRef<string>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined>;
            contentRef: import('vue').Ref<any, any>;
            isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
            updatePopper: () => void;
            onOpen: (event?: Event) => void;
            onClose: (event?: Event) => void;
            hide: (event?: Event) => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            content: string;
            offset: number;
            visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            open: boolean;
            disabled: boolean;
            showAfter: number;
            hideAfter: number;
            autoClose: number;
            placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
            strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            effect: string;
            role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
            arrowOffset: number;
            virtualTriggering: boolean;
            boundariesPadding: number;
            fallbackPlacements: Placement[];
            gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import('../../popper').Options>;
            enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            pure: boolean;
            triggerKeys: string[];
            teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            rawContent: boolean;
            persistent: boolean;
            "onUpdate:visible": any;
            showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        content: string;
        offset: number;
        visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
        open: boolean;
        disabled: boolean;
        showAfter: number;
        hideAfter: number;
        autoClose: number;
        placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
        strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
        effect: string;
        role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
        arrowOffset: number;
        virtualTriggering: boolean;
        boundariesPadding: number;
        fallbackPlacements: Placement[];
        gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        popperOptions: Partial<import('../../popper').Options>;
        enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        pure: boolean;
        triggerKeys: string[];
        teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        rawContent: boolean;
        persistent: boolean;
        "onUpdate:visible": any;
        showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    }> & Omit<Readonly<import('vue').ExtractPropTypes<{
        showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
        disabled: BooleanConstructor;
        trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
        triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
        virtualRef: {
            readonly type: PropType<import('../../popper').Measurable>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        virtualTriggering: BooleanConstructor;
        onMouseenter: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onMouseleave: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onClick: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onKeydown: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onFocus: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onBlur: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onContextmenu: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        id: StringConstructor;
        open: BooleanConstructor;
        ariaLabel: StringConstructor;
        appendTo: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        content: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        rawContent: BooleanConstructor;
        persistent: BooleanConstructor;
        visible: import('../../../utils').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown, null, boolean>;
        transition: StringConstructor;
        teleported: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        style: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        className: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
        enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        pure: BooleanConstructor;
        focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        popperClass: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        popperStyle: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        referenceEl: {
            readonly type: PropType<HTMLElement>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        triggerTargetEl: {
            readonly type: PropType<HTMLElement>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        zIndex: NumberConstructor;
        boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | (((new (...args: any[]) => Placement[]) | (() => Placement[])) | null)[], unknown, unknown, undefined, boolean>;
        gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
        placement: import('../../../utils').EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
        popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
        strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
        showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
        autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        "onUpdate:visible": any;
        role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
    }>> & Readonly<{}>, "hide" | "onClose" | "contentRef" | "updatePopper" | "onOpen" | "popperRef" | "isFocusInsideContent" | ("content" | "offset" | "visible" | "open" | "disabled" | "showAfter" | "hideAfter" | "autoClose" | "placement" | "strategy" | "effect" | "role" | "trigger" | "arrowOffset" | "virtualTriggering" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "pure" | "triggerKeys" | "teleported" | "rawContent" | "persistent" | "onUpdate:visible" | "showArrow")> & import('vue').ShallowUnwrapRef<{
        popperRef: import('vue').Ref<({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, {
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
            triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            contentRef: import('vue').Ref<HTMLElement | undefined>;
            popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
            referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            role: import('vue').ComputedRef<string>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | undefined, ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, {
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
            triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            contentRef: import('vue').Ref<HTMLElement | undefined>;
            popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
            referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            role: import('vue').ComputedRef<string>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | undefined>;
        contentRef: import('vue').Ref<any, any>;
        isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
        updatePopper: () => void;
        onOpen: (event?: Event) => void;
        onClose: (event?: Event) => void;
        hide: (event?: Event) => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
            content?(_: {}): any;
        };
    }) | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    store: {
        type: PropType<Store<unknown>>;
    };
    column: {
        type: PropType<TableColumnCtx<unknown>>;
    };
    upDataColumn: {
        type: FunctionConstructor;
    };
    appendTo: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {
    placement: Placement;
}, {}, {
    GpCheckbox: import('../../../utils').SFCWithInstall<{
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
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
            "onUpdate:modelValue"?: ((val: import('../../checkbox').CheckboxValueType) => any) | undefined;
            onChange?: ((val: import('../../checkbox').CheckboxValueType) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (val: import('../../checkbox').CheckboxValueType) => void;
            change: (val: import('../../checkbox').CheckboxValueType) => void;
        }, import('vue').PublicProps, {
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
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
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
            "onUpdate:modelValue"?: ((val: import('../../checkbox').CheckboxValueType) => any) | undefined;
            onChange?: ((val: import('../../checkbox').CheckboxValueType) => any) | undefined;
        }>, {}, {}, {}, {}, {
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
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
        "onUpdate:modelValue"?: ((val: import('../../checkbox').CheckboxValueType) => any) | undefined;
        onChange?: ((val: import('../../checkbox').CheckboxValueType) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (val: import('../../checkbox').CheckboxValueType) => void;
        change: (val: import('../../checkbox').CheckboxValueType) => void;
    }, string, {
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
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    })> & {
        CheckboxButton: typeof import('../../checkbox/src/checkbox-button.vue').default;
        CheckboxGroup: typeof import('../../checkbox/src/checkbox-group.vue').default;
    };
    GpCheckboxGroup: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly modelValue: import('../../../utils').EpPropFinalized<(new (...args: any[]) => import('../../checkbox').CheckboxGroupValueType) | (() => import('../../checkbox').CheckboxGroupValueType) | (((new (...args: any[]) => import('../../checkbox').CheckboxGroupValueType) | (() => import('../../checkbox').CheckboxGroupValueType)) | null)[], unknown, unknown, () => never[], boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: any;
            readonly fill: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & Readonly<{
            "onUpdate:modelValue"?: ((val: import('../../checkbox').CheckboxGroupValueType) => any) | undefined;
            onChange?: ((val: import('../../checkbox').CheckboxValueType[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (val: import('../../checkbox').CheckboxGroupValueType) => void;
            change: (val: import('../../checkbox').CheckboxValueType[]) => void;
        }, import('vue').PublicProps, {
            readonly size: any;
            readonly disabled: boolean;
            readonly modelValue: import('../../checkbox').CheckboxGroupValueType;
            readonly tag: string;
            readonly validateEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly modelValue: import('../../../utils').EpPropFinalized<(new (...args: any[]) => import('../../checkbox').CheckboxGroupValueType) | (() => import('../../checkbox').CheckboxGroupValueType) | (((new (...args: any[]) => import('../../checkbox').CheckboxGroupValueType) | (() => import('../../checkbox').CheckboxGroupValueType)) | null)[], unknown, unknown, () => never[], boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: any;
            readonly fill: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & Readonly<{
            "onUpdate:modelValue"?: ((val: import('../../checkbox').CheckboxGroupValueType) => any) | undefined;
            onChange?: ((val: import('../../checkbox').CheckboxValueType[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            readonly size: any;
            readonly disabled: boolean;
            readonly modelValue: import('../../checkbox').CheckboxGroupValueType;
            readonly tag: string;
            readonly validateEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        readonly ariaLabel: StringConstructor;
        readonly modelValue: import('../../../utils').EpPropFinalized<(new (...args: any[]) => import('../../checkbox').CheckboxGroupValueType) | (() => import('../../checkbox').CheckboxGroupValueType) | (((new (...args: any[]) => import('../../checkbox').CheckboxGroupValueType) | (() => import('../../checkbox').CheckboxGroupValueType)) | null)[], unknown, unknown, () => never[], boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: any;
        readonly fill: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((val: import('../../checkbox').CheckboxGroupValueType) => any) | undefined;
        onChange?: ((val: import('../../checkbox').CheckboxValueType[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (val: import('../../checkbox').CheckboxGroupValueType) => void;
        change: (val: import('../../checkbox').CheckboxValueType[]) => void;
    }, string, {
        readonly size: any;
        readonly disabled: boolean;
        readonly modelValue: import('../../checkbox').CheckboxGroupValueType;
        readonly tag: string;
        readonly validateEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    GpScrollbar: import('../../../utils').SFCWithInstall<{
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            readonly height: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown, "", boolean>;
            readonly wrapClass: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly tabindex: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & Readonly<{
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        }>, {
            wrapRef: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
            update: () => void;
            scrollTo: {
                (xCord: number, yCord?: number): void;
                (options: ScrollToOptions): void;
            };
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            handleScroll: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            scroll: (args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
        }, import('vue').PublicProps, {
            readonly height: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly tabindex: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly native: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import('vue').StyleValue;
            readonly wrapClass: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly noresize: boolean;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            readonly height: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown, "", boolean>;
            readonly wrapClass: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly tabindex: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & Readonly<{
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        }>, {
            wrapRef: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
            update: () => void;
            scrollTo: {
                (xCord: number, yCord?: number): void;
                (options: ScrollToOptions): void;
            };
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            handleScroll: () => void;
        }, {}, {}, {}, {
            readonly height: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly maxHeight: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly tag: string;
            readonly tabindex: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly minSize: number;
            readonly native: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import('vue').StyleValue;
            readonly wrapClass: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly noresize: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        readonly ariaLabel: StringConstructor;
        readonly ariaOrientation: {
            readonly type: PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        readonly height: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly maxHeight: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
        readonly native: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly wrapStyle: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown, "", boolean>;
        readonly wrapClass: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
        readonly viewClass: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
        readonly viewStyle: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
        readonly noresize: BooleanConstructor;
        readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly always: BooleanConstructor;
        readonly minSize: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
        readonly tabindex: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
        readonly id: StringConstructor;
        readonly role: StringConstructor;
    }>> & Readonly<{
        onScroll?: ((args_0: {
            scrollTop: number;
            scrollLeft: number;
        }) => any) | undefined;
    }>, {
        wrapRef: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        update: () => void;
        scrollTo: {
            (xCord: number, yCord?: number): void;
            (options: ScrollToOptions): void;
        };
        setScrollTop: (value: number) => void;
        setScrollLeft: (value: number) => void;
        handleScroll: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        scroll: (args_0: {
            scrollTop: number;
            scrollLeft: number;
        }) => void;
    }, string, {
        readonly height: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly maxHeight: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly always: boolean;
        readonly tag: string;
        readonly tabindex: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly minSize: number;
        readonly native: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly wrapStyle: import('vue').StyleValue;
        readonly wrapClass: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewClass: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
        readonly viewStyle: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
        readonly noresize: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    })>;
    GpTooltip: import('../../../utils').SFCWithInstall<{
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            disabled: BooleanConstructor;
            trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
            triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
            virtualRef: {
                readonly type: PropType<import('../../popper').Measurable>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            virtualTriggering: BooleanConstructor;
            onMouseenter: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onMouseleave: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onClick: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onKeydown: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onFocus: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onBlur: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onContextmenu: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            id: StringConstructor;
            open: BooleanConstructor;
            ariaLabel: StringConstructor;
            appendTo: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            content: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            rawContent: BooleanConstructor;
            persistent: BooleanConstructor;
            visible: import('../../../utils').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown, null, boolean>;
            transition: StringConstructor;
            teleported: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            style: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            className: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
            enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            pure: BooleanConstructor;
            focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperClass: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            popperStyle: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            referenceEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            triggerTargetEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zIndex: NumberConstructor;
            boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | (((new (...args: any[]) => Placement[]) | (() => Placement[])) | null)[], unknown, unknown, undefined, boolean>;
            gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
            placement: import('../../../utils').EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
            popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
            strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
            showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            "onUpdate:visible": any;
            role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, {
            popperRef: import('vue').Ref<({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }> & Omit<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & Readonly<{}>, {
                    triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    contentRef: import('vue').Ref<HTMLElement | undefined>;
                    popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                    referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    role: import('vue').ComputedRef<string>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined, ({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }> & Omit<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & Readonly<{}>, {
                    triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    contentRef: import('vue').Ref<HTMLElement | undefined>;
                    popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                    referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    role: import('vue').ComputedRef<string>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined>;
            contentRef: import('vue').Ref<any, any>;
            isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
            updatePopper: () => void;
            onOpen: (event?: Event) => void;
            onClose: (event?: Event) => void;
            hide: (event?: Event) => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            content: string;
            offset: number;
            visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            open: boolean;
            disabled: boolean;
            showAfter: number;
            hideAfter: number;
            autoClose: number;
            placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
            strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            effect: string;
            role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
            arrowOffset: number;
            virtualTriggering: boolean;
            boundariesPadding: number;
            fallbackPlacements: Placement[];
            gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import('../../popper').Options>;
            enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            pure: boolean;
            triggerKeys: string[];
            teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            rawContent: boolean;
            persistent: boolean;
            "onUpdate:visible": any;
            showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            disabled: BooleanConstructor;
            trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
            triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
            virtualRef: {
                readonly type: PropType<import('../../popper').Measurable>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            virtualTriggering: BooleanConstructor;
            onMouseenter: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onMouseleave: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onClick: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onKeydown: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onFocus: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onBlur: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            onContextmenu: {
                readonly type: PropType<(e: Event) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            id: StringConstructor;
            open: BooleanConstructor;
            ariaLabel: StringConstructor;
            appendTo: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            content: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            rawContent: BooleanConstructor;
            persistent: BooleanConstructor;
            visible: import('../../../utils').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown, null, boolean>;
            transition: StringConstructor;
            teleported: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            style: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            className: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
            enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            pure: BooleanConstructor;
            focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperClass: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            popperStyle: {
                readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            referenceEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            triggerTargetEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
            stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zIndex: NumberConstructor;
            boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | (((new (...args: any[]) => Placement[]) | (() => Placement[])) | null)[], unknown, unknown, undefined, boolean>;
            gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
            placement: import('../../../utils').EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
            popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
            strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
            showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            "onUpdate:visible": any;
            role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, {
            popperRef: import('vue').Ref<({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }> & Omit<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & Readonly<{}>, {
                    triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    contentRef: import('vue').Ref<HTMLElement | undefined>;
                    popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                    referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    role: import('vue').ComputedRef<string>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined, ({
                $: import('vue').ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }> & Omit<{
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import('vue').Slot<any> | undefined;
                }>;
                $root: import('vue').ComponentPublicInstance | null;
                $parent: import('vue').ComponentPublicInstance | null;
                $host: Element | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
                }>> & Readonly<{}>, {
                    triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    contentRef: import('vue').Ref<HTMLElement | undefined>;
                    popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                    referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                    role: import('vue').ComputedRef<string>;
                }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                    readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
                }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                    beforeCreate?: (() => void) | (() => void)[];
                    created?: (() => void) | (() => void)[];
                    beforeMount?: (() => void) | (() => void)[];
                    mounted?: (() => void) | (() => void)[];
                    beforeUpdate?: (() => void) | (() => void)[];
                    updated?: (() => void) | (() => void)[];
                    activated?: (() => void) | (() => void)[];
                    deactivated?: (() => void) | (() => void)[];
                    beforeDestroy?: (() => void) | (() => void)[];
                    beforeUnmount?: (() => void) | (() => void)[];
                    destroyed?: (() => void) | (() => void)[];
                    unmounted?: (() => void) | (() => void)[];
                    renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                    errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
                };
                $forceUpdate: () => void;
                $nextTick: typeof import('vue').nextTick;
                $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
            } & Readonly<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }> & {} & import('vue').ComponentCustomProperties & {} & {
                $slots: {
                    default?(_: {}): any;
                };
            }) | undefined>;
            contentRef: import('vue').Ref<any, any>;
            isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
            updatePopper: () => void;
            onOpen: (event?: Event) => void;
            onClose: (event?: Event) => void;
            hide: (event?: Event) => void;
        }, {}, {}, {}, {
            content: string;
            offset: number;
            visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            open: boolean;
            disabled: boolean;
            showAfter: number;
            hideAfter: number;
            autoClose: number;
            placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
            strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            effect: string;
            role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
            arrowOffset: number;
            virtualTriggering: boolean;
            boundariesPadding: number;
            fallbackPlacements: Placement[];
            gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import('../../popper').Options>;
            enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            pure: boolean;
            triggerKeys: string[];
            teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            rawContent: boolean;
            persistent: boolean;
            "onUpdate:visible": any;
            showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
        disabled: BooleanConstructor;
        trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
        triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
        virtualRef: {
            readonly type: PropType<import('../../popper').Measurable>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        virtualTriggering: BooleanConstructor;
        onMouseenter: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onMouseleave: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onClick: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onKeydown: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onFocus: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onBlur: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        onContextmenu: {
            readonly type: PropType<(e: Event) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        id: StringConstructor;
        open: BooleanConstructor;
        ariaLabel: StringConstructor;
        appendTo: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        content: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        rawContent: BooleanConstructor;
        persistent: BooleanConstructor;
        visible: import('../../../utils').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown, null, boolean>;
        transition: StringConstructor;
        teleported: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        style: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        className: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
        enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        pure: BooleanConstructor;
        focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        popperClass: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (((new (...args: any[]) => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[])) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        popperStyle: {
            readonly type: PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        referenceEl: {
            readonly type: PropType<HTMLElement>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        triggerTargetEl: {
            readonly type: PropType<HTMLElement>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __gpPropKey: true;
        };
        stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        zIndex: NumberConstructor;
        boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Placement[]) | (() => Placement[]) | (((new (...args: any[]) => Placement[]) | (() => Placement[])) | null)[], unknown, unknown, undefined, boolean>;
        gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
        placement: import('../../../utils').EpPropFinalized<StringConstructor, Placement, unknown, "bottom", boolean>;
        popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
        strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
        showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
        autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        "onUpdate:visible": any;
        role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
    }>> & Readonly<{}>, {
        popperRef: import('vue').Ref<({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, {
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
            triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            contentRef: import('vue').Ref<HTMLElement | undefined>;
            popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
            referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            role: import('vue').ComputedRef<string>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | undefined, ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }> & Omit<{
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "role">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
            }>> & Readonly<{}>, {
                triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                contentRef: import('vue').Ref<HTMLElement | undefined>;
                popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
                referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
                role: import('vue').ComputedRef<string>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            readonly role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
        }>> & Readonly<{}>, "role" | "triggerRef" | "contentRef" | "popperInstanceRef" | "referenceRef"> & import('vue').ShallowUnwrapRef<{
            triggerRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            contentRef: import('vue').Ref<HTMLElement | undefined>;
            popperInstanceRef: import('vue').Ref<import('@popperjs/core').Instance | undefined>;
            referenceRef: import('vue').Ref<import('../../popper').Measurable | undefined>;
            role: import('vue').ComputedRef<string>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | undefined>;
        contentRef: import('vue').Ref<any, any>;
        isFocusInsideContent: (event?: FocusEvent) => boolean | undefined;
        updatePopper: () => void;
        onOpen: (event?: Event) => void;
        onClose: (event?: Event) => void;
        hide: (event?: Event) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        content: string;
        offset: number;
        visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
        open: boolean;
        disabled: boolean;
        showAfter: number;
        hideAfter: number;
        autoClose: number;
        placement: import('../../../utils').GpPropMergeType<StringConstructor, Placement, unknown>;
        strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
        effect: string;
        role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
        trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('../../tooltip').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('../../tooltip').TooltipTriggerType>)) | null)[], unknown, unknown>;
        arrowOffset: number;
        virtualTriggering: boolean;
        boundariesPadding: number;
        fallbackPlacements: Placement[];
        gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        popperOptions: Partial<import('../../popper').Options>;
        enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        pure: boolean;
        triggerKeys: string[];
        teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        rawContent: boolean;
        persistent: boolean;
        "onUpdate:visible": any;
        showArrow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            content?(_: {}): any;
        };
    })>;
    ArrowDown: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    ArrowUp: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {
    ClickOutside: import('vue').ObjectDirective<any, any, string, string>;
}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
