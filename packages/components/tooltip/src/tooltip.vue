<template>
  <gp-popper ref="popperRef" :role="role">
    <gp-tooltip-trigger
      :disabled="disabled"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :virtual-ref="virtualRef"
      :virtual-triggering="virtualTriggering"
    >
      <slot v-if="$slots.default" />
    </gp-tooltip-trigger>
    <gp-tooltip-content
      ref="contentRef"
      :aria-label="ariaLabel"
      :boundaries-padding="boundariesPadding"
      :content="content"
      :disabled="disabled"
      :effect="effect"
      :enterable="enterable"
      :fallback-placements="fallbackPlacements"
      :hide-after="hideAfter"
      :gpu-acceleration="gpuAcceleration"
      :offset="offset"
      :persistent="persistent"
      :popper-class="popperClass"
      :popper-style="popperStyle"
      :placement="placement"
      :popper-options="popperOptions"
      :pure="pure"
      :raw-content="rawContent"
      :reference-el="referenceEl"
      :trigger-target-el="triggerTargetEl"
      :show-after="showAfter"
      :strategy="strategy"
      :teleported="teleported"
      :transition="transition"
      :virtual-triggering="virtualTriggering"
      :z-index="zIndex"
      :append-to="appendTo"
    >
      <slot name="content">
        <span v-if="rawContent" v-html="content" />
        <span v-else>{{ content }}</span>
      </slot>
      <gp-popper-arrow v-if="showArrow" :arrow-offset="arrowOffset" />
    </gp-tooltip-content>
  </gp-popper>
</template>
<script setup lang="ts">
import {
  computed,
  onDeactivated,
  provide,
  readonly,
  ref,
  toRef,
  unref,
  watch,
} from 'vue';
import { GpPopper, GpPopperArrow } from '@/components/popper';
import { isBoolean } from '@/utils';
import { useDelayedToggle, useId, usePopperContainer } from '@/hooks';
import { TOOLTIP_INJECTION_KEY } from './constants';
import {
  tooltipEmits,
  useTooltipModelToggle,
  useTooltipProps,
} from './tooltip';
import GpTooltipTrigger from './trigger.vue';
import GpTooltipContent from './content.vue';

import type { PopperInstance } from '@/components/popper';

defineOptions({
  name: 'GpTooltip',
});

const props = defineProps(useTooltipProps);
const emit = defineEmits(tooltipEmits);

usePopperContainer();

const id = useId();
const popperRef = ref<PopperInstance>();

const contentRef = ref<any>();

const updatePopper = () => {
  const popperComponent = unref(popperRef);
  if (popperComponent) {
    popperComponent.popperInstanceRef?.update();
  }
};
const open = ref(false);
const toggleReason = ref<Event>();

const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
  indicator: open,
  toggleReason,
});

const { onOpen, onClose } = useDelayedToggle({
  showAfter: toRef(props, 'showAfter'),
  hideAfter: toRef(props, 'hideAfter'),
  autoClose: toRef(props, 'autoClose'),
  open: show,
  close: hide,
});

const controlled = computed(
  () => isBoolean(props.visible) && !hasUpdateHandler.value
);

provide(TOOLTIP_INJECTION_KEY, {
  controlled,
  id,
  open: readonly(open),
  trigger: toRef(props, 'trigger'),
  onOpen: (event?: Event) => {
    onOpen(event);
  },
  onClose: (event?: Event) => {
    onClose(event);
  },
  onToggle: (event?: Event) => {
    if (unref(open)) {
      onClose(event);
    } else {
      onOpen(event);
    }
  },
  onShow: () => {
    emit('show', toggleReason.value);
  },
  onHide: () => {
    emit('hide', toggleReason.value);
  },
  onBeforeShow: () => {
    emit('before-show', toggleReason.value);
  },
  onBeforeHide: () => {
    emit('before-hide', toggleReason.value);
  },
  updatePopper,
});

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled && open.value) {
      open.value = false;
    }
  }
);

const isFocusInsideContent = (event?: FocusEvent) => {
  const popperContent: HTMLElement | undefined =
    contentRef.value?.contentRef?.popperContentRef;
  const activeElement =
    (event?.relatedTarget as Node) || document.activeElement;

  return popperContent && popperContent.contains(activeElement);
};

onDeactivated(() => open.value && hide());

defineExpose({
  popperRef,
  contentRef,
  isFocusInsideContent,
  updatePopper,
  onOpen,
  onClose,
  hide,
});
</script>
