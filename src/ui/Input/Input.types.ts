import type { BasicSizes } from '../../types/sizes'

export type InputProps = {
  name?: string
  id?: string
  disabled?: boolean
  placeholder?: string
  helperText?: string
  size?: Exclude<BasicSizes, 'sm'>
}

export type InputStyleProps = {
  $size: InputProps['size']
}
