import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
      <ToastContainer autoClose={3000} />
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>
)

export default App
