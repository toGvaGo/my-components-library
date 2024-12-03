import { buildProps } from '@/utils'
import { createModelToggleComposable } from '@/hooks'
import { popperArrowProps, popperProps } from '@/components/popper'
import { useTooltipContentProps } from './content'
import { useTooltipTriggerProps } from './trigger'
import type Tooltip from './tooltip.vue'

import type { ExtractPropTypes } from 'vue'

export const {
    useModelToggleProps: useTooltipModelToggleProps,
    useModelToggleEmits: useTooltipModelToggleEmits,
    useModelToggle: useTooltipModelToggle,
} = createModelToggleComposable('visible' as const)


export const useTooltipProps = buildProps({
    ...popperProps,
    ...useTooltipModelToggleProps,
    ...useTooltipContentProps,
    ...useTooltipTriggerProps,
    ...popperArrowProps,

    showArrow: {
        type: Boolean,
        default: true,
    },
})

export const tooltipEmits = [
    ...useTooltipModelToggleEmits,
    'before-show',
    'before-hide',
    'show',
    'hide',
    'open',
    'close',
]

export type GpTooltipProps = ExtractPropTypes<typeof useTooltipProps>

export type TooltipInstance = InstanceType<typeof Tooltip>