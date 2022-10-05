import type { BasicSizes } from '../../types/sizes'

export type InputProps = {
  disabled?: boolean
  placeholder?: string
  helperText?: string
  size?: Exclude<BasicSizes, 'sm'>
}

export type InputStyleProps = {
  $size: InputProps['size']
}
