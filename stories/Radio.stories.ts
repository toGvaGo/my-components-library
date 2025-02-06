import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpButton from '../packages/components/button/src/button.vue';
import GpInput from '../packages/components/input/src/input.vue';
import GpRadioGroup from '../packages/components/radio/src/radio-group.vue';
import GpRadio from '../packages/components/radio/src/radio.vue';
import '../packages/theme-chalk/src/index.scss'
import { h, ref } from 'vue';

const meta = {
    title: 'Radio',
    component: GpRadio,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['small', 'large'],
            description: 'Radio size',
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GpRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radio = (args) => ({
    components: { GpRadio, GpRadioGroup },
    setup() {
        const radio = ref('1')
        return { args, radio };
    },
    template: `
    <div class="mb-2 ml-4">
    <gp-radio-group v-model="radio">
      <gp-radio value="1" v-bind="args">Option 1</gp-radio>
      <gp-radio value="2" v-bind="args">Option 2</gp-radio>
    </gp-radio-group>
  </div>
  `,
})
Radio.args = {
}
export const DisabledState = (args) => ({
    components: { GpRadio, GpRadioGroup },
    setup() {
        const radio = ref('1')
        return { args, radio };
    },
    template: `
    <div class="mb-2 ml-4">
    <gp-radio-group v-model="radio">
      <gp-radio value="1" v-bind="args">Option 1</gp-radio>
      <gp-radio value="2" v-bind="args">Option 2</gp-radio>
    </gp-radio-group>
  </div>
  `,
})
DisabledState.args = {
    size: 'large',
    disabled: true
}
// export const RaidoSize = (args) => ({

// })