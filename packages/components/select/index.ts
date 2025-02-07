import { withInstall, withNoopInstall } from '@/utils'

import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'
import type { SFCWithInstall } from '@/utils'

export const GpSelect: SFCWithInstall<typeof Select> & {
  Option: typeof Option
  OptionGroup: typeof OptionGroup
} = withInstall(Select, {
  Option,
  OptionGroup,
})
export default GpSelect
export const ElOption: SFCWithInstall<typeof Option> = withNoopInstall(Option)
export const ElOptionGroup: SFCWithInstall<typeof OptionGroup> =
  withNoopInstall(OptionGroup)

export * from './src/token'
