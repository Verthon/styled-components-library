import { baseTheme } from '../../theme/baseTheme'
import Loader from '../Loader/Loader'

import { Styled } from './Button.styles'
import type { ButtonProps } from './Button.types'
import { getLoaderHeight } from './Button.utils'

const Button = ({ children, disabled, loading, size, variant = 'filled', color = 'primary' }: ButtonProps) => {
  const loaderHeight = getLoaderHeight(size)
  const loaderWidth = loaderHeight
  const BG_COLOR = {
    disabled: baseTheme.colors.disabled.main,
    filled: baseTheme.colors[color].main,
    outline: baseTheme.colors?.white.main,
  }

  const bgColor = BG_COLOR[variant]
  const textColor = variant === 'outline' ? baseTheme.colors[color].main : baseTheme.colors.white.main
  const borderColor = variant === 'outline' ? baseTheme.colors[color].main : 'transparent'
  const currentSize = size || 'md'

  if (loading) {
    return (
      <Styled.Button
        $size={currentSize}
        $bgColor={bgColor}
        $textColor={textColor}
        $borderColor={borderColor}
        data-loading={true}
      >
        <Styled.LoaderContainer $size={currentSize}>
          <Loader width={loaderWidth} height={loaderHeight} thickness={2} />
        </Styled.LoaderContainer>
        <Styled.Content $size={currentSize} $loading>
          {children}
        </Styled.Content>
      </Styled.Button>
    )
  }
  return (
    <Styled.Button
      $size={currentSize}
      $bgColor={bgColor}
      $textColor={textColor}
      $borderColor={borderColor}
      disabled={disabled}
    >
      <Styled.Content $size={currentSize}>{children}</Styled.Content>
    </Styled.Button>
  )
}

export default Button
