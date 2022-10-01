import { Styled } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

const Checkbox = ({ disabled, value }: CheckboxProps) => {
  return (
    <Styled.CheckboxRoot disabled={disabled} value={value} aria-label="checkbox">
      <Styled.CheckboxIndicator>X</Styled.CheckboxIndicator>
    </Styled.CheckboxRoot>
  )
}

export default Checkbox
