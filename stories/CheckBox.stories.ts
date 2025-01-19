import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpCheckbox from '../packages/components/checkbox/src/checkbox.vue';
import GpCheckboxGroup from '../packages/components/checkbox/src/checkbox-group.vue';
import '../packages/theme-chalk/src/index.scss'
import { ref } from 'vue';

const meta = {
    title: 'Checkbox',
    component: GpCheckbox,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select', options: ['large', 'normal', 'small'] },
            description: 'checkbox size',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled',
        },
        indeterminate: {
            control: 'boolean',
            description: 'Whether the checkbox is indeterminate',
        },
        border: {
            control: 'boolean',
            description: 'Whether the checkbox has a border',
        }
    },
    args: {

    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof GpCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Checkbox = (args) => ({
    components: { GpCheckbox },
    setup() {
        const checked1 = ref(false)
        return { args, checked1 };
    },
    template: `
    <gp-checkbox  v-bind="args" v-model="checked1" label="Option 1"/>
  `,
});
Checkbox.args = {
    size: 'normal',
    disabled: false,
    indeterminate: false,
    border: false,
};
export const CheckboxSize = (args) => ({
    components: { GpCheckbox },
    setup() {
        const checked1 = ref(false)
        const checked2 = ref(false)
        const checked3 = ref(false)
        return { args, checked1, checked2, checked3 };
    },
    template: `
    <gp-checkbox  v-bind="{ ...args, size: 'small' }" v-model="checked1" label="small"/>
    <gp-checkbox  v-bind="{ ...args, size: 'normal' }" v-model="checked2" label="normal"/>
    <gp-checkbox  v-bind="{ ...args, size: 'large' }" v-model="checked3" label="large"/>
  `,
});
CheckboxSize.args = {
    size: '',
    disabled: false,
    indeterminate: false,
    border: false,
};



export const CheckboxGroup = (args) => ({
    components: { GpCheckboxGroup, GpCheckbox },
    setup() {
        const checkList = ref(['Value selected and disabled', 'Value A'])
        return { args, checkList };
    },
    template: `
    <gp-checkbox-group v-model="checkList" label="Option 1">
    <gp-checkbox label="Option A" value="Value A" />
    <gp-checkbox label="Option B" value="Value B" />
    <gp-checkbox label="Option C" value="Value C" />
    <gp-checkbox label="disabled" value="Value disabled" disabled />
    <gp-checkbox
      label="selected and disabled"
      value="Value selected and disabled"
      disabled
    />
    </gp-check-group>
  `,
});
CheckboxGroup.args = {
    disabled: false
};
CheckboxGroup.parameters = {
    docs: {
        source: {
            code: `
    <gp-checkbox-group v-model="checkList" label="Option 1">
    <gp-checkbox label="Option A" value="Value A" />
    <gp-checkbox label="Option B" value="Value B" />
    <gp-checkbox label="Option C" value="Value C" />
    <gp-checkbox label="disabled" value="Value disabled" disabled />
    <gp-checkbox
      label="selected and disabled"
      value="Value selected and disabled"
      disabled
    />
    </gp-check-group>
  `
        },
    },
};