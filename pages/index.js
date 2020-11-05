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

export default function index({PkmnEndPoint, setPkmnSelected}) {
const router = useRouter()

// guarda o pkmn selecionado
  function PokemonSelected(pkmnNameUrl){
    setPkmnSelected(pkmnNameUrl)
    router.push('./PokemonDetails')
  }

  return (
    <Wrapper>
          {PkmnEndPoint.map((pkmnNameUrl)=>(
            <div onClick={()=> PokemonSelected(pkmnNameUrl)}>
              <PokemonCard pkmn={pkmnNameUrl}/>
            </div>
          ))}
    </Wrapper>
  )
}
