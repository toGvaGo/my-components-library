<template>
  <div
    :class="[ns.b(), ns.m(direction)]"
    :style="dividerStyle"
    role="separator"
  >
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="[ns.e('text'), ns.is(contentPosition)]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useNamespace } from '@/hooks';
import { dividerProps } from './divider';
import type { CSSProperties } from 'vue';

defineOptions({
  name: 'GpDivider',
});
const props = defineProps(dividerProps);
const ns = useNamespace('divider');
const dividerStyle = computed(() => {
  return ns.cssVar({
    'border-style': props.borderStyle,
  }) as CSSProperties;
});
</script>
