import { placements } from '@popperjs/core'
import { buildProps, definePropType } from '@/utils'
import { useAriaProps } from '@/hooks'

import type { PopperEffect } from './popper'
import type { ExtractPropTypes, StyleValue } from 'vue'
import type { Options, Placement } from '@popperjs/core'
import type { Measurable } from './constants'
import type Content from './content.vue'

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

const POSITIONING_STRATEGIES = ['fixed', 'absolute'] as const

export interface CreatePopperInstanceParams {
    referenceEl: Measurable
    popperContentEl: HTMLElement
    arrowEl: HTMLElement | undefined
}

export const popperCoreConfigProps = buildProps({
    boundariesPadding: {
        type: Number,
        default: 0,
    },
    fallbackPlacements: {
        type: definePropType<Placement[]>(Array),
        default: undefined,
    },
    gpuAcceleration: {
        type: Boolean,
        default: true,
    },
    offset: {
        type: Number,
        default: 12,
    },
    placement: {
        type: String,
        values: placements,
        default: 'bottom',
    },
    popperOptions: {
        type: definePropType<Partial<Options>>(Object),
        default: () => ({}),
    },
    strategy: {
        type: String,
        values: POSITIONING_STRATEGIES,
        default: 'absolute',
    },
} as const)
export type PopperCoreConfigProps = ExtractPropTypes<
    typeof popperCoreConfigProps
>

export const popperContentProps = buildProps({
    ...popperCoreConfigProps,
    id: String,
    style: {
        type: definePropType<StyleValue>([String, Array, Object]),
    },
    className: {
        type: definePropType<ClassType>([String, Array, Object]),
    },
    effect: {
        type: definePropType<PopperEffect | string>(String),
        default: 'dark',
    },
    visible: Boolean,
    enterable: {
        type: Boolean,
        default: true,
    },
    pure: Boolean,
    focusOnShow: {
        type: Boolean,
        default: false,
    },
    trapping: {
        type: Boolean,
        default: false,
    },
    popperClass: {
        type: definePropType<ClassType>([String, Array, Object]),
    },
    popperStyle: {
        type: definePropType<StyleValue>([String, Array, Object]),
    },
    referenceEl: {
        type: definePropType<HTMLElement>(Object),
    },
    triggerTargetEl: {
        type: definePropType<HTMLElement>(Object),
    },
    stopPopperMouseEvent: {
        type: Boolean,
        default: true,
    },
    virtualTriggering: Boolean,
    zIndex: Number,
    ...useAriaProps(['ariaLabel']),
} as const)
export type PopperContentProps = ExtractPropTypes<typeof popperContentProps>

export const popperContentEmits = {
    mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
    mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
    focus: () => true,
    blur: () => true,
    close: () => true,
}
export type PopperContentEmits = typeof popperContentEmits

export type PopperContentInstance = InstanceType<typeof Content>

// would be deprecated
export const usePopperCoreConfigProps = popperCoreConfigProps
export const usePopperContentProps = popperContentProps
export const usePopperContentEmits = popperContentEmits
export type UsePopperCoreConfigProps = PopperCoreConfigProps
export type UsePopperContentProps = PopperContentProps
export type ElPopperArrowContent = PopperContentInstance
