// @ts-nocheck
import { isClient, isElement } from '@/utils'

import type {
    ComponentPublicInstance,
    DirectiveBinding,
    ObjectDirective,
} from 'vue'

type DocumentHandler = <T extends MouseEvent>(mouseup: T, mousedown: T) => void

type FlushList = Map<
    HTMLElement,
    {
        documentHandler: DocumentHandler
        bindingFn: (...args: unknown[]) => unknown
    }
>

const nodeList: FlushList = new Map();

if (isClient) {
    let startClick: MouseEvent | undefined
    document.addEventListener('mousedown', (e: MouseEvent) => (startClick = e))
    document.addEventListener('mouseup', (e: MouseEvent) => {
        if (startClick) {
            for (const handlers of nodeList.values()) {
                for (const { documentHandler } of handlers) {
                    documentHandler(e as MouseEvent, startClick)
                }
            }
            startClick = undefined
        }
    })
}

function createDocumentHandler(
    el: HTMLElement,
    binding: DirectiveBinding
): DocumentHandler {
    let excludes: HTMLElement[] = [];
    if (Array.isArray(binding.value)) {
        excludes = binding.arg;
    } else if (isElement(binding.arg)) {
        excludes.push(binding.arg as unknown as HTMLElement)
    }
    return function (mouseup, mousedown) {
        const popperRef = (
            binding.instance as ComponentPublicInstance<{
                popperRef: HTMLElement
            }>
        ).popperRef
        const mouseUpTarget = mouseup.target as Node;
        const mouseDownTarget = mousedown?.target as Node;
        const isBound = !binding || !binding.instance;
        const isTargetExists = !mouseUpTarget || !mouseDownTarget
        const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
        const isSelf = el === mouseUpTarget;

        const isTargetExcluded =
            (excludes.length &&
                excludes.some((item) => item?.contains(mouseUpTarget))) ||
            (excludes.length && excludes.includes(mouseDownTarget as HTMLElement))
        const isContainedByPopper =
            popperRef &&
            (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget))
        if (
            isBound ||
            isTargetExists ||
            isContainedByEl ||
            isSelf ||
            isTargetExcluded ||
            isContainedByPopper
        ) {
            return
        }
        binding.value(mouseup, mousedown)
    }
}

const ClickOutSide: ObjectDirective = {
    beforeMount(el: HTMLElement, binding: DirectiveBinding) {
        if (!nodeList.has(el)) {
            nodeList.set(el, [])
        }

        nodeList.get(el)!.push({
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value,
        })
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
        if (!nodeList.has(el)) {
            nodeList.set(el, [])
        }

        const handlers = nodeList.get(el)!
        const oldHandlerIndex = handlers.findIndex(
            (item) => item.bindingFn === binding.oldValue
        )
        const newHandler = {
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value,
        }

        if (oldHandlerIndex >= 0) {
            handlers.splice(oldHandlerIndex, 1, newHandler)
        } else {
            handlers.push(newHandler)
        }

    },
    unmounted(el: HTMLElement) {
        nodeList.delete(el)
    },
}

export default ClickOutSide