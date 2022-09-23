import React from "react"
import { AppContext } from "../appProvider"
import { v4 as uuidv4 } from 'uuid'

function RecallList() {

    const contextItems = React.useContext(AppContext)

    // MAY NEED TO PASS IN KEY FOR EACH MAPPED DIV ON LINE 11

    // const { uuid } = require('uuidv4');


    const list = contextItems.recalls.map(thing => <div className="listItem">

            Location: {thing.city}, {thing.state}. {thing.country}
            <br></br>
            Product Type: {thing.product_type}
            Product Description: {thing.product_description}
            <br></br>
            Reason for Recall: {thing.reason_for_recall}

            </div>
        )

    return (
        <>
            <div className="mainAreaList">

                <h1>I'm a recall list</h1>
                <h3>Possible drop down bar to select state to filter list</h3>
                {list}
            </div>
        </>
    )
}



export default RecallList