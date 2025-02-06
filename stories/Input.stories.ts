import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpButton from '../packages/components/button/src/button.vue';
import GpInput from '../packages/components/input/src/input.vue';
import '../packages/theme-chalk/src/index.scss'
import { h, ref } from 'vue';

const meta = {
    title: 'Input',
    component: GpInput,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input = (args) => ({
    components: { GpInput },
    setup() {
        const input = ref('Please input')
        return { args, input };
    },
    template: `
    <gp-input v-bind="args" v-model="input" style="width: 240px" placeholder="Please input" />
  `,
})
Input.args = {

}
export const DisabledState = (args) => ({
    components: { GpInput },
    setup() {
        const input = ref('Please input')
        return { args, input };
    },
    template: `
    <gp-input v-bind="args" v-model="input" style="width: 240px" placeholder="Please input" />
  `,
})
DisabledState.args = {
    disabled: true
}