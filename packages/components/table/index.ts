import { withInstall, withNoopInstall } from "@/utils";
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'
import type { SFCWithInstall } from '@/utils'

export const GpTable: SFCWithInstall<typeof Table> & {
    TableColumn: typeof TableColumn
} = withInstall(Table, {
    TableColumn
})

export default GpTable
export const GpTableColumn: SFCWithInstall<typeof TableColumn> = withNoopInstall(TableColumn)

export type TabelInstance = InstanceType<typeof Table>
export type TableColumnInstance = InstanceType<typeof TableColumn>

export type {
    SummaryMethod,
    Table,
    TableProps,
    TableRefs,
    ColumnCls,
    ColumnStyle,
    CellCls,
    CellStyle,
    TreeNode,
    RenderRowData,
    Sort,
    Filter,
    TableColumnCtx,
} from './src/table/defaults'
