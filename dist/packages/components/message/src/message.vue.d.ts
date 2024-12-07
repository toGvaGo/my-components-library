declare function close(): void;
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        messageRef: HTMLDivElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    id: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    customClass: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    center: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    dangerouslyUseHTMLString: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    duration: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
    icon: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown, undefined, boolean>;
    message: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (() => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (((new (...args: any[]) => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (() => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode))) | null)[], unknown, unknown, "", boolean>;
    onClose: import('../../../utils').EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
        (): () => void;
        new (): any;
        readonly prototype: any;
    } | (((new (...args: any[]) => () => void) | (() => () => void) | {
        (): () => void;
        new (): any;
        readonly prototype: any;
    }) | null)[], unknown, unknown, undefined, boolean>;
    showClose: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    type: import('../../../utils').EpPropFinalized<StringConstructor, "error" | "success" | "warning" | "info", unknown, "info", boolean>;
    plain: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
    zIndex: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    grouping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    repeatNum: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
}>, {
    visible: import('vue').Ref<boolean, boolean>;
    bottom: import('vue').ComputedRef<number>;
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    destroy: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    id: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    customClass: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    center: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    dangerouslyUseHTMLString: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    duration: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
    icon: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown, undefined, boolean>;
    message: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (() => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (((new (...args: any[]) => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (() => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode))) | null)[], unknown, unknown, "", boolean>;
    onClose: import('../../../utils').EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
        (): () => void;
        new (): any;
        readonly prototype: any;
    } | (((new (...args: any[]) => () => void) | (() => () => void) | {
        (): () => void;
        new (): any;
        readonly prototype: any;
    }) | null)[], unknown, unknown, undefined, boolean>;
    showClose: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    type: import('../../../utils').EpPropFinalized<StringConstructor, "error" | "success" | "warning" | "info", unknown, "info", boolean>;
    plain: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
    zIndex: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    grouping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    repeatNum: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
}>> & Readonly<{
    onDestroy?: (() => any) | undefined;
}>, {
    type: import('../../../utils').GpPropMergeType<StringConstructor, "error" | "success" | "warning" | "info", unknown>;
    zIndex: number;
    offset: number;
    center: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    icon: import('../../../utils').GpPropMergeType<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown>;
    id: string;
    customClass: string;
    dangerouslyUseHTMLString: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    duration: number;
    message: import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (() => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (((new (...args: any[]) => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode)) | (() => string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => import('vue').VNode))) | null)[], unknown, unknown>;
    onClose: () => void;
    showClose: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    plain: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    grouping: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
    repeatNum: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
