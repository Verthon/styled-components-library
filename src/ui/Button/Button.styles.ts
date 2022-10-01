import styled, { css } from 'styled-components'

import type { ButtonContentStyleProps, ButtonStyleProps } from './Button.types'

const Button = styled.button<ButtonStyleProps>(
  ({ theme, height, $bgColor, $textColor, $borderColor }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${height}px;
    background-color: ${$bgColor};
    color: ${$textColor};
    border: 1px solid ${$borderColor};
    line-height: 1;
    border-radius: 2.5rem;
    cursor: pointer;
    font-size: 1rem;

    &:disabled {
      opacity: 0.5;
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
    letter-spacing: 0.75px;
    line-height: 1.75rem;
    padding: 1.125rem 2rem;
    position: relative;
    visibility: ${$loading ? 'hidden' : 'inherit'};
    height: ${$loading ? 0 : 'auto'};
  `,
)

Content.displayName = 'LButton--Content'

const LoaderContainer = styled.div(
  () => css`
    padding: 1.125rem 2rem;
    position: absolute;
    z-index: 2;
  `,
)

LoaderContainer.displayName = 'LButton--LoaderContainer'

export const Styled = {
  Button,
  Content,
  LoaderContainer,
}
