import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpCheckbox from '../packages/components/checkbox/src/checkbox.vue';
import GpCheckboxGroup from '../packages/components/checkbox/src/checkbox-group.vue';
import GpButton from '../packages/components/button/src/button.vue';
import GpScrollbar from '../packages/components/scrollbar/src/scrollbar.vue';
import '../packages/theme-chalk/src/index.scss'
import { ref } from 'vue';

const meta = {
    title: 'scrollbar',
    component: GpScrollbar,
    tags: ['autodocs'],
    argTypes: {
        height: {
            control: { type: 'text' },
            description: '滚动条高度',
        },
        native: {
            control: { type: 'boolean' },
            description: '是否使用原生滚动条',
        },
        always: {
            control: { type: 'boolean', default: false },
            default: false,
            description: '滚动条总是显示',
        }
    },
    args: {

    },
    parameters: {
    },
} satisfies Meta<typeof GpScrollbar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Scrollbar = (args) => ({
    components: { GpScrollbar, GpButton },
    setup() {
        return { args };
    },
    template: `
    <div style="margin-bottom:20px">
        <gp-scrollbar v-bind="args">
            <p v-for="item in 20" :key="item" style=" display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;background: var(--gp-color-primary-light-9);
  color: var(--gp-color-primary);">{{ item }}</p>
        </gp-scrollbar>
        </div>
  `,

});
Scrollbar.args = {
    height: 400,
    native: false,
    always: false,
};
Scrollbar.parameters = {
    docs: {
        source: {
            code: `   
        <div style="margin-bottom:20px">
        <gp-scrollbar height="400px">
            <p v-for="item in 20" :key="item" class="vertical-item">{{ item }}</p>
        </gp-scrollbar>
        </div>
        <style>
        .vertical-item{
             display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            margin: 10px;
            text-align: center;
            border-radius: 4px;background: var(--gp-color-primary-light-9);
            color: var(--gp-color-primary);
        }
        </style>
        `
        }
    }
}
export const ScrollbarHorizontal = (args) => ({
    components: { GpScrollbar, GpButton },
    setup() {
        return { args };
    },
    template: `
    <gp-scrollbar>
    <div style="display:flex">
      <p v-for="item in 50" :key="item" style="  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  border-radius: 4px;
  background: var(--gp-color-danger-light-9);
  color: var(--gp-color-danger);">
        {{ item }}
      </p>
    </div>
  </gp-scrollbar>
  `,

});
ScrollbarHorizontal.args = {
    height: 400,
    native: false,
    always: false,
};
ScrollbarHorizontal.parameters = {
    docs: {
        source: {
            code: `   

        <div style="margin-bottom:20px">
        <gp-scrollbar>
            <p v-for="item in 20" :key="item" class="horizontal-item">{{ item }}</p>
        </gp-scrollbar>
        </div>
        <style>
        .horizontal-item{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            margin: 10px;
            text-align: center;
            border-radius: 4px;
            background: var(--gp-color-primary-light-9);
            color: var(--gp-color-primary);
        }
        </style>
        `
        }
    }
}