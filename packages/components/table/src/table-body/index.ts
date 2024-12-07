// @ts-nocheck

import {
    defineComponent,
    getCurrentInstance,
    h,
    inject,
    onUnmounted,
    watch,
} from 'vue'
import { addClass, isClient, rAF, removeClass } from '@/utils'
import { useNamespace } from '@/hooks'
import useLayoutObserver from '../layout-observer'
import { removePopper } from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'
import useRender from './render-helper'
import defaultProps from './defaults'

import type { VNode } from 'vue'

export default defineComponent({
    name: 'GpTableBody',
    props: defaultProps,
    setup(props) {
        const instance = getCurrentInstance()
        const parent = inject(TABLE_INJECTION_KEY)
        const ns = useNamespace('table')
        const { wrappedRowRender, tooltipContent, tooltipTrigger } =
            useRender(props)
        const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent!)

        const hoveredCellList = []
        watch(props.store.states.hoverRow, (newVal: any, oldVal: any) => {
            const el = instance?.vnode.el as HTMLElement
            const rows = Array.from(el?.children || []).filter((e) =>
                e?.classList.contains(`${ns.e('row')}`)
            )

            let rowNum = newVal
            const childNodes = rows[rowNum]?.childNodes
            if (childNodes?.length) {
                let control = 0;
                const indexes = Array.from(childNodes).reduce((acc, item, index) => {
                    if (childNodes[index]?.colSpan > 1) {
                        control = childNodes[index]?.colSpan
                    }
                    if (item.nodeName !== 'TD' && control === 0) {
                        acc.push(index)
                    }
                    control > 0 && control--
                    return acc
                }, [])

                indexes.forEach((rowIndex) => {
                    rowNum = newVal
                    while (rowNum > 0) {
                        const preChildNodes = rows[rowNum - 1]?.childNodes
                        if (
                            preChildNodes[rowIndex] &&
                            preChildNodes[rowIndex].nodeName === 'TD' &&
                            preChildNodes[rowIndex].rowSpan > 1
                        ) {
                            addClass(preChildNodes[rowIndex], 'hover-cell')
                            hoveredCellList.push(preChildNodes[rowIndex])
                            break
                        }
                        rowNum--
                    }
                })

            } else {
                hoveredCellList.forEach((item) => removeClass(item, 'hover-cell'))
                hoveredCellList.length = 0
            }
            if (!props.store.states.isComplex.value || !isClient) return

            rAF(() => {
                const oldRow = rows[oldVal]
                const newRow = rows[newVal]

                if (oldRow && !oldRow.classList.contains('hover-fixed-row')) {
                    removeClass(oldRow, 'hover-row')
                }
                if (newRow) {
                    addClass(newRow, 'hover-row')
                }
            })


        })
        onUnmounted(() => {
            removePopper?.()
        })

        return {
            ns,
            onColumnsChange,
            onScrollableChange,
            wrappedRowRender,
            tooltipContent,
            tooltipTrigger,
        }
    },
    render() {
        const { wrappedRowRender, store } = this
        const data = store.states.data.value || []


        return h('tbody', { tabIndex: -1 }, [
            data.reduce((acc: VNode[], row) => {
                return acc.concat(wrappedRowRender(row, acc.length))
            }, [])
        ])

    }
})