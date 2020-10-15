import Axios from 'axios'

export default async function PokemonEndPoint(){
    return new Promise((resolve, reject)=>{
        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((resposta)=>{
            resolve(resposta)
        })
            .catch((error)=>{
            reject(error)
        })
    })
}