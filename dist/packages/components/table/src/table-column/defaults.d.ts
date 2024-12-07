import { ComponentInternalInstance, PropType, Ref, VNode } from 'vue';
import { DefaultRow, Table } from '../table/defaults';
import { TableOverflowTooltipOptions } from '../util';
type CI<T> = {
    column: TableColumnCtx<T>;
    $index: number;
};
type Filters = {
    text: string;
    value: string;
}[];
type FilterMethods<T> = (value: any, row: T, column: TableColumnCtx<T>) => void;
type ValueOf<T> = T[keyof T];
interface TableColumnCtx<T> {
    id: string;
    realWidth: number;
    type: string;
    label: string;
    className: string;
    labelClassName: string;
    property: string;
    prop: string;
    width: string | number;
    minWidth: string | number;
    renderHeader: (data: CI<T>) => VNode;
    sortable: boolean | string;
    sortMethod: (a: T, b: T) => number;
    sortBy: string | ((row: T, index: number) => string) | string[];
    resizable: boolean;
    columnKey: string;
    rawColumnKey: string;
    align: string;
    headerAlign: string;
    showOverflowTooltip?: boolean | TableOverflowTooltipOptions;
    fixed: boolean | string;
    formatter: (row: T, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode | string;
    selectable: (row: T, index: number) => boolean;
    reserveSelection: boolean;
    filterMethod: FilterMethods<T>;
    filteredValue: string[];
    filters: Filters;
    filterPlacement: string;
    filterMultiple: boolean;
    filterClassName: string;
    index: number | ((index: number) => number);
    sortOrders: ('ascending' | 'descending' | null)[];
    renderCell: (data: any) => void;
    colSpan: number;
    rowSpan: number;
    children: TableColumnCtx<T>[];
    level: number;
    filterable: boolean | FilterMethods<T> | Filters;
    order: string;
    isColumnGroup: boolean;
    isSubColumn: boolean;
    columns: TableColumnCtx<T>[];
    getColumnIndex: () => number;
    no: number;
    filterOpened?: boolean;
}
interface TableColumn<T> extends ComponentInternalInstance {
    vnode: {
        vParent: TableColumn<T> | Table<T>;
    } & VNode;
    vParent: TableColumn<T> | Table<T>;
    columnId: string;
    columnConfig: Ref<Partial<TableColumnCtx<T>>>;
}
export type { Filters, FilterMethods, TableColumnCtx, TableColumn, ValueOf };
declare const _default: {
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
    renderHeader: PropType<TableColumnCtx<DefaultRow>["renderHeader"]>;
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    sortMethod: PropType<TableColumnCtx<DefaultRow>["sortMethod"]>;
    sortBy: PropType<TableColumnCtx<DefaultRow>["sortBy"]>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnKey: StringConstructor;
    align: StringConstructor;
    headerAlign: StringConstructor;
    showOverflowTooltip: {
        type: PropType<TableColumnCtx<DefaultRow>["showOverflowTooltip"]>;
        default: undefined;
    };
    fixed: (BooleanConstructor | StringConstructor)[];
    formatter: PropType<TableColumnCtx<DefaultRow>["formatter"]>;
    selectable: PropType<TableColumnCtx<DefaultRow>["selectable"]>;
    reserveSelection: BooleanConstructor;
    filterMethod: PropType<TableColumnCtx<DefaultRow>["filterMethod"]>;
    filteredValue: PropType<TableColumnCtx<DefaultRow>["filteredValue"]>;
    filters: PropType<TableColumnCtx<DefaultRow>["filters"]>;
    filterPlacement: StringConstructor;
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterClassName: StringConstructor;
    index: PropType<TableColumnCtx<DefaultRow>["index"]>;
    sortOrders: {
        type: PropType<TableColumnCtx<DefaultRow>["sortOrders"]>;
        default: () => (string | null)[];
        validator: (val: TableColumnCtx<unknown>["sortOrders"]) => boolean;
    };
};
export default _default;
