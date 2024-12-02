import { withInstall } from "@/utils";
import Tooltip from './src/tooltip.vue'
import type { SFCWithInstall } from '@/utils'

export const GpTooltip: SFCWithInstall<typeof Tooltip> = withInstall(Tooltip)
export * from './src/tooltip'
export * from './src/trigger'
export * from './src/content'
export * from './src/constants'
export default GpTooltip
