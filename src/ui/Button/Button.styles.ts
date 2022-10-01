import styled, { css } from 'styled-components'

import type { ButtonContentStyleProps, ButtonStyleProps } from './Button.types'

const Button = styled.button<ButtonStyleProps>(
  ({ theme, height, $bgColor, $textColor, $borderColor }) => css`
    height: ${height}px;
    background-color: ${$bgColor};
    color: ${$textColor};
    border: 1px solid ${$borderColor};
    line-height: 1;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0 0.5rem;

    &:disabled {
      color: ${theme.colors.white.main};
      background-color: ${theme.colors.disabled.main};
      border: 1px solid transparent;
      cursor: not-allowed;
    }

    &[data-loading='true'] {
      cursor: wait;
    }
  `,
)

Button.displayName = 'LButton'

const Content = styled.span<ButtonContentStyleProps>(
  ({ $loading }) => css`
    position: relative;
    visibility: ${$loading ? 'hidden' : 'inherit'};
    height: ${$loading ? 0 : 'auto'};
  `,
)

Content.displayName = 'LButton--Content'

const LoaderContainer = styled.div(
  () => css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
)

LoaderContainer.displayName = 'LButton--LoaderContainer'

export const Styled = {
  Button,
  Content,
  LoaderContainer,
}
