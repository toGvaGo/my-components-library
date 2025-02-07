import { buildProps, definePropType } from '@/utils'

import type { ExtractPropTypes } from 'vue'
import type Watermark from './watermark.vue'

export interface WatermarkFontType {
  color?: string
  fontSize?: number | string
  fontWeight?: 'normal' | 'light' | 'weight' | number
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  fontFamily?: string
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center'
  textBaseline?:
  | 'top'
  | 'hanging'
  | 'middle'
  | 'alphabetic'
  | 'ideographic'
  | 'bottom'
}

export const watermarkProps = buildProps({
  zIndex: {
    type: Number,
    default: 9,
  },
  rotate: {
    type: Number,
    default: -22,
  },
  width: Number,
  height: Number,
  image: String,
  content: {
    type: definePropType<string | string[]>([String, Array]),
    default: 'Go Paradox',
  },
  font: {
    type: definePropType<WatermarkFontType>(Object),
  },
  gap: {
    type: definePropType<[number, number]>(Array),
    default: () => [100, 100],
  },
  offset: {
    type: definePropType<[number, number]>(Array),
  },
} as const)

export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>
export type WatermarkInstance = InstanceType<typeof Watermark>
