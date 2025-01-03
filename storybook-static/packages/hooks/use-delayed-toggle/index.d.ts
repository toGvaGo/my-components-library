import { ExtractPropTypes, ToRefs } from 'vue';
export declare const useDelayedToggleProps: {
    readonly showAfter: import('../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly hideAfter: import('../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
    readonly autoClose: import('../../utils').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
};
export type UseDelayedToggleProps = {
    open: (event?: Event) => void;
    close: (event?: Event) => void;
} & ToRefs<ExtractPropTypes<typeof useDelayedToggleProps>>;
export declare const useDelayedToggle: ({ showAfter, hideAfter, autoClose, open, close, }: UseDelayedToggleProps) => {
    onOpen: (event?: Event) => void;
    onClose: (event?: Event) => void;
};
