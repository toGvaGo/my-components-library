// @ts-nocheck
import { getCurrentInstance, ref, unref } from 'vue'
import { getRowIdentity } from '../util'

import type { Ref } from 'vue'
import type { Table } from '../table/defaults'
import type { WatcherPropsData } from '.'

function useCurrent<T>(watcherData: WatcherPropsData<T>) {
    const instance = getCurrentInstance() as Table<T>
    const _currentRowKey = ref<string>(null)
    const currentRow: Ref<T> = ref(null)

    const setCurrentRowKey = (key: string) => {
        instance.store.assertRowKey();
        _currentRowKey.value = key
        setCurrentRowByKey(key)
    }

    const restoreCurrentRowKey = () => {
        _currentRowKey.value = null
    }

    const setCurrentRowByKey = (key: string) => {
        const { data, rowKey } = watcherData
        let _currentRow = null
        if (rowKey.value) {
            _currentRow = (unref(data) || []).find(
                (item) => getRowIdentity(item, rowKey.value) === key
            )
        }
        currentRow.value = _currentRow
        instance.emit('current-change', currentRow.value, null)
    }

    const updateCurrentRow = (_currentRow: T) => {
        const oldCurrentRow = currentRow.value
        if (_currentRow && _currentRow !== oldCurrentRow) {
            currentRow.value = _currentRow
            instance.emit('current-change', currentRow.value, oldCurrentRow)
            return
        }
        if (!_currentRow && oldCurrentRow) {
            currentRow.value = null
            instance.emit('current-change', null, oldCurrentRow)
        }
    }

    const updateCurrentRowData = () => {
        const rowKey = watcherData.rowKey.value
        const data = watcherData.data.value || []
        const oldCurrentRow = currentRow.value
        if (!data.includes(oldCurrentRow) && oldCurrentRow) {
            if (rowKey) {
                const currentRowKey = getRowIdentity(oldCurrentRow, rowKey)
                setCurrentRowByKey(currentRowKey)
            } else {
                currentRow.value = null
            }
            if (currentRow.value === null) {
                instance.emit('current-change', null, oldCurrentRow)
            }
        } else if (_currentRowKey.value) {
            setCurrentRowByKey(_currentRowKey.value)
            restoreCurrentRowKey()
        }
    }

    return {
        setCurrentRowKey,
        restoreCurrentRowKey,
        setCurrentRowByKey,
        updateCurrentRow,
        updateCurrentRowData,
        states: {
            _currentRowKey,
            currentRow,
        },
    }
}

export default useCurrent