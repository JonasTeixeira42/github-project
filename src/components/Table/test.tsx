import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import repositories from './mock'

import Table from '.'

describe('<Table />', () => {
  it('should render the table correctly', () => {
    const { container } = renderWithTheme(<Table repositories={repositories} />)

    expect(screen.getByRole('heading', { name: /id/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Repository/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /url/i })).toBeInTheDocument()

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Repo 1')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Go to repository/i })
    ).toHaveAttribute('href', 'https://www.google.com/')

    expect(container.firstChild).toMatchSnapshot()
  })
})
