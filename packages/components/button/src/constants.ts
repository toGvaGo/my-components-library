import type { InjectionKey } from "vue";

import type { ButtonProps } from './button'

export interface buttonGroupContext {
    size?: ButtonProps['size']
    type?: ButtonProps['type']
}

export const buttonGroupContextKey: InjectionKey<buttonGroupContext> = Symbol('buttonGroupContextKey')