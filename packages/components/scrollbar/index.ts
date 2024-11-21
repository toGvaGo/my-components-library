import { withInstall } from '@/utils'
import Scrollbar from './src/scrollbar.vue'

import type { SFCWithInstall } from '@/utils'

export const GpScrollbar: SFCWithInstall<typeof Scrollbar> =
    withInstall(Scrollbar)
export default GpScrollbar

export * from './src/util'
export * from './src/scrollbar'
export * from './src/thumb'
export * from './src/constants'