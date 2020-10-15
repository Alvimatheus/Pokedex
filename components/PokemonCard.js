import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

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

export default function PokemonCard() {

    return (
        <Card>
            <div>
                <img src="/pokebola.jpg"></img>
            <Name>???</Name>
            </div>
        </Card>
    )
}
