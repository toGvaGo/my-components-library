import { default as Form } from './src/form.vue';
import { default as FormItem } from './src/form-item.vue';
import { SFCWithInstall } from '../../utils';
export declare const GpForm: SFCWithInstall<typeof Form> & {
    FormItem: typeof FormItem;
};
export default GpForm;
export declare const GpFormItem: SFCWithInstall<typeof FormItem>;
export * from './src/form';
export * from './src/form-item';
export * from './src/types';
export * from './src/constants';
export * from './src/hooks';
export type FormInstance = InstanceType<typeof Form>;
export type FormItemInstance = InstanceType<typeof FormItem>;
