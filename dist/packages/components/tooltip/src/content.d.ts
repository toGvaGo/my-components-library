import { default as TooltipContent } from './content.vue';
import { ExtractPropTypes } from 'vue';
export declare const useTooltipContentProps: {
    readonly ariaLabel: StringConstructor;
    readonly appendTo: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly content: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly rawContent: BooleanConstructor;
    readonly persistent: BooleanConstructor;
    readonly visible: import('../../../utils').EpPropFinalized<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown, null, boolean>;
    readonly transition: StringConstructor;
    readonly teleported: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly disabled: BooleanConstructor;
    readonly id: StringConstructor;
    readonly style: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly className: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
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
    readonly effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
    readonly enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly pure: BooleanConstructor;
    readonly focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly popperClass: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
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
    readonly popperStyle: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly referenceEl: {
        readonly type: import('vue').PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly triggerTargetEl: {
        readonly type: import('vue').PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly virtualTriggering: BooleanConstructor;
    readonly zIndex: NumberConstructor;
    readonly boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => import('../../popper').Placement[]) | (() => import('../../popper').Placement[]) | (((new (...args: any[]) => import('../../popper').Placement[]) | (() => import('../../popper').Placement[])) | null)[], unknown, unknown, undefined, boolean>;
    readonly gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    readonly placement: import('../../../utils').EpPropFinalized<StringConstructor, import('../../popper').Placement, unknown, "bottom", boolean>;
    readonly popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
    readonly strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
    readonly showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
};
export type GpTooltipContentProps = ExtractPropTypes<typeof useTooltipContentProps>;
export type TooltipContentInstance = InstanceType<typeof TooltipContent>;
