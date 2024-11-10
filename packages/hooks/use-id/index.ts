import { computed, getCurrentInstance, inject, unref } from 'vue'
import { debugWarn, isClient } from '@/utils'
import { useGetDerivedNamespace } from '../use-namespace'

import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import { curry } from 'lodash-unified'

export type GpIdInjectionContext = {
    prefix: number
    current: number
}

const defaultIdInjection = {
    prefix: Math.floor(Math.random() * 10000),
    current: 0
}

export const ID_INJECTION_KEY: InjectionKey<GpIdInjectionContext> = Symbol('gpIdInjection')

export const useIdInjection = (): GpIdInjectionContext => {
    return getCurrentInstance()
        ? inject(ID_INJECTION_KEY, defaultIdInjection)
        : defaultIdInjection
}
export const useId = (deterministicId?: MaybeRef<string>): Ref<string> => {
    const idInjection = useIdInjection()
    if (!isClient && idInjection === defaultIdInjection) {
        debugWarn('useId', `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed`)
    }

    const namespace = useGetDerivedNamespace()
    const idRef = computed(() =>
        unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`
    )

    return idRef
}