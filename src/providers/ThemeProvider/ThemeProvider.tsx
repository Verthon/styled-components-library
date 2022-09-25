import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { baseTheme } from '../../theme/baseTheme'
import { GlobalStyles } from '../../theme/globalStyles'

import type { ThemeProviderProps } from './ThemeProvider.types'

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={baseTheme}>
      {children}
      <GlobalStyles />
    </StyledComponentsThemeProvider>
  )
}
