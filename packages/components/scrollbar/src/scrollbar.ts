import { buildProps, definePropType, isNumber } from '@/utils'
import { useAriaProps } from '@/hooks'
import type { ExtractPropTypes, StyleValue } from 'vue'
import type Scrollbar from './scrollbar.vue'

export const scrollbarProps = buildProps({

    height: {
        type: [String, Number],
        default: '',
    },
    maxHeight: {
        type: [String, Number],
        default: '',
    },
    native: {
        type: Boolean,
        default: false,
    },
    wrapStyle: {
        type: definePropType<StyleValue>([String, Object, Array]),
        default: '',
    },
    wrapClass: {
        type: [String, Array],
        default: '',
    },
    viewClass: {
        type: [String, Array],
        default: '',
    },
    viewStyle: {
        type: [String, Array, Object],
        default: '',
    },
    noresize: Boolean,
    tag: {
        type: String,
        default: 'div',
    },
    always: Boolean,
    minSize: {
        type: Number,
        default: 20,
    },
    tabindex: {
        type: [String, Number],
        default: undefined,
    },
    id: String,
    role: String,
    ...useAriaProps(['ariaLabel', 'ariaOrientation']),
} as const)

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>

export const scrollbarEmits = {
    scroll: ({
        scrollTop,
        scrollLeft,
    }: {
        scrollTop: number
        scrollLeft: number
    }) => [scrollTop, scrollLeft].every(isNumber),
}
export type ScrollbarEmits = typeof scrollbarEmits

export type ScrollbarInstance = InstanceType<typeof Scrollbar>