import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../packages/components/button/src/button.vue';
import '../packages/theme-chalk/src/index.scss'
import { h } from 'vue';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large', 'small']
    },
    selectType: {
      control: 'select',
      options: ['default', 'primary', 'disabled']
    },
    backgroundColor: { control: 'color' },
  },
  args: {
    size: 'default',
    type: 'default',
    onClick: fn(),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (_, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;
      switch (pageLayout) {
        case 'page':
          // Your page layout is probably a little more complex than this ;)
          return { template: '<div class="page-layout"><story/></div>' };
        case 'page-mobile':
          return { template: '<div class="page-mobile-layout"><story/></div>' };
        default:
          // In the default case, don't apply a layout
          return { template: '<story/>' };
      }
    },
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
  },
  render: (args) => h(Button, {
    ...args,
    onClick: () => {
      console.log('default')
    }
  }, { default: () => 'default' })
};
// export const Primary: Story = {
//   args: {
//     type: 'primary'
//   },
//   render: (args) => h(Button, {
//     ...args,
//     onClick: () => {
//       console.log('primary')
//     }
//   }, { default: () => 'primary' })
// };
// export const Disabled: Story = {
//   args: {
//     type: 'disabled'
//   },
//   render: (args) => h(Button, {
//     ...args,
//     onClick: () => {
//       console.log('disabled')
//     }
//   }, { default: () => 'disabled' })
// };
// export const Large: Story = {
//   args: {
//     size: 'large'
//   },
//   render: (args) => h(Button, {
//     ...args,
//     onClick: () => {
//       console.log('large')
//     }
//   }, { default: () => 'large' })
// };


// export const fk: Story = {
//   args: {
//     label: 'FKFKFKFKF',
//     size: 'small',
//     backgroundColor: 'green',
//   },
//   play: async ({ canvasElement }: any) => {
//     const canvas = within(canvasElement);
//     const button = canvas.getByRole('button', { name: /FKFKFKFKF/i });
//     await expect(button).toBeInTheDocument();
//     await userEvent.click(button);
//     // await expect(button).not.toBeInTheDocument();
//   },
// };
