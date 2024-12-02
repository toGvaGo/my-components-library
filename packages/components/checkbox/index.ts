import { withInstall, withNoopInstall } from '@/utils'

import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'
import type { SFCWithInstall } from '@/utils'

export const GpCheckbox: SFCWithInstall<typeof Checkbox> & {
    CheckboxButton: typeof CheckboxButton
    CheckboxGroup: typeof CheckboxGroup
} = withInstall(Checkbox, {
    CheckboxButton,
    CheckboxGroup,
})
export default GpCheckbox
export const GpCheckboxButton: SFCWithInstall<typeof CheckboxButton> =
    withNoopInstall(CheckboxButton)
export const GpCheckboxGroup: SFCWithInstall<typeof CheckboxGroup> =
    withNoopInstall(CheckboxGroup)


export * from './src/checkbox-group'
export * from './src/checkbox'
export * from './src/constants'
