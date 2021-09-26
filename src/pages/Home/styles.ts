import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as PaginationStyles from 'components/Pagination/styles'

export const Wrapper = styled.div``

export const Main = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;

    & > ${HeadingStyles.Wrapper} {
      margin: ${theme.spacings.medium} 0;
    }

    ${media.greaterThan('medium')`
      & > ${HeadingStyles.Wrapper} {
        margin: ${theme.spacings.medium} 0 ${theme.spacings.xlarge};
      }
    `}

    ${PaginationStyles.Wrapper} {
      margin-top: ${theme.spacings.small};
    }

    animation: transformAnimation 0.8s forwards;
    @keyframes transformAnimation {
      from {
        opacity: 0;
        transform: translateX(-3rem);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `}
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    column-gap: ${theme.spacings.xsmall};
    row-gap: ${theme.spacings.small};
  `}
`
