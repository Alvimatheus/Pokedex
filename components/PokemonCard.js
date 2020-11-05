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
    const [PkmnURL, setPkmnURL] = useState([]) // guarda a URL de cada pkmn

    // chama endpoint da URL
    useEffect(() => {
        PokemonEndPointURL(pkmn.url)
          .then((resolve)=>{
          setPkmnURL(resolve)
        })
    }, [])

    return (
        <Wrapper>
            <Card>
                <div>
                    <img src={PkmnURL.sprites ? PkmnURL.sprites.front_default : "/pokebola.jpg"}></img>
                    <Name>{pkmn.name ? pkmn.name : "????"}</Name>
                </div>
            </Card>
        </Wrapper>
    )
}