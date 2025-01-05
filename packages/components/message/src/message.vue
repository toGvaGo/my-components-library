<template>
  <transition
    :name="ns.b('fade')"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      ref="messageRef"
      :class="[
        ns.b(),
        { [ns.m(type)]: type },
        ns.is('center', center),
        ns.is('closable', showClose),
        ns.is('plain', plain),
        customClass,
      ]"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <slot>
        <p v-if="!dangerouslyUseHTMLString" :class="ns.e('content')">
          {{ message }}
        </p>
        <p v-else :class="ns.e('content')" v-html="message" />
      </slot>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import {
  useEventListener,
  useResizeObserver,
  useTimeoutFn,
} from '@vueuse/core';
import { TypeComponents, TypeComponentsMap } from '@/utils';
import { EVENT_CODE } from '@/constants';
// import ElBadge from '@element-plus/components/badge'
// import { ELIcon } from '@/components/icon';
import { useGlobalComponentSettings } from '@/components/config-provider';
import { messageEmits, messageProps } from './message';
import { getLastOffset, getOffsetOrSpace } from './instance';
// import type { BadgeProps } from '@components/badge';
import type { CSSProperties } from 'vue';
import { start } from 'repl';

const { Close } = TypeComponents;

defineOptions({
  name: 'GpMessage',
});

const props = defineProps(messageProps);
defineEmits(messageEmits);

const { ns, zIndex } = useGlobalComponentSettings('message');
const { currentZIndex, nextZIndex } = zIndex;

const messageRef = ref<HTMLElement>();
const visible = ref(false);
const height = ref(0);

let stopTimer: (() => void) | undefined = undefined;

// const badgeType = computed<BadgeProps['type']>(() => {
//   props.type ? (props.type === 'error' ? 'danger' : props.type) : 'info';
// });

const typeClass = computed(() => {
  const type = props.type;
  return { [ns.bem('icon', type)]: type && TypeComponentsMap[type] };
});
const iconComponent = computed(
  () => props.icon || TypeComponentsMap[props.type] || ''
);

const lastOffset = computed(() => getLastOffset(props.id));
const offset = computed(
  () => getOffsetOrSpace(props.id, lastOffset.value) + lastOffset.value
);

const bottom = computed((): number => height.value + offset.value);
const customStyle = computed<CSSProperties>(() => ({
  top: `${offset.value}px`,
  zIndex: currentZIndex.value,
}));

function startTimer() {
  if (props.duration === 0) return;
  ({ stop: stopTimer } = useTimeoutFn(() => {
    close();
  }, props.duration));
}

function clearTimer() {
  stopTimer?.();
}
function close() {
  visible.value = false;
}
function keydown({ code }: KeyboardEvent) {
  if (code === EVENT_CODE.esc) {
    close();
  }
}

onMounted(() => {
  startTimer();
  nextZIndex();
  visible.value = true;
});
watch(
  () => props.repeatNum,
  () => {
    clearTimer();
    startTimer();
  }
);

useEventListener(document, 'keydown', keydown);
useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height;
});

defineExpose({
  visible,
  bottom,
  close,
});
</script>
