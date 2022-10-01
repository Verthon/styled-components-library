import { baseTheme } from '../../theme/baseTheme'
import Loader from '../Loader/Loader'

import { Styled } from './Button.styles'
import type { ButtonProps } from './Button.types'

const HEIGHT = {
  sm: 36,
  md: 46,
  lg: 60,
}

const Button = ({ children, disabled, loading, size, variant = 'filled', color = 'primary' }: ButtonProps) => {
  const height = HEIGHT[size || 'md']
  const BG_COLOR = {
    disabled: baseTheme.colors.disabled.main,
    filled: baseTheme.colors[color].main,
    outline: baseTheme.colors?.white.main,
  }

  const bgColor = BG_COLOR[variant]
  const textColor = variant === 'outline' ? baseTheme.colors[color].main : baseTheme.colors.white.main
  const borderColor = variant === 'outline' ? baseTheme.colors[color].main : 'transparent'

  if (loading) {
    return (
      <Styled.Button
        height={height}
        $bgColor={bgColor}
        $textColor={textColor}
        $borderColor={borderColor}
        data-loading={true}
      >
        <Styled.LoaderContainer>
          <Loader width={height / 2} height={height / 2} thickness={2} />
        </Styled.LoaderContainer>
        <Styled.Content $loading>{children}</Styled.Content>
      </Styled.Button>
    )
  }
  return (
    <Styled.Button
      disabled={disabled}
      height={height}
      $bgColor={bgColor}
      $textColor={textColor}
      $borderColor={borderColor}
    >
      <Styled.Content>{children}</Styled.Content>
    </Styled.Button>
  )
}

export default Button
