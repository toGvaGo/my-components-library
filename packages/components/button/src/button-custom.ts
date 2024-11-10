import { computed } from 'vue'
// import {TinyColor} from '@ctrl/tinycolor'
import { useNamespace } from '@/hooks'
// import { useFormDisabled } from '@/components/form'
import type { ButtonProps } from './button'

// export function darken(color: TinyColor, amount = 20) {
//     return color.mix('#141414', amount).toString();
// }

export function useButtonCustomStyle(props: ButtonProps) {
    // const _disabled = useFormDisabled();
    const _disabled = false;
    const ns = useNamespace('button');

    return computed(() => {
        let styles: Record<string, string> = {};

        let buttonColor = props.color;

        if (buttonColor) {
            const match = (buttonColor as string).match(/var\((.*?)\)/);

            if (match) {
                buttonColor = window.getComputedStyle(document.documentElement).getPropertyValue(match[1]);
            }

            // const color = new TinyColor(buttonColor);
        }
        return styles
    })

}