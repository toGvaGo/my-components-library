import { isString } from './types'

class GoParadoxError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'GoParadoxError'
    }
}
export function throwError(scope: string, m: string): never {
    throw new GoParadoxError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
    if (process.env.NODE_ENV !== 'production') {
        const error: Error = isString(scope)
            ? new GoParadoxError(`[${scope}] ${message}`)
            : scope
        // eslint-disable-next-line no-console
        console.warn(error)
    }
}