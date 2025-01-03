import { Arrayable } from '../../../utils';
import { InjectionKey, Ref } from 'vue';
import { TooltipTriggerType } from './trigger';
export type GpTooltipInjectionContext = {
    controlled: Ref<boolean>;
    id: Ref<string>;
    open: Ref<boolean>;
    trigger: Ref<Arrayable<TooltipTriggerType>>;
    onOpen: (e?: Event) => void;
    onClose: (e?: Event) => void;
    onToggle: (e: Event) => void;
    onShow: () => void;
    onHide: () => void;
    onBeforeShow: () => void;
    onBeforeHide: () => void;
    updatePopper: () => void;
};
export declare const TOOLTIP_INJECTION_KEY: InjectionKey<GpTooltipInjectionContext>;
