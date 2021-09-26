import { darken } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      background-color: ${theme.colors.lightGray2};
    }

    a {
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.blue};
      padding-bottom: 0.2rem;
      border-bottom: 0.1rem dashed ${theme.colors.blue};
      transition: all 0.3s;

      &:hover {
        color: ${darken(0.3, theme.colors.blue)};
        border-color: ${darken(0.3, theme.colors.blue)};
      }
    }
  `}
`

export default GlobalStyles
