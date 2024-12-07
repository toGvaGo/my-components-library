import { ConfigProviderProps } from './config-provider-props';
import { InjectionKey, Ref } from 'vue';
export type ConfigProviderContext = Partial<ConfigProviderProps>;
export declare const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>>;
