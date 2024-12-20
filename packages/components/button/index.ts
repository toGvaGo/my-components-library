import { withInstall, withNoopInstall } from '@/utils'
import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue'
import type { SFCWithInstall } from '@/utils'

export const GpButtonGroup: SFCWithInstall<typeof ButtonGroup> =
    withNoopInstall(ButtonGroup)

export const GpButton: SFCWithInstall<typeof Button> & {
    ButtonGroup: typeof ButtonGroup
} = withInstall(Button, {
    ButtonGroup,
})
export default GpButton

export * from './src/button';
export type { ButtonInstance } from './src/instance'