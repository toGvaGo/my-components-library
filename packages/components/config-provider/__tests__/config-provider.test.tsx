import { mount } from '@vue/test-utils';
import { defineComponent, ref, h, nextTick, reactive } from 'vue';
import ConfigProvider from '../src/config-provider';
import { messageConfig } from '../src/config-provider';
import { describe, it, expect } from 'vitest';
import GpButton from '../../button';
import { wrap } from 'module';

describe('ConfigProvider', () => {
  it('render default slot contet', () => {
    const wrapper = mount(ConfigProvider, {
      slots: {
        default: () => h('div', {}, 'Default Slot Content'),
      },
    });
    expect(wrapper.text()).toContain('Default Slot Content');
  });

  it('provides global configuration and updates messageConfig', async () => {
    const newMessageConfig = { text: 'Hello World' };
    const wrapper = mount(ConfigProvider, {
      props: { message: { max: 5 } },
    });
    expect(messageConfig).toEqual({ max: 5 });

    await wrapper.setProps({ message: { max: 10 } });
    await nextTick(); // 等待响应式更新完成
    expect(messageConfig).toEqual({ max: 10 });
  });

  describe('button-config', () => {
    it('autoInsertSpace', async () => {
      const config = reactive({
        autoInsertSpace: true,
      });
      const providerComponent = h(
        ConfigProvider,
        { button: config },
        {
          default: () => h(GpButton, null, '中文'),
        }
      );
      const button = h(
        'button',
        {
          class: 'toggle',
          onClick: () => (config.autoInsertSpace = !config.autoInsertSpace),
        },
        'toggle'
      );
      const wrapper = mount(() => h('div', [providerComponent, button]));

      await nextTick();
      expect(
        wrapper.find('.gp-button .gp-button__text--expand').exists()
      ).toBeTruthy();
      await wrapper.find('.toggle').trigger('click');
      expect(
        wrapper.find('.el-button .el-button__text--expand').exists()
      ).toBeFalsy();
    });
  });
});
