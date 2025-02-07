import type { Meta, StoryObj } from '@storybook/vue3';

import GpWatermark from '../packages/components/watermark/src/watermark.vue';
import '../packages/theme-chalk/src/index.scss'
import { h, reactive, ref } from 'vue';

const meta = {
  title: 'Watermark',
  component: GpWatermark,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '水印文字内容',
    },
    font: {
      control: { type: 'object' },
      description: '水印文字样式',
    },
    zIndex: {
      control: { type: 'number' },
      description: '水印堆叠顺序',
    },
    rotate: {
      control: { type: 'number' },
      description: '水印文字角度',
    }
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GpWatermark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const watermark = (args) => ({
  components: { GpWatermark },
  setup() {
    return { args };
  },
  template: `
  <div style="width:500px;height:500px">

  <gp-watermark v-bind="args">
    <div style="height: 500px" />
  </gp-watermark>
  </div>
  `,
})
watermark.args = {
  font: {
    color: 'rgba(0, 0, 0, .15)',
  },
  rotate: -22,
}
export const multiWatermark = (args) => ({
  components: { GpWatermark },
  setup() {
    const font = reactive({
      color: 'rgba(0, 0, 0, .15)',
    })
    return { args, font };
  },
  template: `
  <div style="width:500px;height:500px">

  <gp-watermark :font="font" :content="['Go Paradox', 'Keep Learning']">
    <div style="height: 500px" />
  </gp-watermark>
  </div>
  `,
})