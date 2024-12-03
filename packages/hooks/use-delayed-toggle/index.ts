import { unref } from 'vue'
import { buildProps, isNumber } from '@/utils'
import { useTimeout } from '../use-timeout'

import type { ExtractPropTypes, ToRefs } from 'vue'

export const useDelayedToggleProps = buildProps({
    showAfter: {
        type: Number,
        default: 0,
    },
    hideAfter: {
        type: Number,
        default: 200,
    },
    autoClose: {
        type: Number,
        default: 0,
    },
} as const)

export type UseDelayedToggleProps = {
    open: (event?: Event) => void
    close: (event?: Event) => void
} & ToRefs<ExtractPropTypes<typeof useDelayedToggleProps>>

export const useDelayedToggle = ({
    showAfter,
    hideAfter,
    autoClose,
    open,
    close,
}: UseDelayedToggleProps) => {
    const { registerTimeout } = useTimeout()
    const {
        registerTimeout: registerTimeoutForAutoClose,
        cancelTimeout: cancelTimeoutForAutoClose,
    } = useTimeout()

    const onOpen = (event?: Event) => {
        registerTimeout(() => {
            open(event)

            const _autoClose = unref(autoClose)
            if (isNumber(_autoClose) && _autoClose > 0) {
                registerTimeoutForAutoClose(() => {
                    close(event)
                }, _autoClose)
            }
        }, unref(showAfter))
    }

    const onClose = (event?: Event) => {
        cancelTimeoutForAutoClose()

        registerTimeout(() => {
            close(event)
        }, unref(hideAfter))
    }

    return {
        onOpen,
        onClose,
    }
}