import { PropType } from 'vue';
import { Store } from '../store';
import { ColumnCls, ColumnStyle, DefaultRow, Table } from '../table/defaults';
import { TableOverflowTooltipOptions } from '../util';
interface TableBodyProps<T> {
    store: Store<T>;
    stripe?: boolean;
    context: Table<T>;
    rowClassName: ColumnCls<T>;
    rowStyle: ColumnStyle<T>;
    fixed: string;
    highlight: boolean;
    tooltipEffect?: string;
    tooltipOptions?: TableOverflowTooltipOptions;
}
declare const defaultProps: {
    store: {
        required: boolean;
        type: PropType<TableBodyProps<DefaultRow>["store"]>;
    };
    stripe: BooleanConstructor;
    tooltipEffect: StringConstructor;
    tooltipOptions: {
        type: PropType<TableBodyProps<DefaultRow>["tooltipOptions"]>;
    };
    context: {
        default: () => {};
        type: PropType<TableBodyProps<DefaultRow>["context"]>;
    };
    rowClassName: PropType<TableBodyProps<DefaultRow>["rowClassName"]>;
    rowStyle: PropType<TableBodyProps<DefaultRow>["rowStyle"]>;
    fixed: {
        type: StringConstructor;
        default: string;
    };
    highlight: BooleanConstructor;
};
export { TableBodyProps };
export default defaultProps;
