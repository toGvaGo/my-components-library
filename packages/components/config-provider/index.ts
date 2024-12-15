import { withInstall } from '@/utils'

import ConfigProvider from './src/config-provider'
import type { SFCWithInstall } from '@/utils';

export const GpConfigProvider: SFCWithInstall<typeof ConfigProvider> = withInstall(ConfigProvider)
export default GpConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'

