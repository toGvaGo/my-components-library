import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpButton from '../packages/components/button/src/button.vue';
import GpMessage from '../packages/components/message/src/message.vue';
import Message from '../packages/components/message/src/method';
import '../packages/theme-chalk/src/index.scss'
import { h } from 'vue';
import message from '../packages/components/message/src/method';

const meta = {
    title: 'Message',
    component: GpMessage,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['success', 'warning', 'info', 'error'],
            description: 'Message type',
        },
        message: {
            control: { type: 'text' },
            description: 'Message content (can be a VNode)',
        },
        plain: {
            control: { type: 'boolean' },
            description: 'Whether the message has a plain style',
        },
        center: {
            control: { type: 'boolean' },
            description: 'Whether the message has a center style',
        },

        duration: {
            control: { type: 'number' },
            description: 'Duration of the message',
        }
    },
    args: {
        type: 'info',
        message: 'This is a Message.',
        plain: false,
        center: false,
        duration: 3000,
    },
    parameters: {
    },
} satisfies Meta<typeof GpMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
    components: { GpButton, GpMessage },
    setup() {
        const open = () => {
            Message({ ...args })
        }

        return { args, open };
    },
    template: `
    <GpButton :plain="true" @click="open">
        Show message
    </GpButton>
  `,
});
export const MessageExample = Template.bind({});
MessageExample.args = {
    message: 'This is a message',
    type: 'info',
    plain: false,
    center: false,
    duration: 3000,
}

export const VNodeMessage = (args) => ({
    components: { GpButton, GpMessage },
    setup() {
        const openVn = () => {
            Message({
                message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
                    h('span', null, 'Message can be '),
                    h('i', { style: 'color: teal' }, 'VNode'),
                ]),
            })
        }
        return { args, openVn };
    },
    template: `
    <GpButton :plain="true" @click="openVn">
        VNode
    </GpButton>
  `,
});
VNodeMessage.parameters = {
    docs: {
        source: {
            code: `
            Message({
                message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
                    h('span', null, 'Message can be '),
                    h('i', { style: 'color: teal' }, 'VNode'),
                ]),
            })
  `
        },
    },
};