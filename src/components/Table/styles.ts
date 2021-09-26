import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
  `}
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
      padding-bottom: 0.8rem;
      margin-bottom: 0.8rem;
    }
  `}
`

export const Cell = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 0.5rem;
  `}
`

export const Link = styled.a``

export const Header = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`
