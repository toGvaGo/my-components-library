import { AppContext, ExtractPropTypes, VNode } from 'vue';
import { Mutable } from '../../../utils';
import { default as MessageConstructor } from './message.vue';
export declare const messageTypes: readonly ["success", "warning", "info", "error"];
export type messageType = typeof messageTypes[number];
export interface MessageConfigContext {
    max?: number;
    grouping?: boolean;
    duration?: number;
    offset?: number;
    showClose?: boolean;
}
export declare const messageDefaults: Mutable<{
    readonly zIndex: 0;
    readonly id: "";
    readonly customClass: "";
    readonly center: false;
    readonly dangerouslyUseHTMLString: false;
    readonly duration: 3000;
    readonly icon: undefined;
    readonly message: "";
    readonly onClose: undefined;
    readonly showClose: false;
    readonly type: "info";
    readonly plain: false;
    readonly offset: 16;
    readonly grouping: false;
    readonly repeatNum: 1;
    readonly appendTo: HTMLElement;
}>;
export declare const messageProps: {
    id: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    customClass: import('../../../utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    center: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    dangerouslyUseHTMLString: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    duration: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 3000, boolean>;
    icon: import('../../../utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component) | (((new (...args: any[]) => (string | import('vue').Component) & {}) | (() => string | import('vue').Component)) | null)[], unknown, unknown, undefined, boolean>;
    message: import('../../../utils').EpPropFinalized<(new (...args: any[]) => string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => VNode)) | (() => string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => VNode)) | (((new (...args: any[]) => string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => VNode)) | (() => string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | (() => VNode))) | null)[], unknown, unknown, "", boolean>;
    onClose: import('../../../utils').EpPropFinalized<(new (...args: any[]) => () => void) | (() => () => void) | {
        (): () => void;
        new (): any;
        readonly prototype: any;
    } | (((new (...args: any[]) => () => void) | (() => () => void) | {
        (): () => void;
        new (): any;
        readonly prototype: any;
    }) | null)[], unknown, unknown, undefined, boolean>;
    showClose: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    type: import('../../../utils').EpPropFinalized<StringConstructor, "error" | "success" | "warning" | "info", unknown, "info", boolean>;
    plain: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    offset: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 16, boolean>;
    zIndex: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    grouping: import('../../../utils').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    repeatNum: import('../../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
};
export type MessageProps = ExtractPropTypes<typeof messageProps>;
export declare const messageEmits: {
    destroy: () => boolean;
};
export type MessageEmits = typeof messageEmits;
export type MessageInstance = InstanceType<typeof MessageConstructor>;
export type MessageOptions = Partial<Mutable<Omit<MessageProps, 'id'> & {
    appendTo?: HTMLElement | string;
}>>;
export type MessageParams = MessageOptions | MessageOptions['message'];
export type MessageParamsNormalized = Omit<MessageProps, 'id'> & {
    appendTo: HTMLElement;
};
export type MessageOptionsWithType = Omit<MessageOptions, 'type'>;
export type MessageParamsWithType = MessageOptionsWithType | MessageOptions['message'];
export interface MessageHandler {
    close: () => void;
}
export type MessageFn = {
    (options?: MessageParams, appContext?: null | AppContext): MessageHandler;
    closeAll: (type?: messageType) => void;
};
export type MessageTypedFn = (options?: MessageParamsWithType, appContext?: null | AppContext) => MessageHandler;
export interface Message extends MessageTypedFn {
    success: MessageTypedFn;
    warning: MessageTypedFn;
    info: MessageTypedFn;
    error: MessageTypedFn;
}
