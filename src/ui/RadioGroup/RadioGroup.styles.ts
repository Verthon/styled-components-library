import styled, { css } from 'styled-components'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

const Radio = styled(RadioGroupPrimitive.Item)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 2px solid ${theme.colors.primary.main};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    &:hover {
      box-shadow: 0 0 0 2px black;
    }
    &:focus {
      box-shadow: 0 0 0 2px black;
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
