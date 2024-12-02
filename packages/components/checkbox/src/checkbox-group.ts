import { UPDATE_MODEL_EVENT } from '@/constants'
import { useAriaProps, useSizeProp } from '@/hooks'
import { buildProps, definePropType, isArray } from '@/utils'

import type { ExtractPropTypes } from 'vue'
import type checkboxGroup from './checkbox-group.vue'
import type { CheckboxValueType } from './checkbox'

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export const checkboxGroupProps = buildProps({
    modelValue: {
        type: definePropType<CheckboxGroupValueType>(Array),
        default: () => [],
    },
    disabled: Boolean,
    min: Number,
    max: Number,
    size: useSizeProp,
    fill: String,
    textColor: String,
    tag: {
        type: String,
        default: 'div',
    },
    validateEvent: {
        type: Boolean,
        default: true,
    },
    ...useAriaProps(['ariaLabel']),

} as const)

export const checkboxGroupEmits = {
    [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
    change: (val: CheckboxValueType[]) => isArray(val),
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
export type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>