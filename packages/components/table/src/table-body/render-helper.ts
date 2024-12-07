// @ts-nocheck


import { computed, h, inject, render } from 'vue'
import { merge } from 'lodash-unified'
import { useNamespace } from '@/hooks'
import { getRowIdentity } from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'
import useEvents from './events-helper'
import useStyles from './styles-helper'
import TdWrapper from './td-wrapper.vue'


import type { TableBodyProps } from './defaults'
import type { RenderRowData, TableProps, TreeNode } from '../table/defaults'

function useRender<T>(props: Partial<TableBodyProps<T>>) {
    const parent = inject(TABLE_INJECTION_KEY)
    const ns = useNamespace('table')
    const {
        handleDoubleClick,
        handleClick,
        handleContextMenu,
        handleMouseEnter,
        handleMouseLeave,
        handleCellMouseEnter,
        handleCellMouseLeave,
        tooltipContent,
        tooltipTrigger,
    } = useEvents(props)
    const {
        getRowStyle,
        getRowClass,
        getCellStyle,
        getCellClass,
        getSpan,
        getColspanRealWidth,
    } = useStyles(props)
    const firstDefaultColumnIndex = computed(() => {
        return props.store.states.columns.value.findIndex(
            ({ type }) => type === 'default'
        )
    })
    const getKeyOfRow = (row: T, index: number) => {
        const rowKey = (parent.props as Partial<TableProps<T>>).rowKey
        if (rowKey) {
            return getRowIdentity(row, rowKey)
        }
        return index
    }
    const rowRender = (
        row: T,
        $index: number,
        treeRowData?: TreeNode,
        expanded = false
    ) => {
        const { tooltipEffect, tooltipOptions, store } = props
        const { indent, columns } = store.states
        const rowClasses = getRowClass(row, $index)
        let display = true
        if (treeRowData) {
            rowClasses.push(ns.em('row', `level-${treeRowData.level}`))
            display = treeRowData.display
        }
        const displayStyle = display ? null : { display: 'none' }

        return h(
            'tr',
            {
                style: [displayStyle, getRowStyle(row, $index)],
                class: rowClasses,
                key: getKeyOfRow(row, $index),
                onDblclick: ($event) => handleDoubleClick($event, row),
                onClick: ($event) => handleClick($event, row),
                onContextmenu: ($event) => handleContextMenu($event, row),
                onMouseenter: () => handleMouseEnter($index),
                onMouseleave: handleMouseLeave,
            },
            columns.value.map((column, cellIndex) => {
                const { rowspan, colspan } = getSpan(row, column, $index, cellIndex)
                if (!rowspan || !colspan) {
                    return null
                }
                const columnData = Object.assign({}, column)
                columnData.realWidth = getColspanRealWidth(
                    columns.value,
                    colspan,
                    cellIndex
                )
                const data: RenderRowData<T> = {
                    store: props.store,
                    _self: props.context || parent,
                    column: columnData,
                    row,
                    $index,
                    cellIndex,
                    expanded,
                }
                if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
                    data.treeNode = {
                        indent: treeRowData.level * indent.value,
                        level: treeRowData.level
                    }
                    if (typeof treeRowData.expanded === 'boolean') {
                        data.treeNode.expanded = treeRowData.expanded
                        if ('loading' in treeRowData) {
                            data.treeNode.loading = treeRowData.loading
                        }
                        if ('noLazyChildren' in treeRowData) {
                            data.treeNode.noLazyChildren = treeRowData.noLazyChildren
                        }
                    }
                }
                const baseKey = `${getKeyOfRow(row, $index)},${cellIndex}`
                const patchKey = columnData.columnKey || columnData.rawColumnKey || ''
                const mergedTooltipOptions =
                    column.showOverflowTooltip &&
                    merge(
                        {
                            effect: tooltipEffect,
                        },
                        tooltipOptions,
                        column.showOverflowTooltip
                    )
                return h(
                    TdWrapper,
                    {
                        style: getCellStyle($index, cellIndex, row, column),
                        class: getCellClass($index, cellIndex, row, column, colspan - 1),
                        key: `${patchKey}${baseKey}`,
                        rowspan,
                        colspan,
                        onMouseenter: ($event) =>
                            handleCellMouseEnter($event, row, mergedTooltipOptions),
                        onMouseleave: handleCellMouseLeave,
                    },
                    {
                        default: () => cellChildren(cellIndex, column, data)
                    }
                )
            })
        )
    }
    const cellChildren = (cellIndex, column, data) => {
        return column.renderCell(data)
    }
    const wrappedRowRender = (row: T, $index: number) => {
        const store = props.store
        const { isRowExpanded, assertRowKey } = store
        const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } =
            store.states
        const columns = store.states.columns.value
        const hasExpandColumn = columns.some(({ type }) => type === 'expand')
        if (hasExpandColumn) {
            const expanded = isRowExpanded(row)
            const tr = rowRender(row, $index, undefined, expanded)
            const renderExpanded = parent.renderExpanded
            if (expanded) {
                if (!renderExpanded) {
                    console.error('renderExpanded is not defined')
                    return tr
                }

                return [
                    [
                        tr,
                        h(
                            'tr',
                            {
                                key: `expanded-row__${tr.key as string}`,
                            },
                            [
                                h(
                                    'td',
                                    {
                                        colspan: columns.length,
                                        class: `${ns.e('cell')} ${ns.e('expanded-cell')}`,
                                    },
                                    [renderExpanded({ row, $index, store, expanded })]
                                )
                            ]
                        )
                    ]
                ]

            } else {
                return [[tr]]
            }
        } else if (Object.keys(treeData.value).length) {
            assertRowKey()

            const key = getRowIdentity(row, rowKey.value)
            let cur = treeData.value[key]
            let treeRowData = null
            if (cur) {
                treeRowData = {
                    expanded: cur.expanded,
                    level: cur.level,
                    display: true,
                }
                if (typeof cur.lazy === 'boolean') {
                    if (typeof cur.loaded === 'boolean' && cur.loaded) {
                        treeRowData.noLazyChildren = !(cur.children && cur.children.length)
                    }
                    treeRowData.loading = cur.loading
                }
            }


            const tmp = [rowRender(row, $index, treeRowData)]
            if (cur) {
                let i = 0

                const traverse = (children, parent) => {
                    if (!(children && children.length && parent)) return
                    children.forEach((node) => {
                        const innerTreeRowData = {
                            display: parent.display && parent.expanded,
                            level: parent.level + 1,
                            expanded: false,
                            noLazyChildren: false,
                            loading: false,
                        }
                        const childKey = getRowIdentity(node, rowKey.value)
                        if (childKey === undefined || childKey === null) {
                            throw new Error(`row key is required for neseted tree node`)
                        }
                        cur = { ...treeData.value[childKey] }


                        if (cur) {
                            innerTreeRowData.expanded = cur.expanded
                            cur.level = cur.level || innerTreeRowData.level
                            cur.display = !!(cur.expanded && innerTreeRowData.display)
                            if (typeof cur.lazy === 'boolean') {
                                if (typeof cur.loaded === 'boolean' && cur.loaded) {
                                    innerTreeRowData.noLazyChildren = !(
                                        cur.children && cur.children.length
                                    )
                                }
                                innerTreeRowData.loading = cur.loading
                            }
                        }

                        i++

                        tmp.push(rowRender(node, $index + i, innerTreeRowData))
                        if (cur) {
                            const nodes =
                                lazyTreeNodeMap.value[childKey] ||
                                node[childrenColumnName.value]
                        }
                    })

                }

                cur.display = true
                const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value]

                traverse(nodes, cur)

            }
            return tmp
        } else {
            return rowRender(row, $index, undefined)
        }

    }

    return {
        wrappedRowRender,
        tooltipContent,
        tooltipTrigger,
    }

}

export default useRender
