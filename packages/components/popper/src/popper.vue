<template>
  <slot />
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import { POPPER_INJECTION_KEY } from './constants';
import { popperProps } from './popper';

import type { Instance as PopperInstance } from '@popperjs/core';
import type { GpPopperInjectionContext } from './constants';

defineOptions({
  name: 'GpPopper',
  inheritAttrs: false,
});
const props = defineProps(popperProps);

const triggerRef = ref<HTMLElement>();
const popperInstanceRef = ref<PopperInstance>();
const contentRef = ref<HTMLElement>();
const referenceRef = ref<HTMLElement>();
const role = computed(() => props.role);

const popperProvides = {
  triggerRef,
  popperInstanceRef,
  contentRef,
  referenceRef,
  role,
} as GpPopperInjectionContext;

defineExpose(popperProvides);

provide(POPPER_INJECTION_KEY, popperProvides);
</script>
