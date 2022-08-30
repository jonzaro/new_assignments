import React, {useContext, useState} from "react"
import axios from "axios"
import { UglyContext } from "./uglyThingsProvider"


function ListMaker(){

    // const [allThings, setAllThings] = React.useState([]);
    const contextThings = useContext(UglyContext)


        //access state value prop and map through it to render component
    //    const list = "variablename".allThings.map()
    {console.log(contextThings.allThings)}

    return (
        
        <div className="list">

            <h3>ListMaker component returns items from API</h3>
            
        </div>
        

    )
}


export default ListMaker