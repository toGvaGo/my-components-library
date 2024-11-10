import { computed, getCurrentInstance, inject, ref, unref } from 'vue';
import { debugWarn, isClient, isNumber } from '@/utils';
import type { InjectionKey, Ref } from 'vue';


export interface GpZIndexInjectionContext {
    current: number
}

const initial: GpZIndexInjectionContext = {
    current: 0
}

const zIndex = ref(0)

export const defaultInitialZIndex = 2000;

export const ZINDEX_INJECTION_KEY: InjectionKey<GpZIndexInjectionContext> = Symbol('gpZIndexContextKey')

export const zIndexContextKey: InjectionKey<Ref<number | undefined>> = Symbol('zIndexContextKey');

export const useZIndex = (zIndexOverrides?: Ref<number>) => {
    const increasingInjection = getCurrentInstance()
        ? inject(ZINDEX_INJECTION_KEY, initial)
        : initial

    const zIndexInjection =
        zIndexOverrides ||
        (getCurrentInstance() ? inject(zIndexContextKey, undefined) : undefined)

    const initialZIndex = computed(() => {
        const zIndexFromInjection = unref(zIndexInjection);
        return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex
    })

    const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

    const nextZIndex = () => {
        increasingInjection.current++
        zIndex.value = increasingInjection.current
        return currentZIndex.value;
    }

    if (!isClient && !inject(ZINDEX_INJECTION_KEY)) {
        debugWarn('ZIndexInjection', `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed`)
    }

    return {
        initialZIndex,
        currentZIndex,
        nextZIndex
    }
}

export type UseZIndexReturn = ReturnType<typeof useZIndex>;