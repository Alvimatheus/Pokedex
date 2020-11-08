import React from 'react'
import styled from 'styled-components'
import PkmnSelectedURL from '../components/PokemonCard'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const PokemonImage = styled.img`
    width: 300px;
    height: 300px;
`;
export const PokemonInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HolderInformation = styled.div`
    padding: 20px;
`; 
export const PkmnName = styled.div`
    color: black;
    font-size: 15px;
`;
export const Divider = styled.div`
    padding-bottom: 15px;
`;

export default function PokemonDetails(PkmnSelected) {

    return (
        <Wrapper>
                <PokemonInformation>
                    <PokemonImage src={PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.sprites.front_default : "/pokebola.jpg"}></PokemonImage>
                </PokemonInformation>

                <PokemonInformation>
                    <HolderInformation>
                        <Divider>
                            <PkmnName>Pokemon Name</PkmnName>
                            {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.name : "Missing Pokemon Name"}
                        </Divider>

                        <Divider>
                            <PkmnName>Pokemon Height</PkmnName>
                            {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.height : "Missing Pokemon Height"}ft
                        </Divider>

                        <Divider>
                            <PkmnName>Pokemon Weight</PkmnName>
                            {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.weight : "Missing Pokemon Weight"}lb
                        </Divider>
                    </HolderInformation>


                    <HolderInformation>
                        <Divider>
                            <PkmnName>Pokemon Base Experience</PkmnName>
                            {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.base_experience : "Missing Pokemon Base Experience"}
                        </Divider>

                        <Divider>
                            <PkmnName>Pokemon Abilities</PkmnName>
                            {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.abilities.map((habilidades)=>{
                                return (
                                <div>
                                    {habilidades.ability.name}
                                </div>)
                            }): "Missing Pokemon Abilities"}
                        </Divider>





                        <Divider>
                            <PkmnName>Pokemon Types</PkmnName>
                            {PkmnSelected.PkmnSelected ? PkmnSelected.PkmnSelected.data.types.map((tipos)=>{
                                console.log("PKMN SELECTED DENTRO DO TYPE",PkmnSelected)
                                return (
                                <div>
                                    {tipos.name && tipos.name}   {/* ARRUMAR ESTÁ CARALHAAAA */}
                                </div>)
                            }): "Missing Pokemon Types"}
                        </Divider>








                    </HolderInformation>            
                </PokemonInformation>          
        </Wrapper>
    )
}
