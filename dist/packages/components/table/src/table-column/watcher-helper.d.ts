import { ComputedRef } from 'vue';
import { TableColumnCtx } from './defaults';
declare function useWatcher<T>(owner: ComputedRef<any>, props_: Partial<TableColumnCtx<T>>): {
    registerNormalWatchers: () => void;
    registerComplexWatchers: () => void;
};
export default useWatcher;
