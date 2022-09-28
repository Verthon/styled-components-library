import { screen } from '@testing-library/dom'

import { createTestWrapper } from '../../tests/utils'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('should render Checkbox', async () => {
    const { user } = createTestWrapper({ children: <Checkbox /> })
    const checkbox = screen.getByRole('checkbox')

    await user.click(checkbox)

    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
