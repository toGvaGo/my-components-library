import { withInstall } from '@/utils'
import Popper from './src/popper.vue'

import GpPopperArrow from './src/arrow.vue'
import GpPopperTrigger from './src/trigger.vue'
import GpPopperContent from './src/content.vue'
import type { SFCWithInstall } from '@/utils'
import { deflate } from 'zlib'

export { GpPopperArrow, GpPopperTrigger, GpPopperContent }

export const GpPopper: SFCWithInstall<typeof Popper> = withInstall(Popper)

export default GpPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'
export * from './src/constants'

export type { Placement, Options } from '@popperjs/core'