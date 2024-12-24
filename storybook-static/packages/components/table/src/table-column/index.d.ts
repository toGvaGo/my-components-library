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
    showOverflowTooltip: boolean | Partial<Pick<import('../../..').GpTooltipProps, "offset" | "transition" | "showAfter" | "hideAfter" | "placement" | "effect" | "appendTo" | "popperOptions" | "enterable" | "popperClass" | "showArrow">> | undefined;
    sortOrders: ("ascending" | "descending" | null)[];
    sortable: string | boolean;
    resizable: boolean;
    reserveSelection: boolean;
    filterMultiple: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
