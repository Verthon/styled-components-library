import type { TwoValuesRem } from '../../types/css'

import { InputProps } from './Input.types'

const PADDING = {
  md: '0.5rem 1rem',
  lg: '0.75rem 1rem',
} as const

export const getPadding = (size?: InputProps['size']): TwoValuesRem => {
  return PADDING[size || 'md']
}
