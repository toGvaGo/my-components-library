import { withInstall } from '@/utils'
import Watermark from './src/watermark.vue'
import type { SFCWithInstall } from '@/utils'

export const GpWatermark: SFCWithInstall<typeof Watermark> =
  withInstall(Watermark)
export default GpWatermark

export * from './src/watermark'
