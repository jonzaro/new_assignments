import React, {useContext, useState, useTransition} from "react"
import { UglyContext } from "./uglyThingsProvider"
import axios from "axios"


function ListMaker(){

    const contextThings = useContext(UglyContext)
    


    const list = contextThings.allThings.map(thing => <div key={thing._id}>
        <h2>{thing.title}</h2>
        <img src={thing.imgUrl} />
        <br></br>
        {thing.description}
        <br></br>
        <button onClick={() => {contextThings.editItem(thing._id)}}>Edit</button>
        <button onClick={() => {contextThings.deleteItem(thing._id)}}>Delete</button>
        <hr></hr>
    </div>
    
)
    return (
        
        <div className="list">
            {console.log("From ListMaker.js", contextThings.allThings)}
            {list}
        </div>
            // {/* /* ListMaker component returns items from API */ */}
        

    )
}


export default ListMaker