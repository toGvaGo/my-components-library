import { InjectionKey, Ref } from 'vue';
import { ComponentSize } from '../../constants';
export declare const useSizeProp: any;
export declare const useSizePorps: {
    size: any;
};
export interface SizeContext {
    size: Ref<ComponentSize>;
}
export declare const SIZE_INJECTION_KEY: InjectionKey<SizeContext>;
export declare const useGlobalSize: () => import('vue').ComputedRef<"" | "small" | "default" | "large">;
