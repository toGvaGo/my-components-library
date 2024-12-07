import { PropType } from 'vue';
import { GpProp, GpPropConvert, GpPropInput, GpPropMergeType, IfGpProp, IfNativePropType, NativePropType } from './types';
export declare const gpPropKey = "__gpPropKey";
export declare const definePropType: <T>(val: any) => PropType<T>;
export declare const isGpProp: (val: unknown) => val is GpProp<any, any, any>;
export declare const buildProp: <Type = never, Value = never, Validator = never, Default extends GpPropMergeType<Type, Value, Validator> = never, Required extends boolean = false>(prop: GpPropInput<Type, Value, Validator, Default, Required>, key?: string) => any;
export declare const buildProps: <Props extends Record<string, {
    [gpPropKey]: true;
} | NativePropType | GpPropInput<any, any, any, any, any>>>(props: Props) => { [K in keyof Props]: IfGpProp<Props[K], Props[K], IfNativePropType<Props[K], Props[K], GpPropConvert<Props[K]>>>; };
