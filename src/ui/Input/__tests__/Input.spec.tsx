import { screen } from '@testing-library/dom'

import { createTestWrapper } from '../../../tests/utils'
import { Input } from '../Input'

describe('Input', () => {
  it('should render disabled Input', () => {
    createTestWrapper({ children: <Input name="userName" placeholder="disabled" disabled /> })

    expect(screen.getByPlaceholderText('disabled')).toBeDisabled()
  })
})
