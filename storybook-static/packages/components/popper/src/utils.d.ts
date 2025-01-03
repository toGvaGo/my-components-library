import { ComponentPublicInstance } from 'vue';
import { MaybeRef } from '@vueuse/core';
import { Modifier } from '@popperjs/core';
import { Measurable } from './constants';
import { PopperCoreConfigProps } from './content';
export declare const buildPopperOptions: (props: PopperCoreConfigProps, modifiers?: Modifier<any, any>[]) => {
    modifiers: (Modifier<any, any> | {
        name: string;
        options: {
            offset: number[];
            padding?: undefined;
            fallbackPlacements?: undefined;
            gpuAcceleration?: undefined;
        };
    } | {
        name: string;
        options: {
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
            offset?: undefined;
            fallbackPlacements?: undefined;
            gpuAcceleration?: undefined;
        };
    } | {
        name: string;
        options: {
            padding: number;
            fallbackPlacements: import('@popperjs/core').Placement[] | undefined;
            offset?: undefined;
            gpuAcceleration?: undefined;
        };
    } | {
        name: string;
        options: {
            gpuAcceleration: import('../../../utils').GpPropMergeType<BooleanConstructor, unknown, unknown>;
            offset?: undefined;
            padding?: undefined;
            fallbackPlacements?: undefined;
        };
    })[];
    placement: "bottom" | "left" | "right" | "top" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    strategy: "fixed" | "absolute";
    onFirstUpdate?: ((arg0: Partial<import('@popperjs/core').State>) => void) | undefined;
};
export declare const unwrapMeasurableEl: ($el: MaybeRef<Measurable | undefined | ComponentPublicInstance>) => HTMLElement | undefined;
