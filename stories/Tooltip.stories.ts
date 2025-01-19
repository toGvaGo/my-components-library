import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpCheckbox from '../packages/components/checkbox/src/checkbox.vue';
import GpCheckboxGroup from '../packages/components/checkbox/src/checkbox-group.vue';
import GpButton from '../packages/components/button/src/button.vue';
import GpTooltip from '../packages/components/tooltip/src/tooltip.vue';
import '../packages/theme-chalk/src/index.scss'
import { ref } from 'vue';

const meta = {
  title: 'Tooltip',
  component: GpTooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'left', 'right'],
      description: '组件出现的位置',
    },
    content: {
      control: 'text',
      description: '组件显示的内容',
    },
    disabled: {
      control: 'boolean',
      description: '组件是否禁用',
    }
  },
  args: {

  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GpTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Tooltip = (args) => ({
  components: { GpTooltip, GpButton },
  setup() {
    return { args };
  },
  template: `
      <div style="width:400px;margin:20px auto">
    <div style="display:flex;align-items:center;justify-content:center">
      <gp-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <gp-button>top</gp-button>
      </gp-tooltip>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between">
      <gp-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <gp-button class="mt-3 mb-3">left</gp-button>
      </gp-tooltip>
      <gp-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <gp-button>right</gp-button>
      </gp-tooltip>
    </div>
    <div style="display:flex;align-items:center;justify-content:center">
      <gp-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <gp-button>bottom</gp-button>
      </gp-tooltip>
    </div>
  </div>
  `,

});
Tooltip.args = {
};

Tooltip.parameters = {
  docs: {
    source: {
      code: `     <div style="width:400px;margin:20px auto">
    <div style="display:flex;align-items:center;justify-content:center">
      <gp-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <gp-button>top</gp-button>
      </gp-tooltip>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between">
      <gp-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <gp-button class="mt-3 mb-3">left</gp-button>
      </gp-tooltip>
      <gp-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <gp-button>right</gp-button>
      </gp-tooltip>
    </div>
    <div style="display:flex;align-items:center;justify-content:center">
      <gp-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <gp-button>bottom</gp-button>
      </gp-tooltip>
    </div>
  </div>`
    }
  }
}
