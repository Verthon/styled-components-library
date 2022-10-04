import styled, { css } from 'styled-components'

const Wrapper = styled.div(
  () => css`
    position: relative;
  `,
)

Wrapper.displayName = 'LInput--Wrapper'

const Input = styled.input(
  ({ theme }) => css`
    padding: 0.5rem 1rem;
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

const HelperText = styled.span(
  () => css`
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
