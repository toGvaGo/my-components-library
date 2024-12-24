import { default as Button } from './src/button.vue';
import { default as ButtonGroup } from './src/button-group.vue';
import { SFCWithInstall } from '../../utils';
export declare const GpButtonGroup: SFCWithInstall<typeof ButtonGroup>;
export declare const GpButton: SFCWithInstall<typeof Button> & {
    ButtonGroup: typeof ButtonGroup;
};
export default GpButton;
export * from './src/button';
export type { ButtonInstance } from './src/instance';
