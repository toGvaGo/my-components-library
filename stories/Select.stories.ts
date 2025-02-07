import type { Meta, StoryObj } from '@storybook/vue3';

import GpSelect from '../packages/components/select/src/select.vue';
import GpOption from '../packages/components/select/src/option.vue';
import GpInput from '../packages/components/input/src/input.vue';
import '../packages/theme-chalk/src/index.scss'
import { h, ref } from 'vue';

const meta = {
    title: 'Select',
    component: GpInput,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled',
        },
        size: {
            control: { type: 'radio' },
            options: ['small', 'large'],
            description: 'Radio size',
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Select = (args) => ({
    components: { GpSelect, GpOption },
    setup() {
        const value = ref('')

        const options = [
            {
                value: 'Option1',
                label: 'Option1',
            },
            {
                value: 'Option2',
                label: 'Option2',
            },
            {
                value: 'Option3',
                label: 'Option3',
            },
            {
                value: 'Option4',
                label: 'Option4',
            },
            {
                value: 'Option5',
                label: 'Option5',
            },
        ]
        return { args, value, options };
    },
    template: `
    <gp-select v-bind="args" v-model="value" placeholder="Select" style="width: 240px">
      <gp-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </gp-select>
  `,
})
Select.args = {

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