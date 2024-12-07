import { Arrayable } from '../../../utils';
import { Ref } from 'vue';
import { TooltipTriggerType } from './trigger';
export declare const isTriggerType: (trigger: Arrayable<TooltipTriggerType>, type: TooltipTriggerType) => boolean;
export declare const whenTrigger: (trigger: Ref<Arrayable<TooltipTriggerType>>, type: TooltipTriggerType, handler: (e: Event) => void) => (e: Event) => void;
