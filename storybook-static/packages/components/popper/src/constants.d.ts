import { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue';
import { Instance } from '@popperjs/core';
export type Measurable = {
    getBoundingClientRect: () => DOMRect;
};
export type GpPopperInjectionContext = {
    triggerRef: Ref<Measurable | undefined>;
    contentRef: Ref<HTMLElement | undefined>;
    popperInstanceRef: Ref<Instance | undefined>;
    referenceRef: Ref<Measurable | undefined>;
    role: ComputedRef<string>;
};
export type GpPopperContentInjectionContext = {
    arrowRef: Ref<HTMLElement | undefined>;
    arrowOffset: Ref<number | undefined>;
    arrowStyle: ComputedRef<CSSProperties>;
};
export declare const POPPER_INJECTION_KEY: InjectionKey<GpPopperInjectionContext>;
export declare const POPPER_CONTENT_INJECTION_KEY: InjectionKey<GpPopperContentInjectionContext>;
