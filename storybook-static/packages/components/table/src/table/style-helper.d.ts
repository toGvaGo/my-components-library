import { Table, TableProps } from './defaults';
import { Store } from '../store';
import { default as TableLayout } from '../table-layout';
declare function useStyle<T>(props: TableProps<T>, layout: TableLayout<T>, store: Store<T>, table: Table<T>): {
    isHidden: import('vue').Ref<boolean, boolean>;
    renderExpanded: import('vue').Ref<null, null>;
    setDragVisible: (visible: boolean) => void;
    isGroup: import('vue').Ref<boolean, boolean>;
    handleMouseLeave: () => void;
    handleHeaderFooterMousewheel: (event: any, data: any) => void;
    tableSize: import('vue').ComputedRef<"" | "small" | "default" | "large">;
    emptyBlockStyle: import('vue').ComputedRef<{
        width: string;
        height: string;
    } | null>;
    handleFixedMousewheel: (event: any, data: any) => void;
    resizeProxyVisible: import('vue').Ref<boolean, boolean>;
    bodyWidth: import('vue').ComputedRef<string>;
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
    doLayout: () => void;
    tableBodyStyles: import('vue').ComputedRef<{
        width: string;
    }>;
    tableLayout: import('vue').ComputedRef<("fixed" | "auto") | undefined>;
    scrollbarViewStyle: {
        display: string;
        verticalAlign: string;
    };
    tableInnerStyle: import('vue').ComputedRef<{
        height: string | number;
        maxHeight?: undefined;
    } | {
        maxHeight: string | number;
        height?: undefined;
    } | {
        height?: undefined;
        maxHeight?: undefined;
    }>;
    scrollbarStyle: import('vue').ComputedRef<{
        height: string;
        maxHeight?: undefined;
    } | {
        maxHeight: string;
        height?: undefined;
    } | {
        height?: undefined;
        maxHeight?: undefined;
    }>;
};
export default useStyle;
