import { ComponentSize } from '../../../../constants';
import { MaybeRef } from '@vueuse/core';
export declare const useFormSize: (fallback?: MaybeRef<ComponentSize | undefined>, ignore?: Partial<Record<"prop" | "form" | "formItem" | "global", boolean>>) => import('vue').ComputedRef<"" | "small" | "default" | "large">;
export declare const useFormDisabled: (fallback?: MaybeRef<boolean | undefined>) => import('vue').ComputedRef<boolean>;
export declare const useSize: (fallback?: MaybeRef<ComponentSize | undefined>, ignore?: Partial<Record<"prop" | "form" | "formItem" | "global", boolean>>) => import('vue').ComputedRef<"" | "small" | "default" | "large">;
export declare const useDisabled: (fallback?: MaybeRef<boolean | undefined>) => import('vue').ComputedRef<boolean>;
