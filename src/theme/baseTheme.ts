const DEFAULT_SHADOW_COLOR = {
  main: '286deg 36% 65%',
  light: '286deg 36% 65%',
}

export const baseTheme = {
  colors: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
    },
    white: {
      light: '#ffffff',
      main: '#ffffff',
    },
    danger: {
      light: '#C62E07',
      main: '#C62E07',
    },
    disabled: {
      light: '#C4D0D5',
      main: '#C4D0D5',
    },
  },
  shadows: {
    low: `0.3px 0.6px 0.5px hsl(${DEFAULT_SHADOW_COLOR.main} / 0.45),
    0.4px 0.8px 0.7px -2.3px hsl(${DEFAULT_SHADOW_COLOR.main} / 0.31),
    1.1px 2px 1.8px -4.6px hsl(${DEFAULT_SHADOW_COLOR.main} / 0.17);`,
    medium: `    0.3px 0.6px 0.5px hsl(${DEFAULT_SHADOW_COLOR.main} / 0.48),
    0.6px 1px 0.9px -1.5px hsl(${DEFAULT_SHADOW_COLOR.main} / 0.37),
    2px 3.5px 3.2px -3.1px hsl(${DEFAULT_SHADOW_COLOR.main} / 0.26),
    5.7px 9.9px 9.2px -4.6px hsl(${DEFAULT_SHADOW_COLOR.main} / 0.15);`,
  },
}

export type BaseTheme = typeof baseTheme
