import styled, { css } from 'styled-components'

import type { InputStyleProps } from './Input.types'
import { getPadding } from './Input.utils'

const Wrapper = styled.div(
  () => css`
    position: relative;
  `,
)

Wrapper.displayName = 'LInput--Wrapper'

const Input = styled.input<InputStyleProps>(
  ({ theme, $size }) => css`
    padding: ${getPadding($size)};
    border: 2px solid ${theme.colors.grey[200].main};
    border-radius: 0.5rem;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary.main};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
)

Input.displayName = 'LInput'

const HelperText = styled.p(
  () => css`
    margin-top: 0.5rem;
    font-size: 0.875rem;
    letter-spacing: 0.25px;
  `,
)

HelperText.displayName = 'Input--HelperText'

export const Styled = {
  Input,
  Wrapper,
  HelperText,
}
