import { ExtractPropTypes } from 'vue';
import { default as checkboxGroup } from './checkbox-group.vue';
import { CheckboxValueType } from './checkbox';
export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[];
export declare const checkboxGroupProps: {
    readonly ariaLabel: StringConstructor;
    readonly modelValue: import('../../../utils').EpPropFinalized<(new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType) | (((new (...args: any[]) => CheckboxGroupValueType) | (() => CheckboxGroupValueType)) | null)[], unknown, unknown, () => never[], boolean>;
    readonly disabled: BooleanConstructor;
    readonly min: NumberConstructor;
    readonly max: NumberConstructor;
    readonly size: any;
    readonly fill: StringConstructor;
    readonly textColor: StringConstructor;
    readonly tag: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
    readonly validateEvent: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
};
export declare const checkboxGroupEmits: {
    "update:modelValue": (val: CheckboxGroupValueType) => boolean;
    change: (val: CheckboxValueType[]) => boolean;
};
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export type CheckboxGroupEmits = typeof checkboxGroupEmits;
export type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>;
