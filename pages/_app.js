import React, {useEffect, useState} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import PokemonEndPointURL from '../utils/EndPointURl'
import PokemonEndPoint from '../utils/EndPoint'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: yellow;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps}) {
  const [PkmnEndPoint, setPkmnEndPoint] = useState([])
  const [PkmnSelected, setPkmnSelected] = useState()

  useEffect(() => {
      PokemonEndPoint()
        .then((resolve)=>{
        setPkmnEndPoint(resolve.data.results)
      })
  }, [])

   const changedProps = {...pageProps, PkmnEndPoint : PkmnEndPoint, PkmnSelected: PkmnSelected, setPkmnSelected}

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...changedProps} />
      </ThemeProvider>
    </>  
  )
}