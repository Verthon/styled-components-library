import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { Styled } from './RadioGroup.styles'
import type { RadioGroupProps, RadioProps } from './RadioGroup.types'

export const RadioGroup = ({ children }: RadioGroupProps) => {
  return <RadioGroupPrimitive.Root>{children}</RadioGroupPrimitive.Root>
}

export const Radio = ({ value, disabled }: RadioProps) => {
  return (
    <Styled.Radio value={value} disabled={disabled} aria-label={value}>
      <Styled.RadioIndicator />
    </Styled.Radio>
  )
}
