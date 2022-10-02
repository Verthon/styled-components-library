import { screen } from '@testing-library/dom'

import { createTestWrapper } from '../../../tests/utils'
import Button from '../Button'

describe('Button', () => {
  it('should render button with its children', () => {
    createTestWrapper({ children: <Button>My button</Button> })

    expect(screen.getByRole('button', { name: /my button/i })).toBeEnabled()
  })

  it('should render disabled button', () => {
    createTestWrapper({ children: <Button disabled>My button</Button> })

    expect(screen.getByRole('button', { name: /my button/i })).toBeDisabled()
  })

  it('should render the loading button', () => {
    createTestWrapper({ children: <Button loading>Loading one</Button> })

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
