import { withInstall } from '@/utils'

import Divider from './src/divider.vue'
import type { SFCWithInstall } from '@/utils'

export const GpDivider: SFCWithInstall<typeof Divider> = withInstall(Divider)
export default GpDivider

export * from './src/divider'
