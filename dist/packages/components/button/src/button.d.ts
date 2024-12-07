import { Component, ExtractPropTypes } from 'vue';
export declare const buttonTypes: readonly ["default", "primary", "success", "warning", "info", "danger", ""];
export declare const buttonNativeTypes: readonly ["button", "submit", "reset"];
export declare const buttonProps: {
    readonly size: any;
    readonly disabled: BooleanConstructor;
    readonly type: import('../../../utils').EpPropFinalized<StringConstructor, "" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
    readonly icon: {
        readonly type: import('vue').PropType<import('../../../utils').GpPropMergeType<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | (((new (...args: any[]) => (string | Component) & {}) | (() => string | Component)) | null)[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly nativeType: import('../../../utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
    readonly loading: BooleanConstructor;
    readonly loadingIcon: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | (((new (...args: any[]) => (string | Component) & {}) | (() => string | Component)) | null)[], unknown, unknown, () => "Loading", boolean>;
    readonly palin: BooleanConstructor;
    readonly text: BooleanConstructor;
    readonly link: BooleanConstructor;
    readonly bg: BooleanConstructor;
    readonly autofocus: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly color: StringConstructor;
    readonly dark: BooleanConstructor;
    readonly autoInsertSpace: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly tag: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | Component) & {}) | (() => string | Component) | (((new (...args: any[]) => (string | Component) & {}) | (() => string | Component)) | null)[], unknown, unknown, "button", boolean>;
};
export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
export type ButtonType = ButtonProps['type'];
export type ButtonNativeType = ButtonProps['nativeType'];
export interface ButtonConfigContext {
    autoInsertSpace?: boolean;
}
