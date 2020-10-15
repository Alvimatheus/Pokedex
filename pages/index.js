import React, {useEffect, useState} from 'react'
import PokemonEndPointURL from '../utils/EndPointURl'
import styled from 'styled-components'
import PokemonCard from '../components/PokemonCard'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function index({PkmnEndPoint}) {

  console.log("PkmnEndPoint DENTRO DO INDEX -- > ", PkmnEndPoint)

  return (
    <Wrapper>
        {PkmnEndPoint.map((pkmnNameUrl)=>{
          return <PokemonCard pkmn={pkmnNameUrl}/>
        })}
    </Wrapper>
  )
}
