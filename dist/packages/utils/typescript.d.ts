export declare const mutable: <T extends readonly any[] | Record<string, unknown>>(val: T) => Mutable<typeof val>;
export type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};
export type HTMLElementCustomized<T> = HTMLElement & T;
export type Nullable<T> = T | null;
export type Arrayable<T> = T | T[];
export type Awaitable<T> = Promise<T> | T;
