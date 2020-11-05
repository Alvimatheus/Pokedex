import React from 'react'
import styled from 'styled-components'
import PkmnSelectedURL from '../components/PokemonCard'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    color: gray;
`;

export const PokemonSelected = styled.h1`
    color: red;
`;

export default function PokemonDetails(PkmnSelected, FullData) {

    console.log("FullData dentro do PokemonDetails", FullData) // não está chegando .....

    return (
        <Wrapper>
            <Title>Pokemon Selecionado:</Title> 
            <PokemonSelected>
                {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.name : "Pokemon não selecionado"}
            </PokemonSelected>
        </Wrapper>
    )
}
