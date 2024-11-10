import type { ExtractPropTypes, PropType } from 'vue'
import type { IfNever, UnknownToNever, WritableArray } from './util'
import { gpPropKey } from './runtime'

type Value<T> = T[keyof T]

export type ExtractPropType<T extends object> = Value<
    ExtractPropTypes<{
        key: T
    }>
>
export type ResolvePropType<T> = IfNever<
    T,
    never,
    ExtractPropType<{
        type: WritableArray<T>
        required: true
    }>
>

export type GpPropMergeType<Type, Value, Validator> =
    | IfNever<UnknownToNever<Value>, ResolvePropType<Type>, never>
    | UnknownToNever<Value>
    | UnknownToNever<Validator>


export type GpPropInputDefault<
    Required extends boolean,
    Default
> = Required extends true
    ? never
    : Default extends Record<string, unknown> | Array<any>
    ? () => Default
    : (() => Default) | Default
export type GpPropInput<
    Type,
    Value,
    Validator,
    Default extends GpPropMergeType<Type, Value, Validator>,
    Required extends boolean
> = {
    type?: Type,
    required?: Required,
    values?: readonly Value[]
    validator?: ((val: any) => val is Validator) | ((val: any) => boolean)
    default?: GpPropInputDefault<Required, Default>
}

export type NativePropType =
    | ((...args: any) => any)
    | { new(...args: any): any }
    | undefined
    | null
export type IfNativePropType<T, Y, N> = [T] extends [NativePropType] ? Y : N


export type IfEpProp<T, Y, N> = T extends { [gpPropKey]: true } ? Y : N

export type GpProp<Type, Default, Required> = {
    readonly type: PropType<Type>
    readonly required: [Required] extends [true] ? true : false
    readonly validator: ((val: unknown) => boolean) | undefined
    [gpPropKey]: true
} & IfNever<Default, unknown, { readonly default: Default }>

export type EpPropConvert<Input> = Input extends GpPropInput<
    infer Type,
    infer Value,
    infer Validator,
    any,
    infer Required
> ? EpPropFinalized<Type, Value, Validator, Input['default'], Required> : never

export type EpPropFinalized<Type, Value, Validator, Default, Required> = GpProp<
    GpPropMergeType<Type, Value, Validator>,
    UnknownToNever<Default>,
    Required
>