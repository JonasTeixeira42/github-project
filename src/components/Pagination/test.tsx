import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Pagination from '.'

describe('<Pagination />', () => {
  it('should render the Pagination correctly', () => {
    const { container } = renderWithTheme(
      <Pagination dataLength={20} itemsPerPage={10} />
    )

    expect(
      screen.getByRole('button', { name: /previous/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    expect(screen.getByText('1 of 2')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change to the next page when clicking', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <Pagination dataLength={20} itemsPerPage={10} onChangePage={onClick} />
    )

    const button = screen.getByRole('button', { name: /next/i })
    userEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(10, 20)
  })

  it('should change to the previous page when clicking', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <Pagination dataLength={20} itemsPerPage={10} onChangePage={onClick} />
    )

    const nextButton = screen.getByRole('button', { name: /next/i })
    const previousButton = screen.getByRole('button', { name: /previous/i })
    userEvent.click(nextButton)
    userEvent.click(previousButton)

    expect(onClick).toHaveBeenCalledTimes(2)
    expect(onClick).toHaveBeenCalledWith(0, 10)
  })

  it('should be disabled when the users cant change pages', () => {
    renderWithTheme(<Pagination dataLength={10} itemsPerPage={10} />)

    const nextButton = screen.getByRole('button', { name: /next/i })
    const previousButton = screen.getByRole('button', { name: /previous/i })

    expect(nextButton).toBeDisabled()
    expect(previousButton).toBeDisabled()
  })
})
