import { Styled } from './Input.styles'
import type { InputProps } from './Input.types'

export const Input = ({ disabled, placeholder }: InputProps) => {
  return <Styled.Input disabled={disabled} placeholder={placeholder} />
}
