import styled, { css } from 'styled-components'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

const Radio = styled(RadioGroupPrimitive.Item)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 2px solid ${theme.colors.grey[200].main};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;

    &[data-state='checked'] {
      outline: 0;
      border: 2px solid ${theme.colors.primary.main};
    }

    &:focus {
      outline: 0;
      box-shadow: ${theme.colors.grey[50].main} 0 0 0 0.35rem;
    }

    &:focus-visible {
      outline: 0;
      box-shadow: ${theme.colors.grey[50].main} 0 0 0 0.35rem;
    }

    &[data-state='checked']:focus {
      outline: 0;
      box-shadow: ${theme.colors.primary.light} 0 0 0 0.35rem;
    }

    &[data-state='checked']:focus-visible {
      outline: 0;
      box-shadow: ${theme.colors.primary.light} 0 0 0 0.35rem;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not([disabled]) {
      cursor: pointer;
      filter: brightness(0.85);
    }
  `,
)

Radio.displayName = 'LRadio'

const RadioIndicator = styled(RadioGroupPrimitive.Indicator)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${theme.colors.primary.main};
    }
  `,
)

RadioIndicator.displayName = 'LRadio--Indicator'

export const Styled = {
  Radio,
  RadioIndicator,
}
