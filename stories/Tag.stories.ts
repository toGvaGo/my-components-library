import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpInput from '../packages/components/input/src/input.vue';
import GpTag from '../packages/components/tag/src/tag.vue';
import '../packages/theme-chalk/src/index.scss'
import { h, ref } from 'vue';

const meta = {
    title: 'Tag',
    component: GpTag,
    tags: ['autodocs'],
    argTypes: {
        round: {
            control: 'boolean',
            description: 'Whether the tag is round',
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tag = (args) => ({
    components: { GpTag },
    setup() {
        return { args };
    },
    template: `
    <div style="display:flex;gap:10px">
    <gp-tag type="primary" v-bind="args">Tag 1</gp-tag>
    <gp-tag type="success" v-bind="args">Tag 2</gp-tag>
    <gp-tag type="info" v-bind="args">Tag 3</gp-tag>
    <gp-tag type="warning" v-bind="args">Tag 4</gp-tag>
    <gp-tag type="danger" v-bind="args">Tag 5</gp-tag>
  </div>
  `,
})
export const TagSize = (args) => ({
    components: { GpTag },
    setup() {
        return { args };
    },
    template: `
    <div style="display:flex;gap:10px">
    <gp-tag size="large">Large</gp-tag>
    <gp-tag>Default</gp-tag>
    <gp-tag size="small">Small</gp-tag>
  </div>
  `,
})
TagSize.args = {
}