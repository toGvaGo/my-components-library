import { buildProps, definePropType } from '@/utils'
import { popperTriggerProps } from '@/components/popper'
import { EVENT_CODE } from '@/constants'
import type { Arrayable } from '@/utils'
import type { ExtractPropTypes } from 'vue'

export type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'


export const useTooltipTriggerProps = buildProps({
    ...popperTriggerProps,
    disabled: Boolean,
    trigger: {
        type: definePropType<Arrayable<TooltipTriggerType>>([String, Array]),
        default: 'hover',
    },
    triggerKeys: {
        type: definePropType<string[]>(Array),
        default: () => [EVENT_CODE.enter, EVENT_CODE.space],
    },

} as const)

export type ElTooltipTriggerProps = ExtractPropTypes<
    typeof useTooltipTriggerProps
>