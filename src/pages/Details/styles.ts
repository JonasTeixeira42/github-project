import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const Main = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;

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
    & > ${HeadingStyles.Wrapper} {
      margin: ${theme.spacings.medium} 0;
    }

    ${media.greaterThan('medium')`
      & > ${HeadingStyles.Wrapper} {
        margin: ${theme.spacings.medium} 0 ${theme.spacings.xlarge};
      }
    `}
  `}
`

export const SectionRepositories = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.default};
    border-radius: ${theme.border.radius};
    margin: ${theme.spacings.medium} 0;
    padding: ${theme.spacings.small};

    & > ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
