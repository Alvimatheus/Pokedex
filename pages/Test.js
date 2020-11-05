import React from 'react'

export default function Test({FullData}) {
    console.log("FULL DATA DENTRO DO TEST -->", FullData)
    return (
        <div>
            {FullData.map((pokemon)=>(
                <div>
                    <h2>{pokemon.name}</h2>
                    <h4>{pokemon.data.base_experience}</h4>
                </div>
            ))}
        </div>
    )
}
