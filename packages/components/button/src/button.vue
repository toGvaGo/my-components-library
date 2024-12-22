<template>
  <component
    :is="tag"
    ref="_ref"
    v-bind="_props"
    :class="buttonKls"
    :style="buttonStyle"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
    </template>
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useNamespace } from '@/hooks';
import { useButton } from './use-button';
import { buttonEmits, buttonProps } from './button';
import { useButtonCustomStyle } from './button-custom';

defineOptions({
  name: 'GpButton',
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const buttonStyle = useButtonCustomStyle(props);
const ns = useNamespace('button');
// const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handelClick } =
//   useButton(props, emit);
const { _ref, _type, _disabled, _props, shouldAddSpace, handleClick } =
  useButton(props, emit);

const buttonKls = computed(() => [
  ns.b(),
  ns.m(_type.value),
  ns.is('disabled', _disabled.value),
  ns.is('loading', props.loading),
  ns.is('plain', props.plain),
  ns.is('round', props.round),
  ns.is('circle', props.circle),
  ns.is('text', props.text),
  ns.is('link', props.link),
  ns.is('has-tag', props.bg),
]);

defineExpose({
  ref: _ref,
  type: _type,
  disabled: _disabled,
  // size: _size,
  shouldAddSpace,
});
</script>
