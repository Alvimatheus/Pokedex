import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PokemonCard from '../components/PokemonCard'
import { useRouter } from 'next/router'
import PokemonEndPoint from '../utils/EndPoint'
import PokemonEndPointURL from '../utils/EndPointURL'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function index({ setPkmnSelected }) {
  const [FullData, setFullData] = useState([])
  const [PkmnEndPoint, setPkmnEndPoint] = useState([]) // NAME, URL
  const router = useRouter()




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






// guarda o pkmn selecionado
  function PokemonSelected(pkmnNameUrl){
    setPkmnSelected(pkmnNameUrl)
    router.push('./PokemonDetails')
  }




  console.log("POKEMON FULLDATA DENTRO DO INDEX", FullData) // ESTÁ CHEGANDO!

  return (
    <Wrapper>
          {PokemonEndPoint.map((pkmnNameUrl)=>( // FullData
            <div onClick={()=> PokemonSelected(pkmnNameUrl)}>
              <PokemonCard pkmn={pkmnNameUrl}/>
            </div>
          ))}
    </Wrapper>
  )
}
