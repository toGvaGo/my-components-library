import { default as TableLayout } from './table-layout';
import { Table } from './table/defaults';
declare function useLayoutObserver<T>(root: Table<T>): {
    tableLayout: TableLayout<T>;
    onColumnsChange: (layout: TableLayout<T>) => void;
    onScrollableChange: (layout: TableLayout<T>) => void;
};
export default useLayoutObserver;
