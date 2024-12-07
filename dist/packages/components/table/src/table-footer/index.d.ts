import { Store } from '../store';
import { PropType } from 'vue';
import { DefaultRow, Sort, SummaryMethod } from '../table/defaults';
export interface TableFooter<T> {
    fixed: string;
    store: Store<T>;
    summaryMethod: SummaryMethod<T>;
    sumText: string;
    defaultSort: Sort;
    border: boolean;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    fixed: {
        type: StringConstructor;
        default: string;
    };
    store: {
        required: true;
        type: PropType<TableFooter<DefaultRow>["store"]>;
    };
    summaryMethod: PropType<TableFooter<DefaultRow>["summaryMethod"]>;
    sumText: StringConstructor;
    border: BooleanConstructor;
    defaultSort: {
        type: PropType<TableFooter<DefaultRow>["defaultSort"]>;
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
    getCellClasses: (columns: import('../table-column/defaults').TableColumnCtx<any>[], cellIndex: number) => string[];
    getCellStyles: (column: import('../table-column/defaults').TableColumnCtx<any>, cellIndex: number) => any;
    columns: any;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    fixed: {
        type: StringConstructor;
        default: string;
    };
    store: {
        required: true;
        type: PropType<TableFooter<DefaultRow>["store"]>;
    };
    summaryMethod: PropType<TableFooter<DefaultRow>["summaryMethod"]>;
    sumText: StringConstructor;
    border: BooleanConstructor;
    defaultSort: {
        type: PropType<TableFooter<DefaultRow>["defaultSort"]>;
        default: () => {
            prop: string;
            order: string;
        };
    };
}>> & Readonly<{}>, {
    fixed: string;
    border: boolean;
    defaultSort: Sort;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
