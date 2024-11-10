import { withInstall, withNoopInstall } from '@/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'
import type { SFCWithInstall } from '@/utils'

export const GpForm: SFCWithInstall<typeof Form> & {
    FormItem: typeof FormItem
} = withInstall(Form, {
    FormItem
})

export default GpForm
export const GpFormItem: SFCWithInstall<typeof FormItem> = withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
