import React from 'react'
import styled from 'styled-components'
import PkmnSelectedURL from '../components/PokemonCard'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const PokemonSelected = styled.h1`
    color: red;
`;
export const PokemonImage = styled.img`
    width: 300px;
    height: 300px;
`;
export const PokemonInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PokemonName = styled.div`
    color: black;
`;

export default function PokemonDetails(PkmnSelected) {

    return (
        <Wrapper>
            <PokemonSelected>

                <PokemonInformation>
                    <PokemonImage src={PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.sprites.front_default : "/pokebola.jpg"}></PokemonImage>
                </PokemonInformation>

                <br></br>

                <PokemonInformation>
                    <PokemonName>Pokemon Name:</PokemonName>
                    {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.name : "Missing Pokemon Name"}
                </PokemonInformation>

                <br></br>

                <PokemonInformation>
                    <PokemonName>Pokemon Height:</PokemonName>
                    {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.height : "Missing Pokemon Height"}ft
                </PokemonInformation>

                <br></br>

                <PokemonInformation>
                    <PokemonName>Pokemon Weight:</PokemonName>
                    {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.weight : "Missing Pokemon Weight"}lb
                </PokemonInformation>

                <br></br>

                <PokemonInformation>
                    <PokemonName>Pokemon Base Experience:</PokemonName>
                    {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.base_experience : "Missing Pokemon Base Experience"}
                </PokemonInformation>

                <br></br>

                <PokemonInformation>
                    <PokemonName>Pokemon Abilities:</PokemonName>
                    {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.abilities.map((habilidades)=>{
                        return (
                        <div>
                            {habilidades.ability.name}
                        </div>)
                    }): "Missing Pokemon Abilities"}
                </PokemonInformation>

                <br></br>

                <PokemonInformation>
                    <PokemonName>Pokemon Types:</PokemonName>
                    {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.types.map((tipos)=>{
                        return (
                        <div>
                            {tipos.types && tipos.types.type.name}   {/* ARRUMAR ESTÁ CARALHAAAA */}
                        </div>)
                    }): "Missing Pokemon Types"}
                </PokemonInformation>


                {console.log("PKMN SELECTED DENTRO DO POKEMON DETAILS", PkmnSelected)}
            </PokemonSelected>
        </Wrapper>
    )
}
