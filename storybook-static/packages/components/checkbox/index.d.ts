import { default as Checkbox } from './src/checkbox.vue';
import { default as CheckboxButton } from './src/checkbox-button.vue';
import { default as CheckboxGroup } from './src/checkbox-group.vue';
import { SFCWithInstall } from '../../utils';
export declare const GpCheckbox: SFCWithInstall<typeof Checkbox> & {
    CheckboxButton: typeof CheckboxButton;
    CheckboxGroup: typeof CheckboxGroup;
};
export default GpCheckbox;
export declare const GpCheckboxButton: SFCWithInstall<typeof CheckboxButton>;
export declare const GpCheckboxGroup: SFCWithInstall<typeof CheckboxGroup>;
export * from './src/checkbox-group';
export * from './src/checkbox';
export * from './src/constants';
