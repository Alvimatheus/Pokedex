import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Logo = styled.img`
    width: 600px;
    height: 200px;
`;

export default function AppHeader() {
    return (
        <Wrapper>
            <Logo src="/pokemon.png"></Logo>
            <div>Created by Matheus Alvim</div>
        </Wrapper>
    )
}
