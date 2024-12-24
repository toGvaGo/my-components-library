import { ExtractPropTypes } from 'vue';
import { default as Teleport } from './teleport.vue';
export declare const teleportProps: {
    readonly to: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement) | (((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement)) | null)[], unknown, unknown>>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};
export type TeleportProps = ExtractPropTypes<typeof teleportProps>;
export type TeleportInstance = InstanceType<typeof Teleport>;
