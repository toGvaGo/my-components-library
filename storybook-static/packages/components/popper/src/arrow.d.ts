import { ExtractPropTypes } from 'vue';
import { default as Arrow } from './arrow.vue';
export declare const popperArrowProps: {
    readonly arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
};
export type PopperArrowProps = ExtractPropTypes<typeof popperArrowProps>;
export type PopperArrowInstance = InstanceType<typeof Arrow>;
export declare const usePopperArrowProps: {
    readonly arrowOffset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
};
export type UsePopperArrowProps = PopperArrowProps;
export type ElPopperArrowInstance = PopperArrowInstance;
