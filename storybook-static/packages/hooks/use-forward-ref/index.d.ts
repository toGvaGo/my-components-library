import { InjectionKey, ObjectDirective, Ref } from 'vue';
type ForwardRefSetter = <T>(el: T) => void;
export type ForwardRefInjectionContext = {
    setForwardRef: ForwardRefSetter;
};
export declare const FORWARD_REF_INJECTION_KEY: InjectionKey<ForwardRefInjectionContext>;
export declare const useForwardRef: <T>(forwardRef: Ref<T | null>) => void;
export declare const useForwardRefDirective: (setForwardRef: ForwardRefSetter) => ObjectDirective;
export {};
