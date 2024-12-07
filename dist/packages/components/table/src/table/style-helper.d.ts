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
    tableSize: any;
    emptyBlockStyle: any;
    handleFixedMousewheel: (event: any, data: any) => void;
    resizeProxyVisible: import('vue').Ref<boolean, boolean>;
    bodyWidth: any;
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
    tableLayout: any;
    scrollbarViewStyle: {
        display: string;
        verticalAlign: string;
    };
    tableInnerStyle: any;
    scrollbarStyle: any;
};
export default useStyle;
