import { computed, inject } from 'vue'
import { TABLE_INJECTION_KEY } from '../tokens'

function useMapState() {
    const table = inject(TABLE_INJECTION_KEY)
    const store = table?.store

    const leftFixedLeafCount = computed(() => {
        return store.states.fixedLeafColumnsLength.value
    })
    const rightFixedLeafCount = computed(() => {
        return store.states.rightFixedColumns.value.length
    })
    const columnsCount = computed(() => {
        return store.states.columns.value.length
    })
    const leftFixedCount = computed(() => {
        return store.states.fixedColumns.value.length
    })
    const rightFixedCount = computed(() => {
        return store.states.rightFixedColumns.value.length
    })

    return {
        leftFixedLeafCount,
        rightFixedLeafCount,
        columnsCount,
        leftFixedCount,
        rightFixedCount,
        columns: store.states.columns,
    }
}

export default useMapState