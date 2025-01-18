import { TableColumnCtx } from './defaults';
import { DefaultRow } from '../table/defaults';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: StringConstructor;
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    renderHeader: import('vue').PropType<TableColumnCtx<DefaultRow>["renderHeader"]>;
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    sortMethod: import('vue').PropType<TableColumnCtx<DefaultRow>["sortMethod"]>;
    sortBy: import('vue').PropType<TableColumnCtx<DefaultRow>["sortBy"]>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnKey: StringConstructor;
    align: StringConstructor;
    headerAlign: StringConstructor;
    showOverflowTooltip: {
        type: import('vue').PropType<TableColumnCtx<DefaultRow>["showOverflowTooltip"]>;
        default: undefined;
    };
    fixed: (BooleanConstructor | StringConstructor)[];
    formatter: import('vue').PropType<TableColumnCtx<DefaultRow>["formatter"]>;
    selectable: import('vue').PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    reserveSelection: BooleanConstructor;
    filterMethod: import('vue').PropType<TableColumnCtx<DefaultRow>["filterMethod"]>;
    filteredValue: import('vue').PropType<TableColumnCtx<DefaultRow>["filteredValue"]>;
    filters: import('vue').PropType<TableColumnCtx<DefaultRow>["filters"]>;
    filterPlacement: StringConstructor;
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterClassName: StringConstructor;
    index: import('vue').PropType<TableColumnCtx<DefaultRow>["index"]>;
    sortOrders: {
        type: import('vue').PropType<TableColumnCtx<DefaultRow>["sortOrders"]>;
        default: () => (string | null)[];
        validator: (val: TableColumnCtx<unknown>["sortOrders"]) => boolean;
    };
}>, void, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: StringConstructor;
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    renderHeader: import('vue').PropType<TableColumnCtx<DefaultRow>["renderHeader"]>;
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    sortMethod: import('vue').PropType<TableColumnCtx<DefaultRow>["sortMethod"]>;
    sortBy: import('vue').PropType<TableColumnCtx<DefaultRow>["sortBy"]>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnKey: StringConstructor;
    align: StringConstructor;
    headerAlign: StringConstructor;
    showOverflowTooltip: {
        type: import('vue').PropType<TableColumnCtx<DefaultRow>["showOverflowTooltip"]>;
        default: undefined;
    };
    fixed: (BooleanConstructor | StringConstructor)[];
    formatter: import('vue').PropType<TableColumnCtx<DefaultRow>["formatter"]>;
    selectable: import('vue').PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    reserveSelection: BooleanConstructor;
    filterMethod: import('vue').PropType<TableColumnCtx<DefaultRow>["filterMethod"]>;
    filteredValue: import('vue').PropType<TableColumnCtx<DefaultRow>["filteredValue"]>;
    filters: import('vue').PropType<TableColumnCtx<DefaultRow>["filters"]>;
    filterPlacement: StringConstructor;
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterClassName: StringConstructor;
    index: import('vue').PropType<TableColumnCtx<DefaultRow>["index"]>;
    sortOrders: {
        type: import('vue').PropType<TableColumnCtx<DefaultRow>["sortOrders"]>;
        default: () => (string | null)[];
        validator: (val: TableColumnCtx<unknown>["sortOrders"]) => boolean;
    };
}>> & Readonly<{}>, {
    type: string;
    minWidth: string | number;
    width: string | number;
    showOverflowTooltip: boolean | Partial<Pick<ElTooltipProps, "offset" | "transition" | "showAfter" | "hideAfter" | "placement" | "effect" | "appendTo" | "popperOptions" | "enterable" | "popperClass" | "showArrow">> | undefined;
    sortOrders: ("ascending" | "descending" | null)[];
    sortable: string | boolean;
    resizable: boolean;
    reserveSelection: boolean;
    filterMultiple: boolean;
}, {}, {
    GpCheckbox: import('../../../../utils').SFCWithInstall<{
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
            "onUpdate:modelValue"?: ((val: import('../../../checkbox').CheckboxValueType) => any) | undefined;
            onChange?: ((val: import('../../../checkbox').CheckboxValueType) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (val: import('../../../checkbox').CheckboxValueType) => void;
            change: (val: import('../../../checkbox').CheckboxValueType) => void;
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
            "onUpdate:modelValue"?: ((val: import('../../../checkbox').CheckboxValueType) => any) | undefined;
            onChange?: ((val: import('../../../checkbox').CheckboxValueType) => any) | undefined;
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
        "onUpdate:modelValue"?: ((val: import('../../../checkbox').CheckboxValueType) => any) | undefined;
        onChange?: ((val: import('../../../checkbox').CheckboxValueType) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (val: import('../../../checkbox').CheckboxValueType) => void;
        change: (val: import('../../../checkbox').CheckboxValueType) => void;
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
        CheckboxButton: typeof import('../../../checkbox/src/checkbox-button.vue').default;
        CheckboxGroup: typeof import('../../../checkbox/src/checkbox-group.vue').default;
    };
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
