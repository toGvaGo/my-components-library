import { TableColumnCtx } from '../table-column/defaults';
import { TableFooter } from '.';
declare function useStyle<T>(props: TableFooter<T>): {
    getCellClasses: (columns: TableColumnCtx<T>[], cellIndex: number) => string[];
    getCellStyles: (column: TableColumnCtx<T>, cellIndex: number) => any;
    columns: any;
};
export default useStyle;
