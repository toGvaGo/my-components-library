import { ExtractPropTypes } from 'vue';
import { default as Popper } from './popper.vue';
declare const effects: readonly ["light", "dark"];
declare const triggers: readonly ["click", "contextmenu", "hover", "focus"];
export declare const Effect: {
    readonly LIGHT: "light";
    readonly DARK: "dark";
};
export declare const roleTypes: readonly ["dialog", "grid", "group", "listbox", "menu", "navigation", "tooltip", "tree"];
export type PopperEffect = typeof effects[number];
export type PopperTrigger = typeof triggers[number];
export declare const popperProps: {
    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
};
export type PopperProps = ExtractPropTypes<typeof popperProps>;
export type PopperInstance = InstanceType<typeof Popper>;
export declare const usePopperProps: {
    readonly role: import('../../../utils').EpPropFinalized<StringConstructor, "grid" | "listbox" | "menu" | "tooltip" | "dialog" | "group" | "navigation" | "tree", unknown, "tooltip", boolean>;
};
export type UsePopperProps = PopperProps;
export {};
