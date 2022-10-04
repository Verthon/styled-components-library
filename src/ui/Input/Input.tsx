import { Styled } from './Input.styles'
import type { InputProps } from './Input.types'

export const Input = ({ disabled, placeholder, helperText }: InputProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Input disabled={disabled} placeholder={placeholder} />
      {helperText ? <Styled.HelperText>{helperText}</Styled.HelperText> : null}
    </Styled.Wrapper>
  )
}
