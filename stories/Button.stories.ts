import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpButton from '../packages/components/button/src/button.vue';
import '../packages/theme-chalk/src/index.scss'
import { h } from 'vue';

const meta = {
  title: 'Button',
  component: GpButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['primary', 'secondary', 'danger', 'link'] },
      description: 'Button type',
    },
    size: {
      control: { type: 'select', options: ['small', 'large'] },
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    plain: {
      control: 'boolean',
      description: 'Whether the button has a plain style',
    },
    round: {
      control: 'boolean',
      description: 'Whether the button has a round border',
    },
    link: {
      control: 'boolean',
      description: 'Whether the button is a link button',
    },
    shouldAddSpace: {
      control: 'boolean',
      description: 'Whether there should be extra space around the text',
    },
    // 控制插槽内容
    default: {
      control: 'text',
      description: 'Button label or text content',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GpButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args) => ({
  components: { GpButton },
  setup() {
    return { args };
  },
  template: `
    <GpButton v-bind="args">
      <template #default>
        {{ args.default }}
      </template>
    </GpButton>
  `,
});
export const Button = Template.bind({});
Button.args = {
  type: '',
  size: '',
  disabled: false,
  plain: false,
  round: false,
  link: false,
  'auto-insert-space': false,
  default: 'Default',
}
export const ButtonType = (args) => ({
  components: { GpButton },
  setup() {
    return { args };
  },
  template: `
    <GpButton v-bind="{ ...args, type:'primary' }">
      <template #default>
      primary
      </template>
    </GpButton>
    <GpButton v-bind="{ ...args, type:'info' }" style="margin-left:20px">
      <template #default>
      info
      </template>
    </GpButton>
  `,
});
ButtonType.args = {
  type: '',
  size: '',
  disabled: false,
  plain: false,
  round: false,
  link: false,
  'auto-insert-space': false,
  default: 'Default',
};
export const DisabledState = Template.bind({});
DisabledState.args = {
  disabled: true,
  default: 'Disabled',
};

export const ButtonSize = (args) => ({
  components: { GpButton },
  setup() {
    return { args };
  },
  template: `
    <GpButton v-bind="{ ...args, size: 'small',default: 'small' }">
      <template #default>
      small
      </template>
    </GpButton>
    <GpButton v-bind="{ ...args, size: 'normal',default: 'normal' }" style="margin-left:20px">
      <template #default>
      normal
      </template>
    </GpButton>
    <GpButton v-bind="{ ...args, size: 'large',default: 'large' }"style="margin-left:20px">
      <template #default>
      large
      </template>
    </GpButton>
  `,
});
ButtonSize.args = {
  type: '',
  size: '',
  disabled: false,
  plain: false,
  round: false,
  link: false,
  'auto-insert-space': false,
  default: '',
};

export const AutoInsertSpace = Template.bind({});
AutoInsertSpace.args = {
  type: 'primary',
  size: '',
  disabled: false,
  plain: false,
  round: false,
  link: false,
  'auto-insert-space': true,
  default: '按钮',
};