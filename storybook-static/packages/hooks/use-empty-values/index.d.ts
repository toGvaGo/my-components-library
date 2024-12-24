import { ExtractPropTypes, InjectionKey, Ref } from 'vue';
type EmptyValuesContext = ExtractPropTypes<typeof useEmptyValuesProps>;
export declare const emptyValuesContextKey: InjectionKey<Ref<EmptyValuesContext>>;
export declare const SCOPE = "use-empty-values";
export declare const DEFAULT_EMPTY_VALUES: (string | null | undefined)[];
export declare const DEFAULT_VALUE_ON_CLEAR: undefined;
export declare const useEmptyValuesProps: {
    readonly emptyValues: ArrayConstructor;
    readonly valueOnClear: {
        readonly type: import('vue').PropType<import('../../utils').GpPropMergeType<readonly [StringConstructor, NumberConstructor, BooleanConstructor, FunctionConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
};
export declare const useEmptyValues: (props: EmptyValuesContext, defaultValue?: null | undefined) => {
    emptyValues: import('vue').ComputedRef<unknown[]>;
    valueOnClear: import('vue').ComputedRef<any>;
    isEmptyValue: (value: any) => boolean;
};
export {};
