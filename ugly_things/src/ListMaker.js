import React, {useContext, useState, useTransition} from "react"
import { UglyContext } from "./uglyThingsProvider"
import AddUglyThing from "./AddUglyThing"
import axios from "axios"
//import each thing
//watch form reuse vids


function ListMaker(){

    const contextThings = useContext(UglyContext)
    
    // const [toggleEdit, setToggleEdit] = React.useState(false)


    function handleEdit(){
        contextThings.setToggleEdit(prev => !prev)
        
    }
//map renders each thing component which has all props in 1 object
    const list = contextThings.allThings.map(thing => <div key={thing._id}>
        <h2>{thing.title}</h2>
        <img src={thing.imgUrl} />
        <br></br>
        {thing.description}
        <br></br>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => {contextThings.deleteItem(thing._id)}}>Delete</button>
        <hr></hr>
        {/* line 31 renders an edit section for all list items. 
        I could fix this by toggling state with an id to edit a specific item,
        probably in another component file */}
        {contextThings.toggleEdit && <AddUglyThing _id={thing._id} formStyle="edit" submit={contextThings.editItem} />}

    </div>
    
)
    return (
        <>
        <div className="list">
                {list}
        </div>
        </>
            // {/* /* ListMaker component returns items from API */ */}
        

    )
}


export default ListMaker