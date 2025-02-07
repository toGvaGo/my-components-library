import type { Meta, StoryObj } from '@storybook/vue3';

import GpDivider from '../packages/components/divider/src/divider.vue';
import '../packages/theme-chalk/src/index.scss'
import { h, ref } from 'vue';

const meta = {
    title: 'Divider',
    component: GpDivider,
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: { type: 'radio' },
            options: ['horizontal', 'vertical'],
            default: 'horizontal',
            description: '分割线方向',
        },
        borderStyle: {
            control: { type: 'radio' },
            options: ['dashed', 'dotted', 'double', 'solid'],
            default: 'solid',
            description: '分割线样式',
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GpDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const divider = (args) => ({
    components: { GpDivider },
    setup() {
        return { args };
    },
    template: `
    <div>
    <span>
      One sentence.
    </span>
    <gp-divider v-bind="args" />
    <span>
     Another sentence.
    </span>
  </div>
  `,
})
export const contentDivider = (args) => ({
    components: { GpDivider },
    setup() {
        return { args };
    },
    template: `
    <div>
    <span>
      A long long long long long long long long long long long long sentence.
    </span>
    <gp-divider content-position="left">some content</gp-divider>
    <span>
     Another long long long long long long long long long long long long sentence.
    </span>
    <gp-divider content-position="center">some content</gp-divider>
    <span>
     One more long long  sentence.
    </span>
    <gp-divider content-position="right">some content</gp-divider>
    <span>
     Last long sentence.
    </span>
  </div>
  `,
})