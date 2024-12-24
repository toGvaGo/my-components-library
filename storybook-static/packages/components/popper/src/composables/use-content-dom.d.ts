import { CSSProperties, StyleValue } from 'vue';
import { UsePopperReturn } from '../../../../hooks';
import { UsePopperContentReturn } from './use-content';
import { PopperContentProps } from '../content';
export declare const usePopperContentDOM: (props: PopperContentProps, { attributes, styles, role, }: Pick<UsePopperReturn, "attributes" | "styles"> & Pick<UsePopperContentReturn, "role">) => {
    ariaModal: import('vue').ComputedRef<string | undefined>;
    arrowStyle: import('vue').ComputedRef<CSSProperties>;
    contentAttrs: import('vue').ComputedRef<{
        [key: string]: string | boolean;
    }>;
    contentClass: import('vue').ComputedRef<((string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
    contentStyle: import('vue').ComputedRef<StyleValue[]>;
    contentZIndex: import('vue').Ref<number, number>;
    updateZIndex: () => void;
};
export type UsePopperContentDOMReturn = ReturnType<typeof usePopperContentDOM>;
