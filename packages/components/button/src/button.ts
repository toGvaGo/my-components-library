import { useSizeProp } from '@/hooks'
import { buildProp, buildProps, definePropType, iconPropType } from '@/utils'
// import {Loading} from '@element-plus/icons-vue'
import type { Component, ExtractPropTypes } from 'vue'

export const buttonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    ''
] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export const buttonProps = buildProps({
    size: useSizeProp,
    disabled: Boolean,
    type: {
        type: String,
        values: buttonTypes,
        default: '',
    },
    icon: {
        type: iconPropType,
    },
    nativeType: {
        type: String,
        values: buttonNativeTypes,
        default: 'button'
    },
    loading: Boolean,
    loadingIcon: {
        type: iconPropType,
        default: () => 'Loading'
    },
    plain: Boolean,
    text: Boolean,
    link: Boolean,
    bg: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    color: String,
    dark: Boolean,
    autoInsertSpace: {
        type: Boolean,
        default: undefined
    },
    tag: {
        type: definePropType<string | Component>([String, Object]),
        default: 'button'
    }
} as const)
export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type'];
export type ButtonNativeType = ButtonProps['nativeType']

export interface ButtonConfigContext {
    autoInsertSpace?: boolean
}