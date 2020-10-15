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
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps, pokemonUrl}) {
  const [PkmnURL, setPkmnURL] = useState([])
  const [PkmnEndPoint, setPkmnEndPoint] = useState([])

  useEffect(() => {
      PokemonEndPoint()
        .then((resolve)=>{
        setPkmnEndPoint(resolve.data.results)
  })
  }, [])

  {/* 
    useEffect(() => {
      PokemonEndPointURL(pokemonUrl.url)
      .then((resolve)=>{
        setPkmnURL(resolve)
        console.log(resolve)
      })
    }, [])
   */}

   const changedProps = {...pageProps, PkmnURL:PkmnURL, PkmnEndPoint:PkmnEndPoint}

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}