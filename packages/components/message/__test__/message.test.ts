import { ComponentInternalInstance, h, nextTick } from 'vue'
import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils';
import Message from '../src/message.vue'
import { TypeComponentsMap } from '@/utils'

import type { CSSProperties, Component, ComponentPublicInstance } from 'vue'


const AXIOM = 'Then more you know, the less you understand.'
type MessageInstance = ComponentPublicInstance<{
    visible: boolean
    iconComponent: string | Component
    customClass: CSSProperties
}>

// const onClose = vi.fn()
// const _mount = makeMount(Message, {
//     props: {
//         onClose,
//     }
// })


describe('Message.vue', () => {
    describe('render', () => {
        test('basic render test', () => {

            const wrapper = mount(Message, {
                slots: {
                    default: () => h('span', { class: 'text-node' }, AXIOM),
                },
            });
            expect(wrapper.text()).toEqual(AXIOM)
            expect(wrapper.find('.text-node').exists()).toBe(true)
        })
        test('should be able to render raw HTML with dangerouslyUseHTMLString prop', () => {
            const tagClass = 'test-node'
            const wrapper = mount(Message, {
                props: {
                    dangerouslyUseHTMLString: true,
                    message: `<strong class="${tagClass}"'>${AXIOM}</strong>`
                },
            });
            expect(wrapper.find(`.${tagClass}`).exists()).toBe(true)
        })
    })

    describe('Message.type', () => {
        test('should be able to set type', () => {
            for (const type of ['success', 'warning', 'info', 'error'] as const) {
                const wrapper = mount(Message, {
                    props: {
                        type
                    }
                })
                expect(wrapper.find(`.gp-message--${type}`).exists()).toBe(true)
                // console.log(TypeComponentsMap[type])
                // expect(wrapper.findComponent(TypeComponentsMap[type]).exists()).toBe(true)
            }
        })
        // test('should not be able to set invalid type icon', () => {
        //     const type = "invalid"
        //     const wrapper = mount(Message, {
        //         props: {
        //             type
        //         }
        //     })
        //     console.log(wrapper.html())
        //     expect(wrapper.find(`.gp-message--${type}`).exists()).toBe(false)
        // })
    })
})