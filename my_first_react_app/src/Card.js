import React from "react"

function Card(props) {
    return (
        <div>
            <h3>Place: {props.place}</h3>
            <h3>Price: {props.price}</h3>
            <h3>Time to Go: {props.timeToGo}</h3>
            <hr></hr>
        </div>
    )
}

export default Card