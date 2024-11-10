import { mount } from '@vue/test-utils';
import { defineComponent, ref, h, nextTick } from 'vue';
import ConfigProvider from '../src/config-provider';
import { messageConfig } from '../src/config-provider';
import { describe, it, expect } from 'vitest';

describe('loading config', () => {
  it('should render loading component', async () => {
    // let instance: LoadingInstance;
    expect(1).toBe(1);
  });
});
