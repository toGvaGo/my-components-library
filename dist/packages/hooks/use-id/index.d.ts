import { InjectionKey, Ref } from 'vue';
import { MaybeRef } from '@vueuse/core';
export type GpIdInjectionContext = {
    prefix: number;
    current: number;
};
export declare const ID_INJECTION_KEY: InjectionKey<GpIdInjectionContext>;
export declare const useIdInjection: () => GpIdInjectionContext;
export declare const useId: (deterministicId?: MaybeRef<string>) => Ref<string>;
