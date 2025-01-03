import { Modifier } from '@popperjs/core';
import { PopperContentProps } from '../content';
export declare const usePopperContent: (props: PopperContentProps) => {
    attributes: import('vue').ComputedRef<{
        [key: string]: {
            [key: string]: string | boolean;
        };
    }>;
    arrowRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    contentRef: import('vue').Ref<HTMLElement | undefined, HTMLElement | undefined>;
    instanceRef: import('vue').ComputedRef<import('@popperjs/core').Instance | undefined>;
    state: import('vue').ComputedRef<{
        elements?: {
            reference: Element | import('@popperjs/core').VirtualElement;
            popper: HTMLElement;
            arrow?: HTMLElement;
        } | undefined;
        options?: import('@popperjs/core').OptionsGeneric<any> | undefined;
        placement?: import('@popperjs/core').Placement | undefined;
        strategy?: import('@popperjs/core').PositioningStrategy | undefined;
        orderedModifiers?: Modifier<any, any>[] | undefined;
        rects?: import('@popperjs/core').StateRects | undefined;
        scrollParents?: {
            reference: Array<Element | import('@popperjs/core').Window | import('@popperjs/core').VisualViewport>;
            popper: Array<Element | import('@popperjs/core').Window | import('@popperjs/core').VisualViewport>;
        } | undefined;
        styles?: {
            [key: string]: Partial<CSSStyleDeclaration>;
        } | undefined;
        attributes?: {
            [key: string]: {
                [key: string]: string | boolean;
            };
        } | undefined;
        modifiersData?: {
            [key: string]: any;
            arrow?: {
                x?: number;
                y?: number;
                centerOffset: number;
            };
            hide?: {
                isReferenceHidden: boolean;
                hasPopperEscaped: boolean;
                referenceClippingOffsets: import('@popperjs/core').SideObject;
                popperEscapeOffsets: import('@popperjs/core').SideObject;
            };
            offset?: {
                bottom?: import('@popperjs/core').Offsets | undefined;
                left?: import('@popperjs/core').Offsets | undefined;
                right?: import('@popperjs/core').Offsets | undefined;
                top?: import('@popperjs/core').Offsets | undefined;
                auto?: import('@popperjs/core').Offsets | undefined;
                "auto-start"?: import('@popperjs/core').Offsets | undefined;
                "auto-end"?: import('@popperjs/core').Offsets | undefined;
                "top-start"?: import('@popperjs/core').Offsets | undefined;
                "top-end"?: import('@popperjs/core').Offsets | undefined;
                "bottom-start"?: import('@popperjs/core').Offsets | undefined;
                "bottom-end"?: import('@popperjs/core').Offsets | undefined;
                "right-start"?: import('@popperjs/core').Offsets | undefined;
                "right-end"?: import('@popperjs/core').Offsets | undefined;
                "left-start"?: import('@popperjs/core').Offsets | undefined;
                "left-end"?: import('@popperjs/core').Offsets | undefined;
            };
            preventOverflow?: import('@popperjs/core').Offsets;
            popperOffsets?: import('@popperjs/core').Offsets;
        } | undefined;
        reset?: boolean | undefined;
    }>;
    styles: import('vue').ComputedRef<{
        [key: string]: Partial<CSSStyleDeclaration>;
    }>;
    role: import('vue').ComputedRef<string>;
    forceUpdate: () => void | undefined;
    update: () => Promise<Partial<import('@popperjs/core').State>> | undefined;
};
export type UsePopperContentReturn = ReturnType<typeof usePopperContent>;
