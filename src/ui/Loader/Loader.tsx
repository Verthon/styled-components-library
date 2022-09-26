import { Styled } from './Loader.styles'
import type { LoaderProps } from './Loader.types'

const DEFAULT_HEIGHT = 200
const DEFAULT_WIDTH = 200
const THICKNESS = {
  sm: 8,
  md: 14,
  lg: 20,
}

const Loader = ({ width, height, thickness, className, color }: LoaderProps) => {
  const currentThickness = thickness || THICKNESS['md']

  return (
    <Styled.Wrapper
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_HEIGHT}
      thickness={currentThickness}
      className={className}
      role="progressbar"
      color={color || 'inherit'}
    >
      <Styled.InnerElement thickness={currentThickness} color={color || 'inherit'} />
    </Styled.Wrapper>
  )
}

export default Loader
