import { screen } from '@testing-library/dom'

import { createTestWrapper } from '../../tests/utils'

import Loader from './Loader'

describe('Loader', () => {
  it('should render Loader', () => {
    createTestWrapper({ children: <Loader /> })

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should render Loader with different height and width and thickness', () => {
    const loader = createTestWrapper({ children: <Loader width={100} height={100} thickness={4} /> })

    expect(loader).toMatchSnapshot()
  })
})
