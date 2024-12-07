import { CSSProperties, ComponentInternalInstance, PropType, Ref, VNode } from 'vue';
import { ComponentSize } from '../../../../constants';
import { Nullable } from '../../../../utils';
import { Store } from '../store';
import { TableColumnCtx } from '../table-column/defaults';
import { default as TableLayout } from '../table-layout';
import { TableOverflowTooltipOptions } from '../util';
export type DefaultRow = any;
interface TableRefs {
    tableWrapper: HTMLElement;
    headerWrapper: HTMLElement;
    footerWrapper: HTMLElement;
    fixedBodyWrapper: HTMLElement;
    rightFixedBodyWrapper: HTMLElement;
    bodyWrapper: HTMLElement;
    appendWrapper: HTMLElement;
    [key: string]: any;
}
interface TableState {
    isGroup: Ref<boolean>;
    resizeState: Ref<{
        width: any;
        height: any;
    }>;
    doLayout: () => void;
    debouncedUpdateLayout: () => void;
}
interface TreeProps {
    hasChildren?: string;
    children?: string;
    checkStrictly?: boolean;
}
type HoverState<T> = Nullable<{
    cell: HTMLElement;
    column: TableColumnCtx<T>;
    row: T;
}>;
type RIS<T> = {
    row: T;
    $index: number;
    store: Store<T>;
    expanded: boolean;
};
type RenderExpanded<T> = ({ row, $index, store, expanded: boolean, }: RIS<T>) => VNode;
type SummaryMethod<T> = (data: {
    columns: TableColumnCtx<T>[];
    data: T[];
}) => (string | VNode)[];
interface Table<T> extends ComponentInternalInstance {
    $ready: boolean;
    hoverState?: HoverState<T>;
    renderExpanded: RenderExpanded<T>;
    store: Store<T>;
    layout: TableLayout<T>;
    refs: TableRefs;
    tableId: string;
    state: TableState;
}
type ColumnCls<T> = string | ((data: {
    row: T;
    rowIndex: number;
}) => string);
type ColumnStyle<T> = CSSProperties | ((data: {
    row: T;
    rowIndex: number;
}) => CSSProperties);
type CellCls<T> = string | ((data: {
    row: T;
    rowIndex: number;
    column: TableColumnCtx<T>;
    columnIndex: number;
}) => string);
type CellStyle<T> = CSSProperties | ((data: {
    row: T;
    rowIndex: number;
    column: TableColumnCtx<T>;
    columnIndex: number;
}) => CSSProperties);
type Layout = 'fixed' | 'auto';
interface TableProps<T> {
    data: T[];
    size?: ComponentSize;
    width?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    fit?: boolean;
    stripe?: boolean;
    border?: boolean;
    rowKey?: string | ((row: T) => string);
    context?: Table<T>;
    showHeader?: boolean;
    showSummary?: boolean;
    sumText?: string;
    summaryMethod?: SummaryMethod<T>;
    rowClassName?: ColumnCls<T>;
    rowStyle?: ColumnStyle<T>;
    cellClassName?: CellCls<T>;
    cellStyle?: CellStyle<T>;
    headerRowClassName?: ColumnCls<T>;
    headerRowStyle?: ColumnStyle<T>;
    headerCellClassName?: CellCls<T>;
    headerCellStyle?: CellStyle<T>;
    highlightCurrentRow?: boolean;
    currentRowKey?: string | number;
    emptyText?: string;
    expandRowKeys?: string[];
    defaultExpandAll?: boolean;
    defaultSort?: Sort;
    tooltipEffect?: string;
    tooltipOptions?: TableOverflowTooltipOptions;
    spanMethod?: (data: {
        row: T;
        rowIndex: number;
        column: TableColumnCtx<T>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    } | undefined;
    selectOnIndeterminate?: boolean;
    indent?: number;
    treeProps?: TreeProps;
    lazy?: boolean;
    load?: (row: T, treeNode: TreeNode, resolve: (data: T[]) => void) => void;
    className?: string;
    style?: CSSProperties;
    tableLayout?: Layout;
    scrollbarAlwaysOn?: boolean;
    flexible?: boolean;
    showOverflowTooltip?: boolean | TableOverflowTooltipOptions;
    appendFilterPanelTo?: string;
    scrollbarTabindex?: number | string;
}
interface Sort {
    prop: string;
    order: 'ascending' | 'descending';
    init?: any;
    silent?: any;
}
interface Filter<T> {
    column: TableColumnCtx<T>;
    values: string[];
    silent: any;
}
interface TreeNode {
    expanded?: boolean;
    loading?: boolean;
    noLazyChildren?: boolean;
    indent?: number;
    level?: number;
    display?: boolean;
}
interface RenderRowData<T> {
    store: Store<T>;
    _self: Table<T>;
    column: TableColumnCtx<T>;
    row: T;
    $index: number;
    treeNode?: TreeNode;
    expanded: boolean;
}
declare const _default: {
    data: {
        type: PropType<DefaultRow[]>;
        default: () => never[];
    };
    size: any;
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    border: BooleanConstructor;
    rowKey: PropType<TableProps<DefaultRow>["rowKey"]>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: PropType<TableProps<DefaultRow>["summaryMethod"]>;
    rowClassName: PropType<TableProps<DefaultRow>["rowClassName"]>;
    rowStyle: PropType<TableProps<DefaultRow>["rowStyle"]>;
    cellClassName: PropType<TableProps<DefaultRow>["cellClassName"]>;
    cellStyle: PropType<TableProps<DefaultRow>["cellStyle"]>;
    headerRowClassName: PropType<TableProps<DefaultRow>["headerRowClassName"]>;
    headerRowStyle: PropType<TableProps<DefaultRow>["headerRowStyle"]>;
    headerCellClassName: PropType<TableProps<DefaultRow>["headerCellClassName"]>;
    headerCellStyle: PropType<TableProps<DefaultRow>["headerCellStyle"]>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (NumberConstructor | StringConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: PropType<TableProps<DefaultRow>["expandRowKeys"]>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: PropType<TableProps<DefaultRow>["defaultSort"]>;
    tooltipEffect: StringConstructor;
    tooltipOptions: PropType<TableProps<DefaultRow>["tooltipOptions"]>;
    spanMethod: PropType<TableProps<DefaultRow>["spanMethod"]>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: PropType<TableProps<DefaultRow>["treeProps"]>;
        default: () => {
            hasChildren: string;
            children: string;
            checkStrictly: boolean;
        };
    };
    lazy: BooleanConstructor;
    load: PropType<TableProps<DefaultRow>["load"]>;
    style: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: PropType<Layout>;
        default: string;
    };
    scrollbarAlwaysOn: BooleanConstructor;
    flexible: BooleanConstructor;
    showOverflowTooltip: PropType<TableProps<DefaultRow>["showOverflowTooltip"]>;
    appendFilterPanelTo: StringConstructor;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
};
export default _default;
export type { SummaryMethod, Table, TableProps, TableRefs, ColumnCls, ColumnStyle, CellCls, CellStyle, TreeNode, RenderRowData, Sort, Filter, TableColumnCtx, TreeProps, };
