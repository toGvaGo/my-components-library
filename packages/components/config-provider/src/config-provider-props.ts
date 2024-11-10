import { buildProps, definePropType } from '@/utils'
import { useEmptyValuesProps, useSizeProp } from '@/hooks';

import type { ExtractPropTypes } from 'vue';
// import type { Language } from '@/locale';

import type { ButtonConfigContext } from '@/components/button';
import type { MessageConfigContext } from '@/components/message';
import { isExpression } from 'typescript';


export type ExperimentalFeatures = {};

export const configProviderProps = buildProps({
    locale: {
        // type: definePropType<Language>(Object),
        type: String
    },
    size: useSizeProp,
    button: {
        type: definePropType<ButtonConfigContext>(Object),
    },
    experimentalFeatures: {
        type: definePropType<ExperimentalFeatures>(Object)
    },
    keybordNavigation: {
        type: Boolean,
        default: true,
    },
    message: {
        type: definePropType<MessageConfigContext>(Object),
    },
    zIndex: Number,
    namespace: {
        type: String,
        default: 'gp',
    },
    ...useEmptyValuesProps,
} as const)

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>

