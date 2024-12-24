import { ExtractPropTypes, StyleValue } from 'vue';
import { default as Scrollbar } from './scrollbar.vue';
export declare const scrollbarProps: {
    readonly ariaLabel: StringConstructor;
    readonly ariaOrientation: {
        readonly type: import('vue').PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __gpPropKey: true;
    };
    readonly height: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly maxHeight: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly native: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly wrapStyle: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | false | import('vue').CSSProperties | StyleValue[]) | (() => StyleValue) | (((new (...args: any[]) => string | false | import('vue').CSSProperties | StyleValue[]) | (() => StyleValue)) | null)[], unknown, unknown, "", boolean>;
    readonly wrapClass: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewClass: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
    readonly viewStyle: import('../../../utils').EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
    readonly noresize: BooleanConstructor;
    readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly always: BooleanConstructor;
    readonly minSize: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
    readonly tabindex: import('../../../utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly id: StringConstructor;
    readonly role: StringConstructor;
};
export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;
export declare const scrollbarEmits: {
    scroll: ({ scrollTop, scrollLeft, }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
};
export type ScrollbarEmits = typeof scrollbarEmits;
export type ScrollbarInstance = InstanceType<typeof Scrollbar>;
