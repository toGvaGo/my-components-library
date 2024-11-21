import { pick } from 'lodash-unified'
import { buildProps } from '@/utils'

export const ariaProps = buildProps({
    ariaLabel: String,
    ariaOrientation: {
        type: String,
        values: ['horizontal', 'vertical', 'undefined'],
    },
    ariaControls: String,
})

export const useAriaProps = <T extends keyof typeof ariaProps>(
    arias: Array<T>
) => {
    return pick<typeof ariaProps, T>(ariaProps, arias)
}