import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PokemonCard from '../components/PokemonCard'
import PokemonDetails from './PokemonDetails'
import { useRouter } from 'next/router'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function index({PkmnEndPoint, setPkmnSelected, FullData}) {
const router = useRouter()

console.log("POKEMON FULLDATA DENTRO DO INDEX", FullData) // ESTÁ CHEGANDO!

// guarda o pkmn selecionado
  function PokemonSelected(pkmnNameUrl){
    setPkmnSelected(pkmnNameUrl)
    router.push('./PokemonDetails')
  }

  return (
    <Wrapper>
          {FullData.map((pkmnNameUrl)=>( // troquei o PkmnEndPoint pelo FullData e ta dando pau
            <div onClick={()=> PokemonSelected(pkmnNameUrl)}>
              <PokemonCard pkmn={pkmnNameUrl}/>
            </div>
          ))}
    </Wrapper>
  )
}
