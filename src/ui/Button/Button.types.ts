import { BasicSizes } from '../../types/sizes'

export type ButtonProps = {
  children: React.ReactNode
  loading?: boolean
  disabled?: boolean
  size?: BasicSizes
  variant?: 'filled' | 'outline'
  color?: 'primary' | 'danger'
}

export type ButtonStyleProps = Pick<ButtonProps, 'disabled'> & {
  $size: BasicSizes
  $bgColor: string
  $textColor: string
  $borderColor: string
}

export type ButtonContentStyleProps = Pick<ButtonStyleProps, '$size'> & {
  $loading?: boolean
}

export type ButtonLoaderContainerStyleProps = Pick<ButtonContentStyleProps, '$size'>
