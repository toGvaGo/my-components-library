import { CSSProperties, StyleValue } from 'vue';
declare function scrollTo(xCord: number, yCord?: number): void;
declare function scrollTo(options: ScrollToOptions): void;
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        scrollbarRef: HTMLDivElement;
        wrapRef: HTMLDivElement;
        resizeRef: unknown;
        barRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            readonly always: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly minSize: {
                readonly type: import('vue').PropType<number>;
                readonly required: true;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
        }>> & Readonly<{}>, {
            handleScroll: (wrap: HTMLDivElement) => void;
            update: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            readonly always: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            readonly always: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly minSize: {
                readonly type: import('vue').PropType<number>;
                readonly required: true;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __gpPropKey: true;
            };
        }>> & Readonly<{}>, {
            handleScroll: (wrap: HTMLDivElement) => void;
            update: () => void;
        }, {}, {}, {}, {
            readonly always: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly ariaLabel: StringConstructor;
    readonly ariaOrientation: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly height: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly maxHeight: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly native: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly wrapStyle: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | false | CSSProperties | StyleValue[]) | (() => StyleValue) | (((new (...args: any[]) => string | false | CSSProperties | StyleValue[]) | (() => StyleValue)) | null)[], unknown, unknown, "", boolean>;
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
}>, {
    wrapRef: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    update: () => void;
    scrollTo: typeof scrollTo;
    setScrollTop: (value: number) => void;
    setScrollLeft: (value: number) => void;
    handleScroll: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    scroll: (args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly ariaLabel: StringConstructor;
    readonly ariaOrientation: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly height: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly maxHeight: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly native: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly wrapStyle: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | false | CSSProperties | StyleValue[]) | (() => StyleValue) | (((new (...args: any[]) => string | false | CSSProperties | StyleValue[]) | (() => StyleValue)) | null)[], unknown, unknown, "", boolean>;
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
    readonly height: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly maxHeight: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly always: boolean;
    readonly tag: string;
    readonly tabindex: import('../../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly minSize: number;
    readonly native: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly wrapStyle: StyleValue;
    readonly wrapClass: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    readonly viewClass: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    readonly viewStyle: import('../../../utils').GpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
    readonly noresize: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
