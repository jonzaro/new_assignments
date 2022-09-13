import React, {useContext, useState, useTransition} from "react"
import { UglyContext } from "./uglyThingsProvider"
import axios from "axios"


function ListMaker(){

    const contextThings = useContext(UglyContext)
    

    const deleteItem = (id) => {
        console.log("Delete item with this ID: ", id)
        axios.delete(`https://api.vschool.io/jonzaro/thing/${id}`)
        .then(res => {
            console.log("Delete request: ", res)
            UglyContext.addNewItem(prev => {
                //if this is the incorrect way to access context and get my state setter funciton, then how come the axios 
                //delete is working?
                return prev.filter((item) => item._id !== id)
                
                //also where do I refresh page inside delete button
                
            })
        })
        .catch(err => console.log(err))

    }

    const list = contextThings.allThings.map(thing => <div key={thing._id}>
        <h2>{thing.title}</h2>
        <img src={thing.imgUrl} />
        <br></br>
        {thing.description}
        <br></br>
        <button onClick={() => {deleteItem(thing._id)}}>Delete</button>
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