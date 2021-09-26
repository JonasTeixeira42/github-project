import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

type WrapperProps = Pick<HeadingProps, 'size'>

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.black};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
