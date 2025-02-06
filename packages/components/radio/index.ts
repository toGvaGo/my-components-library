import { withInstall, withNoopInstall } from '@/utils'

import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'
import type { SFCWithInstall } from '@/utils'

export const GpRadio: SFCWithInstall<typeof Radio> & {
  RadioButton: typeof RadioButton
  RadioGroup: typeof RadioGroup
} = withInstall(Radio, {
  RadioButton,
  RadioGroup,
})
export default GpRadio
export const GpRadioGroup: SFCWithInstall<typeof RadioGroup> =
  withNoopInstall(RadioGroup)
export const EGpRadioButton: SFCWithInstall<typeof RadioButton> =
  withNoopInstall(RadioButton)

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
export * from './src/constants'
