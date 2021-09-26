import React from 'react'
import { HashRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { UserProvider } from 'hooks/use-users'
import { RepositoryProvider } from 'hooks/use-repositories'

const App = () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <RepositoryProvider>
        <UserProvider>
          <Routes />
          <ToastContainer autoClose={3000} />
        </UserProvider>
      </RepositoryProvider>

      <GlobalStyles />
    </HashRouter>
  </ThemeProvider>
)

export default App
