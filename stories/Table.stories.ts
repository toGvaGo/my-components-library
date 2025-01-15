import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import GpCheckbox from '../packages/components/checkbox/src/checkbox.vue';
import GpCheckboxGroup from '../packages/components/checkbox/src/checkbox-group.vue';
import GpButton from '../packages/components/button/src/button.vue';
import GpTable from '../packages/components/table-el/src/table.vue';
import GpTableColumn from '../packages/components/table-el/src/tableColumn';
import '../packages/theme-chalk/src/index.scss'
import { ref } from 'vue';

const meta = {
  title: 'table',
  component: GpTable,
  tags: ['autodocs'],
  argTypes: {
    stripe: {
      control: 'boolean',
      description: '是否为斑马纹表格',
    },
    border: {
      control: 'boolean',
      description: '是否带有纵向边框',
    }
  },
  args: {

  },
  parameters: {
  },
} satisfies Meta<typeof GpTable>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Table = (args) => ({
  components: { GpTable, GpTableColumn },
  setup() {
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    return { args, tableData };
  },
  template: `
   <gp-table :data="tableData" v-bind="args" style="width: 100%">
    <gp-table-column prop="date" label="Date" width="180" />
    <gp-table-column prop="name" label="Name" width="180" />
    <gp-table-column prop="address" label="Address" />
  </gp-table>
  `,

});
Table.args = {
  stripe: false,
  border: false,
  height: '250',
};

Table.parameters = {
  docs: {
    source: {
      code: `        <gp-table :data="tableData" style="width: 100%">
    <gp-table-column prop="date" label="Date" width="180" />
    <gp-table-column prop="name" label="Name" width="180" />
    <gp-table-column prop="address" label="Address" />
  </gp-table>`
    }
  }
}
