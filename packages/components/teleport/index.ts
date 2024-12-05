import { withInstall } from '@/utils'
import Teleport from './src/teleport.vue'
import type { SFCWithInstall } from '@/utils'

export const GpTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default GpTeleport

export * from './src/teleport'
