import React, {useState} from "react"
import { AppContext } from "../appProvider"
import { v4 as uuidv4 } from 'uuid'
import { isCompositeComponent } from "react-dom/test-utils"

function RecallList() {

    const contextItems = React.useContext(AppContext)


    const [selects, setSelects] = React.useState([])

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

  //NEED LOGIC TO RENDER A LIST IF THE "SELECTS" STATE IS THE SAME AS EACH ITEM IN THE CONTEXT/RECALLS ARRAY


// LINES 34 -45 ARE BUTTON LOGIC TO DISPLAY SPECIFIC RECALL STATES

        const wa = contextItems.recalls.filter((item) => {
            if (item.state === "WA")
            return ( true
                
            )
        })
    
        function waList(){
            for(let i = 0; i < wa.length; i++){
                console.log(wa[i].city)
            }
        }
                // <div>
                

                    /* Location: {wa.city}, {wa.state}. {wa.country}
                    <br></br>
                    Product Type: {wa.product_type}
                    Product Description: {wa.product_description}
                    <br></br>
                    Reason for Recall: {wa.reason_for_recall} */
                
            // </div>

            function showList(){
                for (let i = 0; i < contextItems.recalls.length; i++) {
                if(contextItems.recalls[i].state === selects) {
                    //I'M HAVING TROUBLE RENDERING A DIV HERE WITH THE INFO
                     console.log(contextItems.recalls[i])
                     

                     }
                }
            }
     
    return (
        <>
            <div className="mainAreaList">
                <div className="listBox">
                    <h1>I'm a recall list</h1>
                    <h3>Possible drop down bar to select state to filter list</h3>
                    <button onClick={waList}>Click me</button>

                    <h3>Show all recalls for your state:</h3>
                    <p>Select your state</p>
                    <select value={selects} onChange={e=>setSelects(e.target.value)}>
                        <option>AL</option>
                        <option>AK</option>
                        <option>AZ</option>
                        <option>AR</option>
                        <option>CA</option>
                        <option>CO</option>
                        <option>CT</option>
                        <option>DE</option>
                        <option>DC</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>GU</option>
                        <option>HI</option>
                        <option>ID</option>
                        <option>IL</option>
                        <option>IN</option>
                        <option>IA</option>
                        <option>KS</option>
                        <option>KY</option>
                        <option>LA</option>
                        <option>ME</option>
                        <option>MD</option>
                        <option>MA</option>
                        <option>MI</option>
                        <option>MN</option>
                        <option>MS</option>
                        <option>MO</option>
                        <option>MT</option>
                        <option>NE</option>
                        <option>NV</option>
                        <option>NH</option>
                        <option>NJ</option>
                        <option>NM</option>
                        <option>NY</option>
                        <option>NC</option>
                        <option>ND</option>
                        <option>OH</option>
                        <option>OK</option>
                        <option>OR</option>
                        <option>PA</option>
                        <option>RI</option>
                        <option>SC</option>
                        <option>SD</option>
                        <option>TN</option>
                        <option>TX</option>
                        <option>UT</option>
                        <option>VT</option>
                        <option>VA</option>
                        <option>WA</option>
                        <option>WV</option>
                        <option>WI</option>
                        <option>WY</option>
                    </select>
                    <br></br><br></br>

                    <button onClick={showList}>Show My Recalls</button>
                </div>

            </div>
        </>
    )
}



export default RecallList