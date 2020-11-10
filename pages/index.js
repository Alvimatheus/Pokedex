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
export const Holder = styled.div`

`;
export default function index({ setPkmnSelected }) {
  const [FullData, setFullData] = useState([]) // ARRAY DE OBJETOS {name: NomeDoPokemon, data:{...}} 
  const [PkmnEndPoint, setPkmnEndPoint] = useState([]) // NAME, URL
  const router = useRouter()

useEffect(() => {
    PokemonEndPoint().then((resolve)=>{
      setPkmnEndPoint(resolve.data.results)
      const Promisses = resolve.data.results.map((pokemon)=>{
        return PokemonEndPointURL(pokemon.url).then((success)=>{
          return {name: pokemon.name, data: success}
        })
      })
        Promise.all(Promisses).then((allReturns)=>{
          setFullData(allReturns)
        })
      })
}, [])

// guarda o pkmn selecionado
  function PokemonSelected(pkmnNameUrl){
    setPkmnSelected(pkmnNameUrl)
    router.push('./PokemonDetails')
  }

  return (
    <Holder>
          <Wrapper>
              {FullData.length > 0 && FullData.map((pkmnNameUrl)=>{ // FullData e PkmnEndPoint
                return <div onClick={()=> PokemonSelected(pkmnNameUrl)}>
                  <PokemonCard pkmn={pkmnNameUrl}/>
                  </div>
                })}
          </Wrapper> 

    </Holder>
  )
}
