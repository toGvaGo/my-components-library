// @ts-nocheck
import { isRef, nextTick, ref } from 'vue'
import { hasOwn, isClient } from '@/utils'
import { parseHeight } from './util'
import type { Ref } from 'vue'

import type { TableColumnCtx } from './table-column/defaults'
import type { TableHeader } from './table-header'
import type { Table } from './table/defaults'
import type { Store } from './store'


const DEFAULT_WIDTH = 80

class TableLayout<T> {
    observers: TableHeader[]
    table: Table<T>
    store: Store<T>
    columns: TableColumnCtx<T>[]
    fit: boolean
    showHeader: boolean

    height: Ref<null | number>
    scrollX: Ref<boolean>
    scrollY: Ref<boolean>
    bodyWidth: Ref<null | number>
    fixedWidth: Ref<null | number>
    rightFixedWidth: Ref<null | number>
    tableHeight: Ref<null | number>
    headerHeight: Ref<null | number>
    appendHeight: Ref<null | number>
    footerHeight: Ref<null | number>
    gutterWidth: number

    constructor(options: Record<string, any>) {
        this.observers = []
        this.table = null
        this.store = null
        this.columns = []
        this.fit = true
        this.showHeader = true
        this.height = ref(null)
        this.scrollX = ref(false)
        this.scrollY = ref(false)
        this.bodyWidth = ref(null)
        this.fixedWidth = ref(null)
        this.rightFixedWidth = ref(null)
        this.gutterWidth = 0
        for (const name in options) {
            if (hasOwn(options, name)) {
                if (isRef(this[name])) {
                    this[name as string].value = options[name]
                } else {
                    this[name as string] = options[name]
                }
            }
        }
        if (!this.table) {
            throw new Error('table is required for table layout')
        }
        if (!this.store) {
            throw new Error('store is required for table layout')
        }
    }

    updateScrollY(): boolean {
        const height = this.height.value

        if (height === null) return false

        const scrollBarRef = this.table.refs.scrollBarRef
        if (this.table.vnode.el && scrollBarRef?.wrapRef) {
            let scrollY = true
            const prevScrollY = this.scrollY.value
            scrollY = scrollBarRef.wrapRef.scrollHeight > scrollBarRef.wrapRef.clientHeight
            this.scrollY.value = scrollY
            return prevScrollY !== scrollY
        }

        return false;
    }

    setHeight(value: string | number, prop = 'height') {
        if (!isClient) return
        const el = this.table.vnode.el
        value = parseHeight(value)
        this.height.value = Number(value)

        if (!el && (value || value === 0)) {
            return nextTick(() => this.setHeight(value, prop))
        }

        if (typeof value === 'number') {
            el.style[prop] = `${value}px`
            this.updateElstHeight()
        } else if (typeof value === 'string') {
            el.style[prop] = value
            this.updateElstHeight()
        }

    }

    setMaxHeight(value: string | number) {
        this.setHeight(value, 'maxHeight')
    }

    getFlattenColumns(): TableColumnCtx<T>[] {
        const falttenColumns = []
        const columns = this.table.store.states.columns.value
        columns.forEach((column) => {
            if (column.isColumnGroup) {
                falttenColumns.push.apply(falttenColumns, column.columns)
            } else {
                falttenColumns.push(column)
            }
        })

        return falttenColumns
    }

    updateElsHeight() {
        this.updateScrollY();
        this.notifyObservers('scrollable')
    }

    headerDisplayNone(elm: HTMLElement) {
        if (!elm) return true

        let headerChild = elm
        while (headerChild.tagName !== 'DIV') {
            if (getComputedStyle(headerChild).display === 'none') {
                return true
            }
            headerChild = headerChild.parentElement
        }

        return false
    }

    updateColumnsWidth() {
        if (!isClient) return

        const fit = this.fit;
        const bodyWidth = this.table.vnode.el.clientWidth;
        let bodyMinWidth = 0;

        const falttenColumns = this.getFlattenColumns()
        const flexColumns = falttenColumns.filter((column) =>
            typeof column.width !== 'number')
        falttenColumns.forEach((column) => {
            if (typeof column.width === 'number' && column.realWidth) {
                column.realWidth = null
            }
        })

        if (flexColumns.length > 0 && fit) {
            falttenColumns.forEach((column) => {
                bodyMinWidth += Number(column.width || column.minWidth || DEFAULT_WIDTH)
            })
            if (bodyMinWidth <= bodyWidth) {
                this.scrollX.value = false

                const totalFlexWidth = bodyWidth - bodyMinWidth
                if (flexColumns.length === 1) {
                    flexColumns[0].realWidth =
                        Number(flexColumns[0].minWidth || DEFAULT_WIDTH) + totalFlexWidth
                } else {
                    const allColumnsWidth = flexColumns.reduce(
                        (prev, column) => prev + Number(column.minWidth || DEFAULT_WIDTH),
                        0
                    )
                    const flexWidthPerPixel = totalFlexWidth / allColumnsWidth
                    let noneFirstWidth = 0

                    flexColumns.forEach((column, index) => {
                        if (index === 0) return
                        const flexWidth = Math.floor(
                            Number(column.minWidth || DEFAULT_WIDTH) * flexWidthPerPixel
                        )
                        noneFirstWidth += flexWidth
                        column.realWidth = Number(column.minWidth || DEFAULT_WIDTH) + flexWidth
                    })

                    flexColumns[0].realWidth =
                        Number(flexColumns[0].minWidth || DEFAULT_WIDTH) +
                        totalFlexWidth -
                        noneFirstWidth
                }
            } else {
                this.scrollX.value = true
                flexColumns.forEach((column) => {
                    column.realWidth = Number(column.minWidth)
                })
            }

            this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth)
            this.table.state.resizeState.value.width = this.bodyWidth.value
        } else {
            falttenColumns.forEach((column) => {
                if (!column.width && !column.minWidth) {
                    column.realWidth = DEFAULT_WIDTH
                } else {
                    column.realWidth = Number(column.width || column.minWidth)
                }
                bodyMinWidth += column.realWidth
            })
            this.scrollX.value = bodyMinWidth > bodyWidth
            this.bodyWidth.value = bodyMinWidth
        }

        const fixedColumns = this.store.states.fixedColumns.value

        if (fixedColumns.length > 0) {
            let fixedWidth = 0;
            fixedColumns.forEach((column) => {
                fixedWidth += Number(column.realWidth || column.width)
            })

            this.fixedWidth.value = fixedWidth
        }

        const rightFixedColumns = this.store.states.rightFixedColumns.value

        if (rightFixedColumns.length > 0) {
            let rightFixedWidth = 0
            rightFixedColumns.forEach((column) => {
                rightFixedWidth += Number(column.realWidth || column.width)
            })
        }
        this.notifyObservers('columns')
    }

    addObserver(observer: TableHeader) {
        this.observers.push(observer)
    }

    removeObserver(observer: TableHeader) {
        const index = this.observers.indexOf(observer)
        if (index !== -1) {
            this.observers.splice(index, 1)
        }
    }

    notifyObservers(event: string) {
        const observers = this.observers
        observers.forEach((observer) => {
            switch (event) {
                case 'columns':
                    observer.state?.onColumnsChange(this)
                    break;
                case 'scrollable':
                    observer.state?.onScrollableChange(this)
                    break
                default:
                    throw new Error(`event ${event} is not supported`)
                    break
            }
        })
    }

}

export default TableLayout