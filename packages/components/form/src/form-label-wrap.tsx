import {
  Fragment,
  computed,
  defineComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  watch,
} from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { throwError } from '@/utils';
import { useNamespace } from '@/hooks';
import { formContextKey, formItemContextKey } from './constants';

import type { CSSProperties } from 'vue';
import { on } from 'events';
import { M } from 'vite/dist/node/types.d-aGj9QkWt';

const COMPONENT_NAME = 'GpLabelWrap';
export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },

  setup(props, { slots }) {
    const formContext = inject(formContextKey, undefined);
    const formItemContext = inject(formItemContextKey);
    if (!formItemContext) {
      throwError(
        COMPONENT_NAME,
        'usage: <GpFormItem><GLabelWrap></GLabelWrap></GpFormItem>'
      );
    }

    const ns = useNamespace('form');

    const el = ref<HTMLElement>();
    const computedWidth = ref(0);

    const getLabelWidth = () => {
      if (el.value?.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action: 'update' | 'remove' = 'update') => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === 'update') {
            computedWidth.value = getLabelWidth();
          } else if (action === 'remove') {
            formContext?.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth('update');

    onMounted(() => {
      updateLabelWidthFn();
    });
    onBeforeUnmount(() => {
      updateLabelWidth('remove');
    });
    onUpdated(() => updateLabelWidthFn());

    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        formContext?.registerLabelWidth(val, oldVal);
      }
    });

    useResizeObserver(
      computed(
        () => (el.value?.firstElementChild ?? null) as HTMLElement | null
      ),
      updateLabelWidthFn
    );

    return () => {
      if (!slots) return null;

      const { isAutoWidth } = props;
      if (isAutoWidth) {
        const autoLabelWidth = formContext?.autoLabelWidth;
        const hasLabel = formItemContext?.hasLabel;
        const style: CSSProperties = {};
        if (hasLabel && autoLabelWidth && autoLabelWidth !== 'auto') {
          const marginWidth = Math.max(
            0,
            Number.parseInt(autoLabelWidth, 10) - computedWidth.value
          );
          const labelPosotion =
            formItemContext.labelPosition || formContext.labelPosition;

          const marginPosition =
            labelPosotion === 'left' ? 'marginRight' : 'marginLeft';

          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return (
          <div ref={el} class={[ns.be('item', 'label-wrap')]} style={style}>
            {slots.default?.()}
          </div>
        );
      }
      if (isAutoWidth) {
      } else {
        return <Fragment ref={el}>{slots.default?.()}</Fragment>;
      }
    };
  },
});
