import 'styled-components'

import { BaseTheme } from './src/theme/baseTheme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends BaseTheme {}
}
