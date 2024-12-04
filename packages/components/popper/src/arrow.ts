import { buildProps } from '@/utils'

import type { ExtractPropTypes } from 'vue'
import type Arrow from './arrow.vue'

export const popperArrowProps = buildProps({
    arrowOffset: {
        type: Number,
        default: 5,
    },
} as const)

export type PopperArrowProps = ExtractPropTypes<typeof popperArrowProps>

export type PopperArrowInstance = InstanceType<typeof Arrow>

//Would be deprecated
export const usePopperArrowProps = popperArrowProps
export type UsePopperArrowProps = PopperArrowProps
export type ElPopperArrowInstance = PopperArrowInstance
