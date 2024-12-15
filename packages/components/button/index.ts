import { withInstall, withNoopInstall } from '@/utils'
import Button from './src/button.vue';
// import ButtonGroup from './src/button-group.vue'
import type { SFCWithInstall } from '@/utils'

// export const ElButton: SFCWithInstall<typeof Button> & {
//     ButtonGroup: typeof ButtonGroup
// } = withInstall(Button, {
//     ButtonGroup
// })
export const GpButton: SFCWithInstall<typeof Button> = withInstall(Button);
export default GpButton

export * from './src/button';
export type { ButtonInstance } from './src/instance'