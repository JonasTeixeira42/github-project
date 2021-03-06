import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import UserCard from '.'

const props = {
  avatar_url: 'https://source.unsplash.com/random/100x100',
  login: 'JonasTeixeira42',
  id: 1
}

describe('<UserCard />', () => {
  it('should render the UserCard component', () => {
    const { container } = renderWithTheme(<UserCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /JonasTeixeira42/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /1/i })).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /JonasTeixeira42/i })
    ).toHaveAttribute('src', 'https://source.unsplash.com/random/100x100')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should fire a function when clicking', () => {
    const onClick = jest.fn()
    renderWithTheme(<UserCard {...props} onClick={onClick} />)

    const block = screen.getByRole('heading', { name: /JonasTeixeira42/i })
    userEvent.click(block)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith('JonasTeixeira42')
  })
})
