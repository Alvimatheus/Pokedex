import Axios from 'axios'

export default async function PokemonEndPointURL(url){
    return new Promise((resolve, reject)=>{
        Axios.get(url)
            .then((resposta)=>{
            resolve(resposta.data)
        })
            .catch((error)=>{
            reject(error)
        })
    })
}




