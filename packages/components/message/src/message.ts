import {
    buildProps,
    definePropType,
    iconPropType,
    isClient,
    mutable,
} from '@/utils';

import type { AppContext, ExtractPropTypes, VNode } from 'vue';
import type { Mutable } from '@/utils';
import type MessageConstructor from './message.vue';
import { group } from 'console';

export const messageTypes = ['success', 'warning', 'info', 'error'] as const

export type messageType = typeof messageTypes[number]

export interface MessageConfigContext {
    max?: number,
    grouping?: boolean,
    duration?: number,
    offset?: number,
    showClose?: boolean,
}

export const messageDefaults = mutable({
    zIndex: 0,
    id: '',

    customClass: '',
    center: false,
    dangerouslyUseHTMLString: false,
    duration: 3000,
    icon: undefined,
    message: '',
    onClose: undefined,
    showClose: false,
    type: 'info',
    plain: false,
    offset: 16,
    grouping: false,
    repeatNum: 1,
    appendTo: isClient ? document.body : (undefined as never)
} as const)

export const messageProps = buildProps({
    id: {
        type: String,
        default: messageDefaults.id,
    },

    customClass: {
        type: String,
        default: messageDefaults.customClass
    },

    center: {
        type: Boolean,
        default: messageDefaults.center
    },

    dangerouslyUseHTMLString: {
        type: Boolean,
        default: messageDefaults.dangerouslyUseHTMLString
    },

    duration: {
        type: Number,
        default: messageDefaults.duration
    },

    icon: {
        type: iconPropType,
        default: messageDefaults.icon
    },
    message: {
        type: definePropType<string | VNode | (() => VNode)>([
            String,
            Object,
            Function,
        ]),
        default: messageDefaults.message,
    },
    onClose: {
        type: definePropType<() => void>(Function),
        default: messageDefaults.onClose
    },
    showClose: {
        type: Boolean,
        default: messageDefaults.showClose
    },
    type: {
        type: String,
        values: messageTypes,
        default: messageDefaults.type
    },
    plain: {
        type: Boolean,
        default: messageDefaults.plain
    },
    offset: {
        type: Number,
        default: messageDefaults.offset
    },
    zIndex: {
        type: Number,
        default: messageDefaults.zIndex
    },
    grouping: {
        type: Boolean,
        default: messageDefaults.grouping
    },
    repeatNum: {
        type: Number,
        default: messageDefaults.repeatNum
    },
})
export type MessageProps = ExtractPropTypes<typeof messageProps>;

export const messageEmits = {
    destroy: () => true
}
export type MessageEmits = typeof messageEmits
export type MessageInstance = InstanceType<typeof MessageConstructor>

export type MessageOptions = Partial<
    Mutable<
        Omit<MessageProps, 'id'> & {
            appendTo?: HTMLElement | string
        }
    >
>
export type MessageParams = MessageOptions | MessageOptions['message']
export type MessageParamsNormalized = Omit<MessageProps, 'id'> & {
    appendTo: HTMLElement
}
export type MessageOptionsWithType = Omit<MessageOptions, 'type'>
export type MessageParamsWithType =
    | MessageOptionsWithType
    | MessageOptions['message']

export interface MessageHandler {
    close: () => void
}

export type MessageFn = {
    (options?: MessageParams, appContext?: null | AppContext): MessageHandler
    closeAll: (type?: messageType) => void
}
export type MessageTypedFn = (
    options?: MessageParamsWithType,
    appContext?: null | AppContext
) => MessageHandler

export interface Message extends MessageTypedFn {
    success: MessageTypedFn,
    warning: MessageTypedFn,
    info: MessageTypedFn,
    error: MessageTypedFn
}
