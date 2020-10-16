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

export const HolderContactLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContactLogo = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
`;

export default function AppHeader() {
    return (
        <Wrapper>
            <Logo src="/pokemon.png"></Logo>
            <HolderContactLogo>
                <ContactLogo src="/github-brands.svg"></ContactLogo>
                <ContactLogo src="/twitter-square-brands.svg"></ContactLogo>
                <ContactLogo src="/instagram-square-brands.svg"></ContactLogo>
            </HolderContactLogo>
            <div>Created by Matheus Alvim</div>
        </Wrapper>
    )
}
