import styled, { css } from 'styled-components'

import type { ButtonContentStyleProps, ButtonLoaderContainerStyleProps, ButtonStyleProps } from './Button.types'
import { getFontSize, getHeight, getPadding } from './Button.utils'

const Button = styled.button<ButtonStyleProps>(
  ({ $bgColor, $textColor, $borderColor, $size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${getHeight($size)};
    background-color: ${$bgColor};
    color: ${$textColor};
    border: 2px solid ${$borderColor};
    line-height: 1;
    border-radius: 2.5rem;
    cursor: pointer;
    font-size: ${getFontSize($size)};
    font-weight: 600;

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
  ({ $loading, $size }) => css`
    letter-spacing: 0.75px;
    line-height: 1.75rem;
    padding: ${getPadding($size)};
    position: relative;
    visibility: ${$loading ? 'hidden' : 'inherit'};
    height: ${$loading ? 0 : 'auto'};
  `,
)

Content.displayName = 'LButton--Content'

const LoaderContainer = styled.div<ButtonLoaderContainerStyleProps>(
  ({ $size }) => css`
    padding: ${getPadding($size)};
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
