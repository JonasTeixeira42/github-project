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

export const Link = styled.a``
