import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the Heading correctly', () => {
    renderWithTheme(<Heading>Calendar</Heading>)

    const heading = screen.getByRole('heading', { name: /Calendar/i })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({ color: '#000000' })
  })

  it('should render the heading with normal size by default', () => {
    renderWithTheme(<Heading>Calendar</Heading>)

    const heading = screen.getByRole('heading', { name: /Calendar/i })

    expect(heading).toHaveStyle({ 'font-size': '1.6rem' })
  })

  it('should render the heading with large size', () => {
    renderWithTheme(<Heading size="large">Calendar</Heading>)

    const heading = screen.getByRole('heading', { name: /Calendar/i })

    expect(heading).toHaveStyle({ 'font-size': '2.0rem' })
  })
})
