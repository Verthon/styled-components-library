import styled, { css } from 'styled-components'
import * as RCheckbox from '@radix-ui/react-checkbox'

const CheckboxRoot = styled(RCheckbox.Root)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    border-color: transparent;
    background-color: ${theme.colors.primary.main};
    cursor: pointer;

    &:disabled {
      background-color: ${theme.colors.disabled.main};
      cursor: not-allowed;
    }
  `,
)

CheckboxRoot.displayName = 'LChecboxRoot'

const CheckboxIndicator = styled(RCheckbox.Indicator)(
  ({ theme }) => css`
    color: ${theme.colors.white.main};
  `,
)

CheckboxIndicator.displayName = 'LCheckboxIndicator'

export const Styled = {
  CheckboxRoot,
  CheckboxIndicator,
}
