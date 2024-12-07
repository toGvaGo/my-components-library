import { default as Table } from './src/table.vue';
import { default as TableColumn } from './src/tableColumn';
import { SFCWithInstall } from '../../utils';
export declare const GpTable: SFCWithInstall<typeof Table> & {
    TableColumn: typeof TableColumn;
};
export default GpTable;
export declare const GpTableColumn: SFCWithInstall<typeof TableColumn>;
export type TabelInstance = InstanceType<typeof Table>;
export type TableColumnInstance = InstanceType<typeof TableColumn>;
export type { SummaryMethod, Table, TableProps, TableRefs, ColumnCls, ColumnStyle, CellCls, CellStyle, TreeNode, RenderRowData, Sort, Filter, TableColumnCtx, } from './src/table/defaults';
