// @ts-nocheck
import {
    defineComponent,
    getCurrentInstance,
    h,
    inject,
    nextTick,
    onMounted,
    ref,
} from 'vue'
// import GpCheckbox from '@/components/checkbox'
import { useNamespace } from '@/hooks'
import FilterPanel from '../filter-panel.vue'
import useLayoutObserver from '../layout-observer'
import { TABLE_INJECTION_KEY } from '../tokens'
import useEvent from './event-helper'
import useStyle from './style.helper'
import useUtils from './utils-helper'

import type { ComponentInternalInstance, PropType, Ref } from 'vue'
import type { DefaultRow, Sort } from '../table/defaults'
import type { Store } from '../store'

export interface TableHeader extends ComponentInternalInstance {
    state: {
        onColumnsChange
        onScrollableChange
    }
    filterPanels: Ref<unknown>
}

export interface TableHeaderProps<T> {
    fixed: string
    store: Store<T>
    border: boolean
    defaultSort: Sort
}

export default defineComponent({
    name: 'GpTableHeader',
    components: {
        // GpCheckbox
    },
    props: {
        fixed: {
            type: String,
            default: '',
        },
        store: {
            required: true,
            type: Object as PropType<TableHeaderProps<DefaultRow>['store']>,
        },
        defaultSort: {
            type: Object as PropType<TableHeaderProps<DefaultRow>['defaultSort']>,
            default: () => {
                return {
                    prop: '',
                    order: '',
                }
            },
        },
        border: Boolean,
        appendFilterPanelTo: {
            type: String,
        },
    },
    setup(props, { emit }) {
        const instance = getCurrentInstance() as TableHeader
        const parent = inject(TABLE_INJECTION_KEY)
        const ns = useNamespace('table')
        const filterPanels = ref({})
        const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent!)
        onMounted(async () => {
            //确保在updateColumns之后执行(因为现在updateColumns是在第一次nextTick之后执行的)
            await nextTick()
            await nextTick()
            const { prop, order } = props.defaultSort
            parent?.store.commit('sort', { prop, order, init: true })
        })
        const {
            handleHeaderClick,
            handleHeaderContextMenu,
            handleMouseDown,
            handleMouseMove,
            handleMouseOut,
            handleSortClick,
            handleFilterClick,
        } = useEvent(props as TableHeaderProps<unknown>, emit)
        const {
            getHeaderRowStyle,
            getHeaderRowClass,
            getHeaderCellStyle,
            getHeaderCellClass,
        } = useStyle(props as TableHeaderProps<unknown>)
        const { isGroup, toggleAllSelection, columnRows } = useUtils(
            props as TableHeaderProps<unknown>
        )

        instance.state = {
            onColumnsChange,
            onScrollableChange
        }
        instance.filterPanels = filterPanels

        return {
            ns,
            filterPanels,
            onColumnsChange,
            onScrollableChange,
            columnRows,
            getHeaderRowClass,
            getHeaderRowStyle,
            getHeaderCellClass,
            getHeaderCellStyle,
            handleHeaderClick,
            handleHeaderContextMenu,
            handleMouseDown,
            handleMouseMove,
            handleMouseOut,
            handleSortClick,
            handleFilterClick,
            isGroup,
            toggleAllSelection,
        }
    },
    render() {
        const {
            ns,
            isGroup,
            columnRows,
            getHeaderCellStyle,
            getHeaderCellClass,
            getHeaderRowClass,
            getHeaderRowStyle,
            handleHeaderClick,
            handleHeaderContextMenu,
            handleMouseDown,
            handleMouseMove,
            handleSortClick,
            handleMouseOut,
            store,
            $parent,
        } = this;
        let rowSpan = 1
        return h(
            'thead',
            {
                class: { [ns.is('group')]: isGroup },
            },
            columnRows.map((subColumns, rowIndex) =>
                h(
                    'tr',
                    {
                        class: getHeaderRowClass(rowIndex),
                        key: rowIndex,
                        style: getHeaderRowStyle(rowIndex),
                    },
                    subColumns.map((column, cellIndex) => {
                        if (column.rowSpan > rowSpan) {
                            rowSpan = column.rowSpan
                        }
                        return h(
                            'th',
                            {
                                class: getHeaderCellClass(
                                    rowIndex,
                                    cellIndex,
                                    subColumns,
                                    column
                                ),
                                colspan: column.colSpan,
                                key: `${column.id}-thead`,
                                rowspan: column.rowSpan,
                                style: getHeaderCellStyle(
                                    rowIndex,
                                    cellIndex,
                                    subColumns,
                                    column
                                ),
                                onClick: ($event) => {
                                    if ($event.currentTarget.classList.contains('noclick')) {
                                        return
                                    }
                                    handleHeaderClick($event, column)
                                },
                                onContextmenu: ($event) =>
                                    handleHeaderContextMenu($event, column),
                                onMousedown: ($event) => handleMouseDown($event, column),
                                onMousemove: ($event) => handleMouseMove($event, column),
                                onMouseout: handleMouseOut,
                            },
                            [
                                h(
                                    'div',
                                    {
                                        class: [
                                            'cell',
                                            column.filteredValue && column.filteredValue.length > 0
                                                ? 'highlight'
                                                : '',
                                        ],
                                    },
                                    [
                                        column.renderHeader
                                            ? column.renderHeader({
                                                column,
                                                $index: cellIndex,
                                                store,
                                                _self: $parent,
                                            })
                                            : column.label,
                                        column.sortable &&
                                        h(
                                            'span',
                                            {
                                                onClick: ($event) => handleSortClick($event, column),
                                                class: 'caret-wrapper'
                                            },
                                            [
                                                h('i', {
                                                    onClick: ($event) =>
                                                        handleSortClick($event, column, 'ascending'),
                                                    class: 'sort-caret ascending',
                                                }),
                                                h('i', {
                                                    onClick: ($event) =>
                                                        handleSortClick($event, column, 'descending'),
                                                    class: 'sort-caret descending',
                                                }),
                                            ]
                                        ),
                                        column.filterable &&
                                        h(
                                            FilterPanel,
                                            {
                                                store,
                                                placement: column.filterPlacement || 'bottom-start',
                                                appendTo: $parent.appendFilterPanelTo,
                                                column,
                                                upDataColumn: (key, value) => {
                                                    column[key] = value
                                                },
                                            },
                                            {
                                                'filter-icon': () =>
                                                    column.renderFilterIcon
                                                        ? column.renderFilterIcon({
                                                            filterOpened: column.filterOpened,
                                                        })
                                                        : null,
                                            }
                                        ),
                                    ]
                                ),
                            ]
                        )
                    })
                )
            )
        )
    },
})