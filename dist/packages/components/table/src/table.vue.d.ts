import { default as TableLayout } from './table-layout';
import { hColgroup } from './h-helper';
import { Table } from './table/defaults';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    data: {
        type: import('vue').PropType<import('./table/defaults').DefaultRow[]>;
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
    rowKey: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["rowKey"]>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["summaryMethod"]>;
    rowClassName: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["rowClassName"]>;
    rowStyle: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["rowStyle"]>;
    cellClassName: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["cellClassName"]>;
    cellStyle: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["cellStyle"]>;
    headerRowClassName: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["headerRowClassName"]>;
    headerRowStyle: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["headerRowStyle"]>;
    headerCellClassName: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["headerCellClassName"]>;
    headerCellStyle: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["headerCellStyle"]>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (NumberConstructor | StringConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["expandRowKeys"]>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["defaultSort"]>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["tooltipOptions"]>;
    spanMethod: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["spanMethod"]>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["treeProps"]>;
        default: () => {
            hasChildren: string;
            children: string;
            checkStrictly: boolean;
        };
    };
    lazy: BooleanConstructor;
    load: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["load"]>;
    style: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: import('vue').PropType<"fixed" | "auto">;
        default: string;
    };
    scrollbarAlwaysOn: BooleanConstructor;
    flexible: BooleanConstructor;
    showOverflowTooltip: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["showOverflowTooltip"]>;
    appendFilterPanelTo: StringConstructor;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
}>, {
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
    layout: TableLayout<any>;
    store: any;
    columns: import('vue').ComputedRef<import('./table-column/defaults').TableColumnCtx<unknown>>;
    handleHeaderFooterMousewheel: (event: any, data: any) => void;
    handleMouseLeave: () => void;
    tableId: string;
    tableSize: any;
    isHidden: import('vue').Ref<boolean, boolean>;
    isEmpty: import('vue').ComputedRef<boolean>;
    renderExpanded: import('vue').Ref<null, null>;
    resizeProxyVisible: import('vue').Ref<boolean, boolean>;
    resizeState: import('vue').Ref<{
        width: null | number;
        height: null | number;
        headerHeight: null | number;
    }, {
        width: null | number;
        height: null | number;
        headerHeight: null | number;
    } | {
        width: null | number;
        height: null | number;
        headerHeight: null | number;
    }>;
    isGroup: import('vue').Ref<boolean, boolean>;
    bodyWidth: any;
    tableBodyStyles: import('vue').ComputedRef<{
        width: string;
    }>;
    emptyBlockStyle: any;
    debouncedUpdateLayout: import('lodash-unified').DebouncedFunc<() => void>;
    handleFixedMousewheel: (event: any, data: any) => void;
    setCurrentRow: (row: any) => void;
    getSelectionRows: () => any;
    toggleRowSelection: (row: any, selected?: boolean, ignoreSelectable?: boolean) => void;
    clearSelection: () => void;
    clearFilter: (columnKeys?: string[]) => void;
    toggleAllSelection: () => void;
    toggleRowExpansion: (row: any, expanded?: boolean) => void;
    clearSort: () => void;
    doLayout: () => void;
    sort: (prop: string, order: string) => void;
    updateKeyChildren: (key: string, data: any[]) => void;
    setDragVisible: (visible: boolean) => void;
    context: Table<any>;
    computedSumText: import('vue').ComputedRef<string>;
    computedEmptyText: import('vue').ComputedRef<string>;
    tableLayout: any;
    scrollbarViewStyle: {
        display: string;
        verticalAlign: string;
    };
    tableInnerStyle: any;
    scrollbarStyle: any;
    scrollBarRef: import('vue').Ref<any, any>;
    scrollTo: (options: ScrollToOptions | number, yCoord?: number) => void;
    setScrollLeft: (left?: number) => void;
    setScrollTop: (top?: number) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("select-all" | "select" | "expand-change" | "current-change" | "sort-change" | "filter-change" | "cell-mouse-enter" | "cell-mouse-leave" | "selection-change" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "header-dragend")[], "select-all" | "select" | "expand-change" | "current-change" | "sort-change" | "filter-change" | "cell-mouse-enter" | "cell-mouse-leave" | "selection-change" | "cell-contextmenu" | "cell-click" | "cell-dblclick" | "row-click" | "row-contextmenu" | "row-dblclick" | "header-click" | "header-contextmenu" | "header-dragend", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    data: {
        type: import('vue').PropType<import('./table/defaults').DefaultRow[]>;
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
    rowKey: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["rowKey"]>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["summaryMethod"]>;
    rowClassName: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["rowClassName"]>;
    rowStyle: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["rowStyle"]>;
    cellClassName: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["cellClassName"]>;
    cellStyle: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["cellStyle"]>;
    headerRowClassName: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["headerRowClassName"]>;
    headerRowStyle: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["headerRowStyle"]>;
    headerCellClassName: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["headerCellClassName"]>;
    headerCellStyle: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["headerCellStyle"]>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (NumberConstructor | StringConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["expandRowKeys"]>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["defaultSort"]>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["tooltipOptions"]>;
    spanMethod: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["spanMethod"]>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["treeProps"]>;
        default: () => {
            hasChildren: string;
            children: string;
            checkStrictly: boolean;
        };
    };
    lazy: BooleanConstructor;
    load: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["load"]>;
    style: {
        type: import('vue').PropType<import('vue').CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: import('vue').PropType<"fixed" | "auto">;
        default: string;
    };
    scrollbarAlwaysOn: BooleanConstructor;
    flexible: BooleanConstructor;
    showOverflowTooltip: import('vue').PropType<import('./table/defaults').TableProps<import('./table/defaults').DefaultRow>["showOverflowTooltip"]>;
    appendFilterPanelTo: StringConstructor;
    scrollbarTabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onSelect-all"?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onSort-change"?: ((...args: any[]) => any) | undefined;
    "onFilter-change"?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-leave"?: ((...args: any[]) => any) | undefined;
    "onSelection-change"?: ((...args: any[]) => any) | undefined;
    "onCell-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
    "onRow-click"?: ((...args: any[]) => any) | undefined;
    "onRow-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
    "onHeader-click"?: ((...args: any[]) => any) | undefined;
    "onHeader-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onHeader-dragend"?: ((...args: any[]) => any) | undefined;
}>, {
    size: any;
    tableLayout: "fixed" | "auto";
    border: boolean;
    style: import('vue').CSSProperties;
    data: any[];
    lazy: boolean;
    className: string;
    treeProps: import('./table/defaults').TreeProps | undefined;
    stripe: boolean;
    highlightCurrentRow: boolean;
    fit: boolean;
    showHeader: boolean;
    showSummary: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: number;
    scrollbarAlwaysOn: boolean;
    flexible: boolean;
    scrollbarTabindex: string | number;
}, {}, {
    TableHeader: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        fixed: {
            type: StringConstructor;
            default: string;
        };
        store: {
            required: true;
            type: import('vue').PropType<import('./table-header').TableHeaderProps<import('./table/defaults').DefaultRow>["store"]>;
        };
        defaultSort: {
            type: import('vue').PropType<import('./table-header').TableHeaderProps<import('./table/defaults').DefaultRow>["defaultSort"]>;
            default: () => {
                prop: string;
                order: string;
            };
        };
        border: BooleanConstructor;
        appendFilterPanelTo: {
            type: StringConstructor;
        };
    }>, {
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
        filterPanels: import('vue').Ref<{}, {}>;
        onColumnsChange: (layout: TableLayout<any>) => void;
        onScrollableChange: (layout: TableLayout<any>) => void;
        columnRows: import('vue').ComputedRef<import('./table-column/defaults').TableColumnCtx<unknown>[]>;
        getHeaderRowClass: (rowIndex: number) => string;
        getHeaderRowStyle: (rowIndex: number) => any;
        getHeaderCellClass: (rowIndex: number, columnIndex: number, row: unknown, column: import('./table-column/defaults').TableColumnCtx<unknown>) => string;
        getHeaderCellStyle: (rowIndex: number, columnIndex: number, row: unknown, column: import('./table-column/defaults').TableColumnCtx<unknown>) => any;
        handleHeaderClick: (event: Event, column: import('./table-column/defaults').TableColumnCtx<unknown>) => void;
        handleHeaderContextMenu: (event: Event, column: import('./table-column/defaults').TableColumnCtx<unknown>) => void;
        handleMouseDown: (event: MouseEvent, column: import('./table-column/defaults').TableColumnCtx<unknown>) => void;
        handleMouseMove: (event: MouseEvent, column: import('./table-column/defaults').TableColumnCtx<unknown>) => void;
        handleMouseOut: () => void;
        handleSortClick: (event: Event, column: import('./table-column/defaults').TableColumnCtx<unknown>, givenOrder: string | boolean) => void;
        handleFilterClick: (event: Event) => void;
        isGroup: import('vue').ComputedRef<boolean>;
        toggleAllSelection: (event: Event) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        fixed: {
            type: StringConstructor;
            default: string;
        };
        store: {
            required: true;
            type: import('vue').PropType<import('./table-header').TableHeaderProps<import('./table/defaults').DefaultRow>["store"]>;
        };
        defaultSort: {
            type: import('vue').PropType<import('./table-header').TableHeaderProps<import('./table/defaults').DefaultRow>["defaultSort"]>;
            default: () => {
                prop: string;
                order: string;
            };
        };
        border: BooleanConstructor;
        appendFilterPanelTo: {
            type: StringConstructor;
        };
    }>> & Readonly<{}>, {
        fixed: string;
        border: boolean;
        defaultSort: import('./table/defaults').Sort;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    TableBody: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        store: {
            required: boolean;
            type: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["store"]>;
        };
        stripe: BooleanConstructor;
        tooltipEffect: StringConstructor;
        tooltipOptions: {
            type: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["tooltipOptions"]>;
        };
        context: {
            default: () => {};
            type: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["context"]>;
        };
        rowClassName: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["rowClassName"]>;
        rowStyle: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["rowStyle"]>;
        fixed: {
            type: StringConstructor;
            default: string;
        };
        highlight: BooleanConstructor;
    }>, {
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
        onColumnsChange: (layout: TableLayout<any>) => void;
        onScrollableChange: (layout: TableLayout<any>) => void;
        wrappedRowRender: (row: any, $index: number) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }> | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>[] | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>[][];
        tooltipContent: import('vue').Ref<string, string>;
        tooltipTrigger: import('vue').Ref<import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>, import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        store: {
            required: boolean;
            type: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["store"]>;
        };
        stripe: BooleanConstructor;
        tooltipEffect: StringConstructor;
        tooltipOptions: {
            type: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["tooltipOptions"]>;
        };
        context: {
            default: () => {};
            type: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["context"]>;
        };
        rowClassName: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["rowClassName"]>;
        rowStyle: import('vue').PropType<import('./table-body/defaults').TableBodyProps<import('./table/defaults').DefaultRow>["rowStyle"]>;
        fixed: {
            type: StringConstructor;
            default: string;
        };
        highlight: BooleanConstructor;
    }>> & Readonly<{}>, {
        fixed: string;
        context: Table<any>;
        stripe: boolean;
        highlight: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    TableFooter: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        fixed: {
            type: StringConstructor;
            default: string;
        };
        store: {
            required: true;
            type: import('vue').PropType<import('./table-footer').TableFooter<import('./table/defaults').DefaultRow>["store"]>;
        };
        summaryMethod: import('vue').PropType<import('./table-footer').TableFooter<import('./table/defaults').DefaultRow>["summaryMethod"]>;
        sumText: StringConstructor;
        border: BooleanConstructor;
        defaultSort: {
            type: import('vue').PropType<import('./table-footer').TableFooter<import('./table/defaults').DefaultRow>["defaultSort"]>;
            default: () => {
                prop: string;
                order: string;
            };
        };
    }>, {
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
        getCellClasses: (columns: import('./table-column/defaults').TableColumnCtx<any>[], cellIndex: number) => string[];
        getCellStyles: (column: import('./table-column/defaults').TableColumnCtx<any>, cellIndex: number) => any;
        columns: any;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        fixed: {
            type: StringConstructor;
            default: string;
        };
        store: {
            required: true;
            type: import('vue').PropType<import('./table-footer').TableFooter<import('./table/defaults').DefaultRow>["store"]>;
        };
        summaryMethod: import('vue').PropType<import('./table-footer').TableFooter<import('./table/defaults').DefaultRow>["summaryMethod"]>;
        sumText: StringConstructor;
        border: BooleanConstructor;
        defaultSort: {
            type: import('vue').PropType<import('./table-footer').TableFooter<import('./table/defaults').DefaultRow>["defaultSort"]>;
            default: () => {
                prop: string;
                order: string;
            };
        };
    }>> & Readonly<{}>, {
        fixed: string;
        border: boolean;
        defaultSort: import('./table/defaults').Sort;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    GpScrollbar: import('../../../utils').SFCWithInstall<{
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
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
                readonly type: import('vue').PropType<string>;
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
            readonly type: import('vue').PropType<string>;
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
    hColgroup: typeof hColgroup;
}, {
    Mousewheel: import('vue').ObjectDirective<any, any, string, string>;
}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
