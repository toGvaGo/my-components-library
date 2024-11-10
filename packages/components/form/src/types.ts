import type { SetupContext, UnwrapRef } from "vue";
import type {
    RuleItem,
    ValidateError,
    ValidateFieldsError,
} from 'async-validator';
import type { ComponentSize } from "@/constants";
import type { Arrayable } from '@/utils';
import type { MaybeRef } from '@vueuse/core';
import type { FormEmits, FormProps } from './form';
import type { useFormLabelWidth } from './utils';
import { FormItemProp, FormItemProps, FormItemValidateState } from "./form-item";
export type FormLabelWidthContext = ReturnType<typeof useFormLabelWidth>;
export interface FormItemRule extends RuleItem {
    trigger?: Arrayable<string>
}

type Primitive = null | undefined | string | number | boolean | symbol | bigint
type BrowserNativeObject = Date | FileList | File | Blob | RegExp

type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true

type ArrayMethodKey = keyof any[];

type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, ArrayMethodKey>

type ArrayKey = number

type PathImpl<K extends string | number, V> = V extends
    | Primitive
    | BrowserNativeObject
    ? `${K}`
    : `${K}` | `${K}.${Path<V>}`

type Path<T> = T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
    ? {
        [K in TupleKey<T>]-?: PathImpl<Exclude<K, symbol>, T[K]>
    }[TupleKey<T>]
    : PathImpl<ArrayKey, V>
    : {
        [K in keyof T]-?: PathImpl<Exclude<K, symbol>, T[K]>
    }[keyof T]

type FieldPath<T> = T extends object ? Path<T> : never

export type FormRules<
    T extends MaybeRef<Record<string, any> | string> = string
> = Partial<
    Record<
        UnwrapRef<T> extends string ? UnwrapRef<T> : FieldPath<UnwrapRef<T>>,
        Arrayable<FormItemRule>
    >
>

export type FormValidationResult = Promise<boolean>
export type FormValidateCallback = (
    isValid: boolean,
    inValidFields?: ValidateError
) => Promise<void> | void

export interface FormValidateFailure {
    errors: ValidateError[] | null
    fields: ValidateFieldsError
}

export type FormContext = FormProps &
    UnwrapRef<FormLabelWidthContext> & {
        emit: SetupContext<FormEmits>['emit']
        getField: (prop: string) => FormItemContext | undefined
        addField: (field: FormItemContext) => void
        removeField: (field: FormItemContext) => void
        resetFields: (props?: Arrayable<FormItemProp>) => void
        clearValidate: (props?: Arrayable<FormItemProp>) => void
        validateField: (
            props?: Arrayable<FormItemProp>,
            callback?: FormValidateCallback
        ) => FormValidationResult
    }

export interface FormItemContext extends FormItemProps {
    $el: HTMLDivElement | undefined
    size: ComponentSize
    validateState: FormItemValidateState
    isGroup: boolean
    labelId: string
    inputIds: string[]
    hasLabel: boolean
    fieldValue: any
    addInputId: (id: string) => void
    removeInputId: (id: string) => void
    validate: (
        trigger: string,
        callback?: FormValidateCallback
    ) => FormValidationResult
    resetField(): void
    clearValidate(): void
}

