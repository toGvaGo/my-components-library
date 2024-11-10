import { isClient, isIOS } from '@vueuse/core'

export const isFIrefox = (): boolean =>
    isClient && /firefox/i.test(window.navigator.userAgent)

export { isClient, isIOS }