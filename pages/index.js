import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PokemonCard from '../components/PokemonCard'
import { useRouter } from 'next/router'
import PokemonEndPoint from '../utils/EndPoint'
import PokemonEndPointURL from '../utils/EndPointURL'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export default function index({ setPkmnSelected }) {
  const [FullData, setFullData] = useState([]) // ARRAY DE OBJETOS {name: NomeDoPokemon, data:{...}} 
  const [PkmnEndPoint, setPkmnEndPoint] = useState([]) // NAME, URL
  const router = useRouter()

  
// ENTENDER MELHOR OQ ACONTECE AQUI DENTRO
useEffect(() => {
    PokemonEndPoint().then((resolve)=>{
      setPkmnEndPoint(resolve.data.results)
      const Promisses = resolve.data.results.map((pokemon)=>{
        return PokemonEndPointURL(pokemon.url).then((success)=>{
          return {name: pokemon.name, data: success}
        })
      })
        Promise.all(Promisses).then((allReturns)=>{
          setFullData(allReturns)
        })
      })
}, [])
// ENTENDER MELHOR OQ ACONTECE AQUI DENTRO

console.log("FULLDATA", FullData)





// guarda o pkmn selecionado
  function PokemonSelected(pkmnNameUrl){
    setPkmnSelected(pkmnNameUrl)
    router.push('./PokemonDetails')
  }
<<<<<<< Updated upstream




  console.log("POKEMON FULLDATA DENTRO DO INDEX", FullData) // ESTÁ CHEGANDO!

  return (
    <Wrapper>
          {PokemonEndPoint.map((pkmnNameUrl)=>( // FullData
            <div onClick={()=> PokemonSelected(pkmnNameUrl)}>
=======
  return (
    <Wrapper>
          {FullData.length > 0 && FullData.map((pkmnNameUrl)=>{ // FullData e PkmnEndPoint
            return <div onClick={()=> PokemonSelected(pkmnNameUrl)}>
>>>>>>> Stashed changes
              <PokemonCard pkmn={pkmnNameUrl}/>
            </div>
          ))}
    </Wrapper>
  )
}
