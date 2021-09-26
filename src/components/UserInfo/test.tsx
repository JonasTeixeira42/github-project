import React from 'react'
import { screen } from '@testing-library/react'

import UserInfo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  id: 1,
  login: 'UserTest',
  html_url: 'https://www.google.com/'
}

describe('<UserInfo />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithTheme(<UserInfo {...props} />)

    expect(screen.getByRole('heading', { name: /1/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /UserTest/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /go to profile/i })
    ).toHaveAttribute('href', 'https://www.google.com/')

    expect(container.firstChild).toMatchSnapshot()
  })
})
