import type { TwoValuesRem, ValueInRems } from '../../types/css'
import type { BasicSizes } from '../../types/sizes'
import { getValueFromRem } from '../../utils/css'

const HEIGHT = {
  sm: '1.75rem',
  md: '2.75rem',
  lg: '3.25rem',
} as const

const PADDING = {
  sm: '0.5rem 1.5rem',
  md: '0.875rem 2rem',
  lg: '1.125rem 2rem',
} as const

const FONT_SIZES = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1rem',
} as const

export const getHeight = (size?: BasicSizes): ValueInRems => {
  return HEIGHT[size || 'md']
}

export const getPadding = (size?: BasicSizes): TwoValuesRem => {
  return PADDING[size || 'md']
}

export const getFontSize = (size?: BasicSizes): ValueInRems => {
  return FONT_SIZES[size || 'md']
}

export const getLoaderHeight = (size?: BasicSizes) => {
  const heightInRems = getHeight(size || 'md')
  const heightValue = getValueFromRem(heightInRems)
  const heightInPixels = (heightValue / 2) * 16

  return heightInPixels
}
