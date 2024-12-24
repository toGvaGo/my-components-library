import { TinyColor } from '@ctrl/tinycolor';
import { ButtonProps } from './button';
export declare function darken(color: TinyColor, amount?: number): string;
export declare function useButtonCustomStyle(props: ButtonProps): import('vue').ComputedRef<Record<string, string>>;
