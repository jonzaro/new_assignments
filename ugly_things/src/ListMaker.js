import React, {useContext, useState} from "react"
import { UglyContext } from "./uglyThingsProvider"


function ListMaker(){

    const contextThings = useContext(UglyContext)
    
    // const [allThings, setAllThings] = React.useState();
    //use effect to run GET request with a dependency array, 
    //
        //access state value prop and map through it to render component
    //    const list = "variablename".allThings.map()

    // React.useContext()

    return (
        
        <div className="list">
            {console.log("From ListMaker.js", contextThings.allThings)}

            <h3>ListMaker component returns items from API</h3>
        </div>
        

    )
}


export default ListMaker