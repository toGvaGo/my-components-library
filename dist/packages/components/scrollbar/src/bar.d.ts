import { ExtractPropTypes } from 'vue';
import { default as Bar } from './bar.vue';
export declare const barProps: {
    readonly always: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly minSize: {
        readonly type: import('vue').PropType<number>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
};
export type BarProps = ExtractPropTypes<typeof barProps>;
export type BarInstance = InstanceType<typeof Bar>;
