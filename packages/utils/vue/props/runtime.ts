import { warn } from 'vue'
import { fromPairs } from 'lodash-unified'
import { isObject } from '../../types'
import { hasOwn } from '../../objects'
import type { PropType } from 'vue'
import type {
    GpProp,
    GpPropConvert,
    GpPropInput,
    GpPropMergeType,
    IfGpProp,
    IfNativePropType,
    NativePropType
} from './types'

export const gpPropKey = '__gpPropKey'

export const definePropType = <T>(val: any): PropType<T> => val

//当val有__gpPropKey属性,且gpPropKey属性值为真值时,认为val是一个GpProp
export const isGpProp = (val: unknown): val is GpProp<any, any, any> => isObject(val) && !!(val as any)[gpPropKey]


export const buildProp = <
    Type = never,
    Value = never,
    Validator = never,
    Default extends GpPropMergeType<Type, Value, Validator> = never,
    Required extends boolean = false
>(
    prop: GpPropInput<Type, Value, Validator, Default, Required>,
    key?: string
) => {
    if (!isObject(prop) || isGpProp(prop)) return prop as any;

    //构建gpProp对象
    const { values, required, default: defaultValue, type, validator } = prop
    const _validator =
        values || validator
            ? (val: unknown) => {
                let valid = false;
                let allowedValues: unknown[] = [];
                if (values) {
                    allowedValues = Array.from(values)
                    if (hasOwn(prop, 'default')) allowedValues.push(defaultValue)
                    valid ||= allowedValues.includes(val)
                }
                if (validator) valid ||= validator(val)

                if (!valid && allowedValues.length > 0) {
                    const allowValuesText = [...new Set(allowedValues)]
                        .map(v => JSON.stringify(v))
                        .join(', ')
                    warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}`)
                }
                return valid
            }
            : undefined
    const gpProp: any = {
        type,
        required: !!required,
        validator: _validator,
        [gpPropKey]: true,
    }

    if (hasOwn(prop, 'default')) gpProp.default = defaultValue
    return gpProp
}

export const buildProps = <
    Props extends Record<
        string,
        | { [gpPropKey]: true }
        | NativePropType
        | GpPropInput<any, any, any, any, any>
    >
>(
    props: Props
): {
        [K in keyof Props]: IfGpProp<
            Props[K],
            Props[K],
            IfNativePropType<Props[K], Props[K], GpPropConvert<Props[K]>>
        >
    } =>
    fromPairs(
        Object.entries(props).map(([key, option]) => [
            key,
            buildProp(option as any, key),
        ])
    ) as any