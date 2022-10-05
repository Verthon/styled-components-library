import { Styled } from './Input.styles'
import type { InputProps } from './Input.types'

export const Input = ({ disabled, placeholder, helperText, size }: InputProps) => {
  return (
    <>
      <Styled.Wrapper>
        <Styled.Input disabled={disabled} placeholder={placeholder} $size={size} />
      </Styled.Wrapper>
      {helperText ? <Styled.HelperText>{helperText}</Styled.HelperText> : null}
    </>
  )
}
