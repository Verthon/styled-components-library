import { CheckIcon } from '@radix-ui/react-icons'

import { Styled } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

const Checkbox = ({ disabled, value }: CheckboxProps) => {
  return (
    <Styled.CheckboxRoot disabled={disabled} value={value} aria-label="checkbox">
      <Styled.CheckboxIndicator>
        <CheckIcon fontSize={40} />
      </Styled.CheckboxIndicator>
    </Styled.CheckboxRoot>
  )
}

export default Checkbox
