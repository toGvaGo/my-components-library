import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import GpButton from '../src/button.vue';

describe('GpButton', () => {
  //基本挂载渲染测试
  it('renders correctly with default props', () => {
    const wrapper = mount(GpButton);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('gp-button');
  });

  //样式测试
  it('rubbish test', () => {
    const wrapper = mount(GpButton);

    // 获取计算后的样式
    const buttonElement = wrapper.element;
    const style = window.getComputedStyle(buttonElement); // 使用 window.getComputedStyle 获取所有计算样式

    // 验证 height 样式
    console.log('===================');
    console.log(style.height);
    // 验证 height 样式
    expect(style.height).toBe('');
  });

  //属性测试
  it('applies the correct type class', async () => {
    const wrapper = mount(GpButton, {
      props: {
        type: 'primary',
      },
    });

    expect(wrapper.classes()).toContain('gp-button--primary');
  });

  //事件测试
  it('handles click events', async () => {
    const handleClick = vi.fn();
    const wrapper = mount(GpButton, {
      props: {
        onClick: handleClick,
      },
    });
    await wrapper.trigger('click');
    expect(handleClick).toHaveBeenCalled();
  });

  //样式测试 custom样式还没写 凑合凑合
  it('applies the correct size clss', async () => {
    const customStyle = { backgroundColor: 'red' };
    const wrapper = mount(GpButton, {
      props: {
        style: customStyle,
      },
    });

    expect(wrapper.attributes('style')).toBe('background-color: red;');
  });

  //禁用状态测试
  //   it('is disabled when prop is true', async () => {
  //     const wrapper = mount(GpButton, {
  //       props: {
  //         disabled: true,
  //       },
  //     });

  //     expect(wrapper.attributes('disabled')).toBe('');
  //   });
});
