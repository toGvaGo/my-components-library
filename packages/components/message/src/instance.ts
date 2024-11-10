import { shallowReactive } from 'vue';
import type { ComponentInternalInstance, VNode } from 'vue'
import type { Mutable } from '@/utils'
import type { MessageHandler, MessageProps } from './message';
import { i } from 'vite/dist/node/types.d-aGj9QkWt';

export type MessageContext = {
    id: string,
    vnode: VNode,
    handler: MessageHandler,
    vm: ComponentInternalInstance,
    props: Mutable<MessageProps>
}

export const instances: MessageContext[] = shallowReactive([]);

export const getInstance = (id: string) => {
    const index = instances.findIndex((item) => item.id === id);
    const current = instances[index];
    let prev: MessageContext | undefined;
    if (index > 0) {
        prev = instances[index - 1]
    }

    return { current, prev }
}

export const getLastOffset = (id: string): number => {
    const { prev } = getInstance(id);
    if (!prev) return 0;
    return prev.vm.exposed!.bottom.value
}
export const getOffsetOrSpace = (id: string, offset: number) => {
    const index = instances.findIndex((item) => item.id === id);
    return index > 0 ? 16 : offset
}