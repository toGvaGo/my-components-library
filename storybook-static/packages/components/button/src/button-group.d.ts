import { ExtractPropTypes } from 'vue';
export declare const buttonGroupProps: {
    /**
     * @description control the size of buttons in this button-group
     */
    readonly size: any;
    /**
     * @description control the type of buttons in this button-group
     */
    readonly type: import('../../../utils').EpPropFinalized<StringConstructor, "" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
};
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
