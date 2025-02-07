import { placements } from '@popperjs/core'
import {
  useAriaProps,
  useEmptyValuesProps,
  useSizeProp,
} from '@/hooks'
import { buildProps, definePropType, iconPropType } from '@/utils'
import { useTooltipContentProps } from '@/components/tooltip'
import { ArrowDown, CircleClose } from '@element-plus/icons-vue'
import { tagProps } from '@/components/tag'
import type {
  Options,
  Placement,
  PopperEffect,
} from '@/components/popper'

export const SelectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: undefined,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  automaticDropdown: Boolean,
  size: useSizeProp,
  effect: {
    type: definePropType<PopperEffect | string>(String),
    default: 'light',
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: '',
  },
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({} as Partial<Options>),
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  placeholder: {
    type: String,
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true,
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1,
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true,
  },
  clearIcon: {
    type: iconPropType,
    default: CircleClose,
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: iconPropType,
    default: ArrowDown,
  },
  // eslint-disable-next-line vue/require-prop-types
  tagType: { ...tagProps.type, default: 'info' },
  tagEffect: { ...tagProps.effect, default: 'light' },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  remoteShowSuffix: Boolean,
  placement: {
    type: definePropType<Placement>(String),
    values: placements,
    default: 'bottom-start',
  },
  fallbackPlacements: {
    type: definePropType<Placement[]>(Array),
    default: ['bottom-start', 'top-start', 'right', 'left'],
  },
  appendTo: String,
  ...useEmptyValuesProps,
  ...useAriaProps(['ariaLabel']),
})
