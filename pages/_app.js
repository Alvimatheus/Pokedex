import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import AppHeader from '../components/AppHeader'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f1c40f;
    font-family: 'Ubuntu', sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps}) {
  const [PkmnSelected, setPkmnSelected] = useState()

   const changedProps = {...pageProps, PkmnSelected: PkmnSelected, setPkmnSelected}

  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <ThemeProvider theme={theme}>
        <Component {...changedProps} />
      </ThemeProvider>
    </>  
  )
}