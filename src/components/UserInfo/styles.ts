import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadow.default};
    padding: ${theme.spacings.small};
    color: ${theme.colors.black};
  `}
`

export const Id = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.gray};
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.blue};
    padding-bottom: 0.2rem;
    border-bottom: 0.1rem solid ${theme.colors.blue};
    transition: all 0.3s;

    &:hover {
      color: ${darken(0.3, theme.colors.blue)};
      border-bottom: 0.1rem solid ${darken(0.3, theme.colors.blue)};
    }
  `}
`
