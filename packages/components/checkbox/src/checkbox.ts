import { UPDATE_MODEL_EVENT } from '@/constants'
import { useAriaProps, useSizeProp } from '@/hooks'
import { isBoolean, isNumber, isString } from '@/utils'

import type { ExtractPropTypes } from 'vue'
import type Checkbox from './checkbox.vue'

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
    modelValue: {
        type: [Number, String, Boolean],
        default: undefined,
    },
    label: {
        type: [String, Boolean, Number, Object],
        default: undefined,
    },
    value: {
        type: [String, Boolean, Number, Object],
        default: undefined,
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,

    name: {
        type: String,
        default: undefined,
    },
    trueValue: {
        type: [String, Number],
        default: undefined,
    },
    falseValue: {
        type: [String, Number],
        default: undefined,
    },
    trueLabel: {
        type: [String, Number],
        default: undefined,
    },
    falseLabel: {
        type: [String, Number],
        default: undefined,
    },
    id: {
        type: String,
        default: undefined,
    },
    border: Boolean,
    size: useSizeProp,
    tabindex: [String, Number],
    validateEvent: {
        type: Boolean,
        default: true,
    },
    ...useAriaProps(['ariaControls']),
}

export const checkboxEmits = {
    [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
        isString(val) || isNumber(val) || isBoolean(val),
    change: (val: CheckboxValueType) =>
        isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
export type CheckboxInstance = InstanceType<typeof Checkbox>