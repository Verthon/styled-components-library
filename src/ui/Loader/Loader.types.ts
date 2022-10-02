export type LoaderProps = {
  width?: number
  height?: number
  className?: string
  thickness?: number
  color?: string
}

export type LoaderStyleProps = Required<Pick<LoaderProps, 'height' | 'width' | 'thickness' | 'color'>>

export type InnerLoaderStyleProps = Pick<LoaderStyleProps, 'thickness' | 'color'>
