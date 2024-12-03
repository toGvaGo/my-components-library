import { computed, onBeforeMount } from 'vue'
import { isClient } from '@/utils'
import { useGetDerivedNamespace } from '../use-namespace'
import { useIdInjection } from '../use-id'

export const usePopperContainerId = () => {
    const namespace = useGetDerivedNamespace()
    const idInjection = useIdInjection()

    const id = computed(() => {
        return `${namespace.value}-popper-container-${idInjection.prefix}`
    })
    const selector = computed(() => `#${id.value}`)

    return {
        id,
        selector,
    }
}

const createContainer = (id: string) => {
    const container = document.createElement('div')
    container.id = id
    document.body.appendChild(container)
    return container
}

export const usePopperContainer = () => {
    const { id, selector } = usePopperContainerId()
    onBeforeMount(() => {
        if (!isClient) return

        if (
            process.env.NODE_ENV === 'test' ||
            !document.body.querySelector(selector.value)
        ) {
            createContainer(id.value)
        }
    })

    return {
        id,
        selector,
    }
}