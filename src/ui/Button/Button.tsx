import type { ButtonProps } from './Button.types'

const Button = ({ children, disabled }: ButtonProps) => {
  return <button disabled={disabled}>{children}</button>
}

export default Button
