import { Ref } from 'vue';
interface WatcherPropsData<T> {
    data: Ref<T[]>;
    rowKey: Ref<string>;
}
declare function useStore<T>(): any;
export default useStore;
declare class HelperStore<T> {
    Return: any;
}
type StoreFilter = Record<string, string[]>;
type Store<T> = HelperStore<T>['Return'];
export type { WatcherPropsData, Store, StoreFilter };
