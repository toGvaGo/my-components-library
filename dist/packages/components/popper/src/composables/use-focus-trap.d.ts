import { SetupContext } from 'vue';
import { PopperContentEmits, PopperContentProps } from '../content';
export declare const usePopperContentFocusTrap: (props: PopperContentProps, emit: SetupContext<PopperContentEmits>["emit"]) => {
    focusStartRef: import('vue').Ref<HTMLElement | "container" | "first" | undefined, HTMLElement | "container" | "first" | undefined>;
    trapped: import('vue').Ref<boolean, boolean>;
    onFocusAfterReleased: (event: CustomEvent) => void;
    onFocusAfterTrapped: () => void;
    onFocusInTrap: (event: FocusEvent) => void;
    onFocusoutPrevented: (event: CustomEvent) => void;
    onReleaseRequested: () => void;
};
export type UsePopperContentFocusTrapReturn = ReturnType<typeof usePopperContentFocusTrap>;
