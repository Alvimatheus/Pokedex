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

export default function App({ Component, pageProps}) {
  //const [PkmnURL, setPkmnURL] = useState([])
  const [PkmnEndPoint, setPkmnEndPoint] = useState([]) // aqui leva NAME: , URL:

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
        console.log(resolve.data)
      })
  }, [])
 */}

   const changedProps = {...pageProps, PkmnEndPoint : PkmnEndPoint}

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...changedProps} />
      </ThemeProvider>
    </>
  )
}