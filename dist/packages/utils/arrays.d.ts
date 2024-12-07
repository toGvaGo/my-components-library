export declare const unique: <T>(arr: T[]) => T[];
type Many<T> = T | ReadonlyArray<T>;
export declare const castArray: <T>(arr: Many<T>) => T[];
export { castArray as ensureArray } from 'lodash-unified';
