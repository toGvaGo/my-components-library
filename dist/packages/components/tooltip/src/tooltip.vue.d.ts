declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        popperRef: ({
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
        }) | null;
        contentRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly content: string;
                readonly offset: number;
                readonly visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
                readonly disabled: boolean;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly autoClose: number;
                readonly placement: import('../../../utils').GpPropMergeType<StringConstructor, import('../../popper').Placement, unknown>;
                readonly strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                readonly effect: string;
                readonly virtualTriggering: boolean;
                readonly boundariesPadding: number;
                readonly fallbackPlacements: import('../../popper').Placement[];
                readonly gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly popperOptions: Partial<import('../../popper').Options>;
                readonly enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly pure: boolean;
                readonly teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly rawContent: boolean;
                readonly persistent: boolean;
            }> & Omit<{
                readonly content: string;
                readonly offset: number;
                readonly visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
                readonly disabled: boolean;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly autoClose: number;
                readonly placement: import('../../../utils').GpPropMergeType<StringConstructor, import('../../popper').Placement, unknown>;
                readonly strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                readonly effect: string;
                readonly virtualTriggering: boolean;
                readonly boundariesPadding: number;
                readonly gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly popperOptions: Partial<import('../../popper').Options>;
                readonly enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly pure: boolean;
                readonly teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly rawContent: boolean;
                readonly persistent: boolean;
                readonly zIndex?: number | undefined;
                readonly transition?: string | undefined;
                readonly style?: import('vue').StyleValue;
                readonly ariaLabel?: string | undefined;
                readonly id?: string | undefined;
                readonly appendTo?: import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown> | undefined;
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
                readonly fallbackPlacements?: import('../../popper').Placement[] | undefined;
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
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "content" | "offset" | "visible" | "disabled" | "showAfter" | "hideAfter" | "autoClose" | "placement" | "strategy" | "effect" | "virtualTriggering" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "pure" | "teleported" | "rawContent" | "persistent">;
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
            }>> & Readonly<{}>, {
                contentRef: import('vue').Ref<any, any>;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                readonly content: string;
                readonly offset: number;
                readonly visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
                readonly disabled: boolean;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly autoClose: number;
                readonly placement: import('../../../utils').GpPropMergeType<StringConstructor, import('../../popper').Placement, unknown>;
                readonly strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
                readonly effect: string;
                readonly virtualTriggering: boolean;
                readonly boundariesPadding: number;
                readonly fallbackPlacements: import('../../popper').Placement[];
                readonly gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly popperOptions: Partial<import('../../popper').Options>;
                readonly enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly pure: boolean;
                readonly teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly rawContent: boolean;
                readonly persistent: boolean;
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
            readonly content: string;
            readonly offset: number;
            readonly visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
            readonly disabled: boolean;
            readonly showAfter: number;
            readonly hideAfter: number;
            readonly autoClose: number;
            readonly placement: import('../../../utils').GpPropMergeType<StringConstructor, import('../../popper').Placement, unknown>;
            readonly strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
            readonly effect: string;
            readonly virtualTriggering: boolean;
            readonly boundariesPadding: number;
            readonly fallbackPlacements: import('../../popper').Placement[];
            readonly gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly popperOptions: Partial<import('../../popper').Options>;
            readonly enterable: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly focusOnShow: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly trapping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly stopPopperMouseEvent: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly pure: boolean;
            readonly teleported: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly rawContent: boolean;
            readonly persistent: boolean;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
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
        }>> & Readonly<{}>, "contentRef" | ("content" | "offset" | "visible" | "disabled" | "showAfter" | "hideAfter" | "autoClose" | "placement" | "strategy" | "effect" | "virtualTriggering" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "pure" | "teleported" | "rawContent" | "persistent")> & import('vue').ShallowUnwrapRef<{
            contentRef: import('vue').Ref<any, any>;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    disabled: BooleanConstructor;
    trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
    triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
    virtualRef: {
        readonly type: import('vue').PropType<import('../../popper').Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    virtualTriggering: BooleanConstructor;
    onMouseenter: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onMouseleave: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onClick: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onKeydown: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onFocus: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onBlur: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onContextmenu: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    id: StringConstructor;
    open: BooleanConstructor;
    ariaLabel: StringConstructor;
    appendTo: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
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
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    className: {
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
    effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
    enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    pure: BooleanConstructor;
    focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    popperClass: {
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
    popperStyle: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    referenceEl: {
        readonly type: import('vue').PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    triggerTargetEl: {
        readonly type: import('vue').PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zIndex: NumberConstructor;
    boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => import('../../popper').Placement[]) | (() => import('../../popper').Placement[]) | (((new (...args: any[]) => import('../../popper').Placement[]) | (() => import('../../popper').Placement[])) | null)[], unknown, unknown, undefined, boolean>;
    gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    placement: import('../../../utils').EpPropFinalized<StringConstructor, import('../../popper').Placement, unknown, "bottom", boolean>;
    popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
    strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
    showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    "onUpdate:visible": any;
    role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
}>, {
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
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    showArrow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
    disabled: BooleanConstructor;
    trigger: import('../../../utils').EpPropFinalized<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>)) | null)[], unknown, unknown, "hover", boolean>;
    triggerKeys: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | (((new (...args: any[]) => string[]) | (() => string[])) | null)[], unknown, unknown, () => string[], boolean>;
    virtualRef: {
        readonly type: import('vue').PropType<import('../../popper').Measurable>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    virtualTriggering: BooleanConstructor;
    onMouseenter: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onMouseleave: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onClick: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onKeydown: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onFocus: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onBlur: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    onContextmenu: {
        readonly type: import('vue').PropType<(e: Event) => void>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    id: StringConstructor;
    open: BooleanConstructor;
    ariaLabel: StringConstructor;
    appendTo: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
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
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    className: {
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
    effect: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string) | (() => string) | (((new (...args: any[]) => string) | (() => string)) | null)[], unknown, unknown, "dark", boolean>;
    enterable: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    pure: BooleanConstructor;
    focusOnShow: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    trapping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    popperClass: {
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
    popperStyle: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    referenceEl: {
        readonly type: import('vue').PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    triggerTargetEl: {
        readonly type: import('vue').PropType<HTMLElement>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    stopPopperMouseEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zIndex: NumberConstructor;
    boundariesPadding: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    fallbackPlacements: import('../../../utils').EpPropFinalized<(new (...args: any[]) => import('../../popper').Placement[]) | (() => import('../../popper').Placement[]) | (((new (...args: any[]) => import('../../popper').Placement[]) | (() => import('../../popper').Placement[])) | null)[], unknown, unknown, undefined, boolean>;
    gpuAcceleration: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
    placement: import('../../../utils').EpPropFinalized<StringConstructor, import('../../popper').Placement, unknown, "bottom", boolean>;
    popperOptions: import('../../../utils').EpPropFinalized<(new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>) | (((new (...args: any[]) => Partial<import('../../popper').Options>) | (() => Partial<import('../../popper').Options>)) | null)[], unknown, unknown, () => {}, boolean>;
    strategy: import('../../../utils').EpPropFinalized<StringConstructor, "fixed" | "absolute", unknown, "absolute", boolean>;
    showAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    hideAfter: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    autoClose: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    "onUpdate:visible": any;
    role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
}>> & Readonly<{}>, {
    content: string;
    offset: number;
    visible: import('../../../utils').GpPropMergeType<(new (...args: any[]) => boolean) | (() => boolean | null) | (((new (...args: any[]) => boolean) | (() => boolean | null)) | null)[], unknown, unknown>;
    open: boolean;
    disabled: boolean;
    showAfter: number;
    hideAfter: number;
    autoClose: number;
    placement: import('../../../utils').GpPropMergeType<StringConstructor, import('../../popper').Placement, unknown>;
    strategy: import('../../../utils').GpPropMergeType<StringConstructor, "fixed" | "absolute", unknown>;
    effect: string;
    role: import('../../../utils').GpPropMergeType<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown>;
    trigger: import('../../../utils').GpPropMergeType<(new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>) | (((new (...args: any[]) => "click" | "contextmenu" | "focus" | "hover" | import('./trigger').TooltipTriggerType[]) | (() => import('../../../utils').Arrayable<import('./trigger').TooltipTriggerType>)) | null)[], unknown, unknown>;
    arrowOffset: number;
    virtualTriggering: boolean;
    boundariesPadding: number;
    fallbackPlacements: import('../../popper').Placement[];
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
