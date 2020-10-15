import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PokemonEndPointURL from '../utils/EndPointURl'

export const Card = styled.div`
    border: solid 2px gray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

    useEffect(() => {
        PokemonEndPointURL(pkmn.url)
          .then((resolve)=>{
          setPkmnURL(resolve)
          console.log(resolve.data)
        })
    }, [])

    console.log("PKMNURL FORA DO USEEFFECT -->", PkmnURL)


    return (
        <Card>
            <div>
            <img src={PkmnURL.sprites ? PkmnURL.sprites.front_default : "/pokebola.jpg"}></img>
                <Name>{pkmn.name ? pkmn.name : "????"}</Name>
            </div>
        </Card>
    )
}
