import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { UserProvider } from 'hooks/use-users'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserProvider>
        <Routes />
        <ToastContainer autoClose={3000} />
      </UserProvider>

      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>
)

export default App
