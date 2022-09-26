import styled, { css } from 'styled-components'

import type { InnerLoaderStyleProps, LoaderStyleProps } from './Loader.types'

const Wrapper = styled.div<LoaderStyleProps>(
  ({ width, height, thickness, color }) => css`
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    position: relative;
    height: ${width}px;
    width: ${height}px;
    margin: auto;

    &:before {
      content: '';
      position: absolute;
      animation-delay: -0.15s;
      width: 80%;
      height: 80%;
      border: ${thickness}px solid transparent;
      border-top-color: ${color};
      border-radius: 50%;
      animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      top: 10%;
      left: 10%;
    }

    &:after {
      content: '';
      position: absolute;
      width: 80%;
      height: 80%;
      border: ${thickness}px solid transparent;
      border-top-color: ${color};
      border-radius: 50%;
      animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      top: 10%;
      left: 10%;
    }
  `,
)

Wrapper.displayName = 'LLoader--Wrapper'

const InnerElement = styled.span<InnerLoaderStyleProps>(
  ({ thickness, color }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    &:before {
      content: '';
      position: absolute;
      width: 80%;
      height: 80%;
      border: ${thickness}px solid transparent;
      border-top-color: ${color};
      border-radius: 50%;
      animation-delay: -0.45s;
      animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      top: 10%;
      left: 10%;
    }

    &:after {
      content: '';
      position: absolute;
      width: 80%;
      height: 80%;
      border: ${thickness}px solid transparent;
      border-top-color: ${color};
      border-radius: 50%;
      animation-delay: -0.3s;
      animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      top: 10%;
      left: 10%;
    }
  `,
)

InnerElement.displayName = 'LLoader--InnerElement'

export const Styled = {
  Wrapper,
  InnerElement,
}
