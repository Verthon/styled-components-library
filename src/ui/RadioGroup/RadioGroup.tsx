import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { Styled } from './RadioGroup.styles'
import type { RadioGroupProps, RadioProps } from './RadioGroup.types'

export const RadioGroup = ({ children, defaultChecked }: RadioGroupProps) => {
  return <RadioGroupPrimitive.Root defaultChecked={defaultChecked}>{children}</RadioGroupPrimitive.Root>
}

export const Radio = ({ value, disabled, checked }: RadioProps) => {
  return (
    <Styled.Radio value={value} disabled={disabled} aria-label={value} checked={checked}>
      <Styled.RadioIndicator />
    </Styled.Radio>
  )
}
