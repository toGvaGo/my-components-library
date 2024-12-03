import { buildProps, definePropType } from '@/utils'
import { popperContentProps } from '@/components/popper'
import { useAriaProps, useDelayedToggleProps } from '@/hooks'

import type TooltipContent from './content.vue'
import type { ExtractPropTypes } from 'vue'

export const useTooltipContentProps = buildProps({
    ...useDelayedToggleProps,
    ...popperContentProps,
    appendTo: {
        type: definePropType<string | HTMLElement>([String, Object]),
    },
    content: {
        type: String,
        default: '',
    },
    rawContent: Boolean,
    persistent: Boolean,

    visible: {
        type: definePropType<boolean | null>(Boolean),
        default: null,
    },
    transition: String,
    teleported: {
        type: Boolean,
        default: true,
    },
    disabled: Boolean,
    ...useAriaProps(['ariaLabel']),
} as const)


export type GpTooltipContentProps = ExtractPropTypes<
    typeof useTooltipContentProps
>

export type TooltipContentInstance = InstanceType<typeof TooltipContent>