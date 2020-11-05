import React, {useEffect, useState} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import PokemonEndPointURL from '../utils/EndPointURl'
import PokemonEndPoint from '../utils/EndPoint'
import AppHeader from '../components/AppHeader'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f1c40f;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps}) {
  const [PkmnEndPoint, setPkmnEndPoint] = useState([]) // NAME, URL
  const [PkmnSelected, setPkmnSelected] = useState()
  const [FullData, setFullData] = useState([])

  let PokemonDataArray = [];

  useEffect(() => {
      PokemonEndPoint()
        .then((resolve)=>{
        setPkmnEndPoint(resolve.data.results)
        resolve.data.results.map((pokemon)=>{
          PokemonEndPointURL(pokemon.url).then((success)=>{
            PokemonDataArray.push({name: pokemon.name, data: success})
          })
        })
      })
      setFullData(PokemonDataArray)
  }, [])

   const changedProps = {...pageProps, PkmnEndPoint : PkmnEndPoint, PkmnSelected: PkmnSelected, setPkmnSelected, FullData: FullData,}

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