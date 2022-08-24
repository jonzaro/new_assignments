import React from "react"

function Pet(props) {
    return (
        <div>
            <h3>Pet Name: {props.name}</h3>
            <h3>Pet Breed: {props.breed}</h3>
        </div>
    )
}

export default Pet