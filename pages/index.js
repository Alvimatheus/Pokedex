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

export default function index({}) {

  return (
    <Wrapper>
        <PokemonCard />
    </Wrapper>
  )
}
