declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        _ref: unknown;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly size: any;
    readonly disabled: BooleanConstructor;
    readonly type: import('../../../utils').EpPropFinalized<StringConstructor, "" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
    readonly icon: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly nativeType: import('../../../utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    readonly loading: BooleanConstructor;
    readonly loadingIcon: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown, () => "Loading", boolean>;
    readonly plain: BooleanConstructor;
    readonly text: BooleanConstructor;
    readonly link: BooleanConstructor;
    readonly bg: BooleanConstructor;
    readonly autofocus: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly color: StringConstructor;
    readonly dark: BooleanConstructor;
    readonly autoInsertSpace: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly tag: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown, "button", boolean>;
}>, {
    ref: import('vue').Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
    /** button type */
    type: import('vue').ComputedRef<"" | "default" | "success" | "warning" | "info" | "primary" | "danger">;
    /** button is disabled or not */
    disabled: import('vue').ComputedRef<boolean>;
    /** button type */
    size: import('vue').ComputedRef<"" | "small" | "default" | "large">;
    shouldAddSpace: import('vue').ComputedRef<boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (evt: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly size: any;
    readonly disabled: BooleanConstructor;
    readonly type: import('../../../utils').EpPropFinalized<StringConstructor, "" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
    readonly icon: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly nativeType: import('../../../utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    readonly loading: BooleanConstructor;
    readonly loadingIcon: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown, () => "Loading", boolean>;
    readonly plain: BooleanConstructor;
    readonly text: BooleanConstructor;
    readonly link: BooleanConstructor;
    readonly bg: BooleanConstructor;
    readonly autofocus: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly color: StringConstructor;
    readonly dark: BooleanConstructor;
    readonly autoInsertSpace: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly tag: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown, "button", boolean>;
}>> & Readonly<{
    onClick?: ((evt: MouseEvent) => any) | undefined;
}>, {
    readonly link: boolean;
    readonly type: import('../../../utils').GpPropMergeType<StringConstructor, "" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    readonly size: any;
    readonly round: boolean;
    readonly dark: boolean;
    readonly text: boolean;
    readonly circle: boolean;
    readonly disabled: boolean;
    readonly tag: import('../../../utils').GpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown>;
    readonly plain: boolean;
    readonly nativeType: import('../../../utils').GpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
    readonly loadingIcon: import('../../../utils').GpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown>;
    readonly autoInsertSpace: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly loading: boolean;
    readonly bg: boolean;
    readonly autofocus: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
