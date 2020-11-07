import styled from 'styled-components'

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

export default function PokemonCard({pkmn}) { // pkmn está passando como props todos os dados do pkmnNameUrl (index.js)
    return (
        <Wrapper>
            <Card>
                <div>
                    <img src={pkmn.data.sprites ? pkmn.data.sprites.front_default : "/pokebola.jpg"}></img>
                    <Name>{pkmn.name ? pkmn.name : "????"}</Name>
                </div>
            </Card>
        </Wrapper>
    )
}