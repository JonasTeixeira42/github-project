import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    border: 0;
    outline: 0;
    padding: ${theme.spacings.xxsmall} 1.4rem;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.blue};

    &:disabled {
      cursor: not-allowed;
      background-color: ${lighten(0.2, theme.colors.blue)};
    }
  `}
`

export const Page = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
