import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PokemonEndPointURL from '../utils/EndPointURl'
import { useRouter } from 'next/router'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    border: solid 1px gray;
    flex-direction: column;
    cursor: pointer;
    img{
        width: 150px;
        height: 150px;
        margin: 20px;
    }
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function PokemonCard({pkmn}) {
    const [PkmnURL, setPkmnURL] = useState([])
    const [PokemonSelectedURL, setPokemonSelectedURL] = useState([])

    useEffect(() => {
        PokemonEndPointURL(pkmn.url)
          .then((resolve)=>{
          setPkmnURL(resolve)
        })
    }, [])

    console.log("PKMN URL DENTRO DO POKEMON CARD", PkmnURL)

    // ESSA FUNÇÃO ESTÁ FUNCIONANDO!! PORÉM NÃO SEI COMO PASSAR ELA PRA DENTRO DO PokemonDetails.js 
    function PkmnSelectedURL(PkmnURL){
        setPokemonSelectedURL(PkmnURL)
        console.log("PKMNURL NA PkmnSelectedURL ---->", PkmnURL.abilities && PkmnURL.abilities.ability)
    }

    return (
        <Wrapper>
            <Card>
                <div onClick={()=> PkmnSelectedURL(PkmnURL)}>
                    <img src={PkmnURL.sprites ? PkmnURL.sprites.front_default : "/pokebola.jpg"}></img>
                    <Name>{pkmn.name ? pkmn.name : "????"}</Name>
                </div>
            </Card>
        </Wrapper>
    )
}