import { withInstall } from '@/utils'
import Input from './src/input.vue'
import type { SFCWithInstall } from '@/utils'

export const ElInput: SFCWithInstall<typeof Input> = withInstall(Input)
export default ElInput

export * from './src/input'
export type { InputInstance } from './src/instance'
