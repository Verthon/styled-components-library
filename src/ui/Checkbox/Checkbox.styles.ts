import styled, { css } from 'styled-components'
import * as RCheckbox from '@radix-ui/react-checkbox'

const CheckboxRoot = styled(RCheckbox.Root)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    border-color: transparent;
    color: ${theme.colors.white.main};
    background-color: ${theme.colors.grey[200].main};
    cursor: pointer;

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

    &[data-state='checked'] {
      background-color: ${theme.colors.primary.main};
    }

    &:hover:not([disabled]) {
      cursor: pointer;
      filter: brightness(0.85);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
)

CheckboxRoot.displayName = 'LCheckboxRoot'

const CheckboxIndicator = styled(RCheckbox.Indicator)(
  ({ theme }) => css`
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    color: ${theme.colors.white.main};

    svg {
      transform: scale(1.1);
    }
  `,
)

CheckboxIndicator.displayName = 'LCheckboxIndicator'

export const Styled = {
  CheckboxRoot,
  CheckboxIndicator,
}
