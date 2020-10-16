import React from 'react'
import styled from 'styled-components'
import PkmnSelectedURL from '../components/PokemonCard'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function PokemonDetails(PkmnSelected, PokemonSelectedURL) {

    return (
        <Wrapper>
            Pokemon Selecionado: 
            <div>
                {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.name : "Pokemon não selecionado"}
                {console.log("POKEMON SELECTED URL DENTRO DO QUEM SOMOS ---- >", PokemonSelectedURL)}
            </div>

        </Wrapper>
    )
}
