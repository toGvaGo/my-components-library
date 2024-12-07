// @ts-nocheck
import { getCurrentInstance, watch } from 'vue'
import { hasOwn } from '@/utils'
import { parseMinWidth, parseWidth } from '../util'

import type { ComputedRef } from 'vue'
import type { TableColumn, TableColumnCtx, ValueOf } from './defaults'

function getAllAliases(props, aliases) {
    return props.reduce((pre, cur) => {
        pre[cur] = cur
        return pre
    }, aliases)
}
function useWatcher<T>(
    owner: ComputedRef<any>,
    props_: Partial<TableColumnCtx<T>>
) {
    const instance = getCurrentInstance() as TableColumn<T>
    const registerComplexWatchers = () => {
        const props = ['fixed']
        const aliases = {
            realWidth: 'width',
            realMinWidth: 'minWidth',
        }
        const allAliases = getAllAliases(props, aliases)
        Object.keys(allAliases).forEach((key) => {
            const columnKey = aliases[key]
            if (hasOwn(props_, columnKey)) {
                watch(
                    () => props_[columnKey],
                    (newVal) => {
                        let value: ValueOf<TableColumnCtx<T>> = newVal
                        if (columnKey === 'width' && key === 'realWidth') {
                            value = parseWidth(newVal)
                        }
                        if (columnKey === 'minWidth' && key === 'realMinWidth') {
                            value = parseMinWidth(newVal)
                        }
                        instance.columnConfig.value[columnKey as any] = value
                        instance.columnConfig.value[key] = value
                        const updateColumns = columnKey === 'fixed'
                        owner.value.store.scheduleLayout(updateColumns)
                    }
                )
            }
        })
    }
    const registerNormalWatchers = () => {
        const props = [
            'label',
            'filters',
            'filterMultiple',
            'filteredValue',
            'sortable',
            'index',
            'formatter',
            'className',
            'labelClassName',
            'filterClassName',
            'showOverflowTooltip',
        ]
        const aliases = {
            property: 'prop',
            align: 'realAlign',
            headerAlign: 'realHeaderAlign',
        }
        const allAliases = getAllAliases(props, aliases)
        Object.keys(allAliases).forEach((key) => {
            const columnKey = aliases[key]
            if (hasOwn(props_, columnKey)) {
                watch(
                    () => props_[columnKey],
                    (newVal) => {
                        instance.columnConfig.value[key] = newVal
                    }
                )
            }
        })
    }

    return {
        registerNormalWatchers,
        registerComplexWatchers
    }
}

export default useWatcher