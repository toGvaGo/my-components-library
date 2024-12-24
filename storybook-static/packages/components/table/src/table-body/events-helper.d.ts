import { TableBodyProps } from './defaults';
import { TableOverflowTooltipOptions } from '../util';
declare function useEvents<T>(props: Partial<TableBodyProps<T>>): {
    handleDoubleClick: (event: Event, row: T) => void;
    handleClick: (event: Event, row: T) => void;
    handleContextMenu: (event: Event, row: T) => void;
    handleMouseEnter: import('lodash-unified').DebouncedFunc<(index: number) => void>;
    handleMouseLeave: import('lodash-unified').DebouncedFunc<() => void>;
    handleCellMouseEnter: (event: MouseEvent, row: T, tooltipOptions: TableOverflowTooltipOptions) => void;
    handleCellMouseLeave: (event: any) => void;
    tooltipContent: import('vue').Ref<string, string>;
    tooltipTrigger: import('vue').Ref<import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>, import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>>;
};
export default useEvents;
