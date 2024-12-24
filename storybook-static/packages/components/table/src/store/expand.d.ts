import { Ref } from 'vue';
import { WatcherPropsData } from '.';
declare function useExpand<T>(watcherData: WatcherPropsData<T>): {
    updateExpandRows: () => void;
    toggleRowExpansion: (row: T, expanded?: boolean) => void;
    setExpandRowKeys: (rowKeys: string[]) => void;
    isRowExpanded: (row: T) => boolean;
    states: {
        expandRows: Ref<T[], T[]>;
        defaultExpandAll: Ref<boolean, boolean>;
    };
};
export default useExpand;
