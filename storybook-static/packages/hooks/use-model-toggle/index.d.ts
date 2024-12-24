import { ExtractPropType } from '../../utils';
import { ExtractPropTypes, Ref } from 'vue';
declare const _prop: any;
declare const _event: any;
export type UseModelTogglePropsRaw<T extends string> = {
    [K in T]: typeof _prop;
} & {
    [K in `onUpdate:${T}`]: typeof _event;
};
export type UseModelTogglePropsGeneric<T extends string> = {
    [K in T]: ExtractPropType<typeof _prop>;
} & {
    [K in `onUpdate:${T}`]: ExtractPropType<typeof _event>;
};
export declare const createModelToggleComposable: <T extends string>(name: T) => {
    useModelToggle: ({ indicator, toggleReason, shouldHideWhenRouteChanges, shouldProceed, onShow, onHide, }: ModelToggleParams) => {
        hide: (event?: Event) => void;
        show: (event?: Event) => void;
        toggle: () => void;
        hasUpdateHandler: import('vue').ComputedRef<boolean>;
    };
    useModelToggleProps: UseModelTogglePropsRaw<T>;
    useModelToggleEmits: `update:${T}`[];
};
declare const useModelToggle: ({ indicator, toggleReason, shouldHideWhenRouteChanges, shouldProceed, onShow, onHide, }: ModelToggleParams) => {
    hide: (event?: Event) => void;
    show: (event?: Event) => void;
    toggle: () => void;
    hasUpdateHandler: import('vue').ComputedRef<boolean>;
}, useModelToggleProps: UseModelTogglePropsRaw<"modelValue">, useModelToggleEmits: "update:modelValue"[];
export { useModelToggle, useModelToggleEmits, useModelToggleProps };
export type UseModelToggleProps = ExtractPropTypes<typeof useModelToggleProps>;
export type ModelToggleParams = {
    indicator: Ref<boolean>;
    toggleReason?: Ref<Event | undefined>;
    shouldHideWhenRouteChanges?: Ref<boolean>;
    shouldProceed?: () => boolean;
    onShow?: (event?: Event) => void;
    onHide?: (event?: Event) => void;
};
