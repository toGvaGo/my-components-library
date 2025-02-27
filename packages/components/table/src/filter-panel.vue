<template>
  <gp-tootilp
    ref="tooltip"
    :visible="tooltipVisible"
    :offset="0"
    :placement="placement"
    :show-arrow="false"
    :stop-popper-mouse-event="false"
    teleported
    effect="light"
    pure
    :popper-class="filterClassName"
    persistent
    :append-to="appendTo"
  >
    <template #content>
      <div v-if="multiple">
        <div :class="ns.e('content')">
          <gp-scrollbar :wrap-class="ns.e('wrap')">
            <gp-checkbox-group
              v-model="filteredValue"
              :class="ns.e('checkbox-group')"
            >
              <gp-checkbox
                v-for="filter in filters"
                :key="filter.value"
                :value="filter.value"
              >
                {{ filter.text }}
              </gp-checkbox>
            </gp-checkbox-group>
          </gp-scrollbar>
        </div>
        <div :class="ns.e('bottom')">
          <button
            :class="{ [ns.is('disabled')]: filteredValue.length === 0 }"
            :disabled="filteredValue.length === 0"
            type="button"
            @click="handleConfirm"
          >
            <!-- {{ t('el.table.confirmFilter') }} -->
            确定
          </button>
          <button type="button" @click="handleReset">
            <!-- {{ t('el.table.resetFilter') }} -->
            取消
          </button>
        </div>
      </div>
      <ul v-else :class="ns.e('list')">
        <li
          :class="[
            ns.e('list-item'),
            {
              [ns.is('active')]:
                filterValue === undefined || filterValue === null,
            },
          ]"
          @click="handleSelect(null)"
        >
          {{ 'gp.table.clearFilter' }}
        </li>
        <li
          v-for="filter in filters"
          :key="filter.value"
          :class="[ns.e('list-item'), ns.is('active', isActive(filter))]"
          :label="filter.value"
          @click="handleSelect(filter.value)"
        >
          {{ filter.text }}
        </li>
      </ul>
    </template>
    <template #default>
      <span
        v-click-outside:[popperPaneRef]="hideFilterPanel"
        :class="[
          `${ns.namespace.value}-table__column-filter-trigger`,
          `${ns.namespace.value}-none-outline`,
        ]"
        @click="showFilterPanel"
      >
        <gp-icon>
          <slot name="filter-icon">
            <arrow-up v-if="column.filterOpened" />
            <arrow-down v-else />
          </slot>
        </gp-icon>
      </span>
    </template>
  </gp-tootilp>
</template>

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, getCurrentInstance, ref, watch } from 'vue';
import GpCheckbox from '@/components/checkbox';
// import { GpIcon } from '@element-plus/components/icon'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';
import { ClickOutside } from '@/directives';
// import { useLocale, useNamespace } from '@/hooks';
import { useNamespace } from '@/hooks';
import GpTooltip from '@/components/tooltip';
import GpScrollbar from '@/components/scrollbar';
import type { Placement } from '@/components/popper';

import type { PropType, WritableComputedRef } from 'vue';
import type { TableColumnCtx } from './table-column/defaults';
import type { TableHeader } from './table-header';
import type { Store } from './store';

const { CheckboxGroup: GpCheckboxGroup } = GpCheckbox;

export default defineComponent({
  name: 'GpTableFilterPanel',
  components: {
    GpCheckbox,
    GpCheckboxGroup,
    GpScrollbar,
    GpTooltip,
    // GpIcon,
    ArrowDown,
    ArrowUp,
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-start',
    },
    store: {
      type: Object as PropType<Store<unknown>>,
    },
    column: {
      type: Object as PropType<TableColumnCtx<unknown>>,
    },
    upDataColumn: {
      type: Function,
    },
    appendTo: {
      type: String,
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    // const { t } = useLocale();
    const ns = useNamespace('table-filter');
    const parent = instance?.parent as TableHeader;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = ref(false);
    const tooltip = ref<InstanceType<typeof GpTooltip> | null>(null);
    const filters = computed(() => {
      return props.column && props.column.filters;
    });
    const filterClassName = computed(() => {
      if (props.column.filterClassName) {
        return `${ns.b()} ${props.column.filterClassName}`;
      }
      return ns.b();
    });
    const filterValue = computed({
      get: () => (props.column?.filteredValue || [])[0],
      set: (value: string) => {
        if (filteredValue.value) {
          if (typeof value !== 'undefined' && value !== null) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      },
    });

    const filteredValue: WritableComputedRef<unknown[]> = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value: unknown[]) {
        if (props.column) {
          props.upDataColumn('filteredValue', value);
        }
      },
    });
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e: MouseEvent) => {
      e.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue?: string) => {
      filterValue.value = _filterValue;
      if (typeof _filterValue !== 'undefined' && _filterValue !== null) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue: unknown[]) => {
      props.store.commit('filterChange', {
        column: props.column,
        values: filteredValue,
      });
      props.store.updateAllSelected();
    };
    watch(
      tooltipVisible,
      (value) => {
        // todo
        if (props.column) {
          props.upDataColumn('filterOpened', value);
        }
      },
      {
        immediate: true,
      }
    );

    const popperPaneRef = computed(() => {
      return tooltip.value?.popperRef?.contentRef;
    });

    return {
      tooltipVisible,
      multiple,
      filterClassName,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      // t,
      ns,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip,
    };
  },
});
</script>
