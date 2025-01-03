declare const focusReason: import('vue').Ref<"pointer" | "keyboard" | undefined, "pointer" | "keyboard" | undefined>;
declare const lastUserFocusTimestamp: import('vue').Ref<number, number>;
declare const lastAutomatedFocusTimestamp: import('vue').Ref<number, number>;
export type FocusLayer = {
    paused: boolean;
    pause: () => void;
    resume: () => void;
};
export type FocusStack = FocusLayer[];
export declare const obtainAllFocusableElements: (element: HTMLElement) => HTMLElement[];
export declare const getVisibleElement: (elements: HTMLElement[], container: HTMLElement) => HTMLElement | undefined;
export declare const isHidden: (element: HTMLElement, container: HTMLElement) => boolean;
export declare const getEdges: (container: HTMLElement) => (HTMLElement | undefined)[];
export declare const tryFocus: (element?: HTMLElement | {
    focus: () => void;
} | null, shouldSelect?: boolean) => void;
export declare const focusFirstDescendant: (elements: HTMLElement[], shouldSelect?: boolean) => void;
export declare const focusableStack: {
    push: (layer: FocusLayer) => void;
    remove: (layer: FocusLayer) => void;
};
export declare const isFocusCausedByUserEvent: () => boolean;
export declare const useFocusReason: () => {
    focusReason: typeof focusReason;
    lastUserFocusTimestamp: typeof lastUserFocusTimestamp;
    lastAutomatedFocusTimestamp: typeof lastAutomatedFocusTimestamp;
};
export declare const createFocusOutPreventedEvent: (detail: CustomEventInit["detail"]) => CustomEvent<any>;
export {};
