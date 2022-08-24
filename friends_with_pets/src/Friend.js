import React from "react"
import Pet from "./Pet"

function Friend(props) {
    const newPet = props.pets.map(pet => <Pet key={pet.key} name={pet.name} breed={pet.breed} />)
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            {newPet}
        </div>
    )
}

export default Friend