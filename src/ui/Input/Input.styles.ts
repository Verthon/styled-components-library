import styled, { css } from 'styled-components'

const Input = styled.input(
  ({ theme }) => css`
    border: 1px solid ${theme.colors.grey[200]};
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
)

Input.displayName = 'LInput'

export const Styled = {
  Input,
}
