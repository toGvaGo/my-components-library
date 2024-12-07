import { ComponentInternalInstance, PropType, Ref } from 'vue';
import { DefaultRow, Sort } from '../table/defaults';
import { Store } from '../store';
export interface TableHeader extends ComponentInternalInstance {
    state: {
        onColumnsChange: any;
        onScrollableChange: any;
    };
    filterPanels: Ref<unknown>;
}
export interface TableHeaderProps<T> {
    fixed: string;
    store: Store<T>;
    border: boolean;
    defaultSort: Sort;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    fixed: {
        type: StringConstructor;
        default: string;
    };
    store: {
        required: true;
        type: PropType<TableHeaderProps<DefaultRow>["store"]>;
    };
    defaultSort: {
        type: PropType<TableHeaderProps<DefaultRow>["defaultSort"]>;
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
    filterPanels: Ref<{}, {}>;
    onColumnsChange: (layout: import('../table-layout').default<any>) => void;
    onScrollableChange: (layout: import('../table-layout').default<any>) => void;
    columnRows: import('vue').ComputedRef<import('../table-column/defaults').TableColumnCtx<unknown>[]>;
    getHeaderRowClass: (rowIndex: number) => string;
    getHeaderRowStyle: (rowIndex: number) => any;
    getHeaderCellClass: (rowIndex: number, columnIndex: number, row: unknown, column: import('../table-column/defaults').TableColumnCtx<unknown>) => string;
    getHeaderCellStyle: (rowIndex: number, columnIndex: number, row: unknown, column: import('../table-column/defaults').TableColumnCtx<unknown>) => any;
    handleHeaderClick: (event: Event, column: import('../table-column/defaults').TableColumnCtx<unknown>) => void;
    handleHeaderContextMenu: (event: Event, column: import('../table-column/defaults').TableColumnCtx<unknown>) => void;
    handleMouseDown: (event: MouseEvent, column: import('../table-column/defaults').TableColumnCtx<unknown>) => void;
    handleMouseMove: (event: MouseEvent, column: import('../table-column/defaults').TableColumnCtx<unknown>) => void;
    handleMouseOut: () => void;
    handleSortClick: (event: Event, column: import('../table-column/defaults').TableColumnCtx<unknown>, givenOrder: string | boolean) => void;
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
        type: PropType<TableHeaderProps<DefaultRow>["store"]>;
    };
    defaultSort: {
        type: PropType<TableHeaderProps<DefaultRow>["defaultSort"]>;
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
    defaultSort: Sort;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
