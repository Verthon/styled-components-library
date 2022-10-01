import styled, { css } from 'styled-components'
import * as RCheckbox from '@radix-ui/react-checkbox'

const CheckboxRoot = styled(RCheckbox.Root)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 0.25rem;
    border-color: transparent;
    cursor: pointer;

    &[data-state='checked'] {
      background-color: ${theme.colors.primary.main};
    }

    &:disabled {
      background-color: ${theme.colors.disabled.main};
      cursor: not-allowed;
    }
  `,
)

CheckboxRoot.displayName = 'LCheckboxRoot'

const CheckboxIndicator = styled(RCheckbox.Indicator)(
  ({ theme }) => css`
    margin-top: 0.15rem;
    color: ${theme.colors.white.main};
  `,
)

CheckboxIndicator.displayName = 'LCheckboxIndicator'

export const Styled = {
  CheckboxRoot,
  CheckboxIndicator,
}
