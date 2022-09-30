import React, {useState} from "react"
import { AppContext } from "../appProvider"
import RecallItem from "./RecallItem"
import { v4 as uuidv4 } from 'uuid'
import { isCompositeComponent } from "react-dom/test-utils"

function RecallList() {

    const contextItems = React.useContext(AppContext)


    const [selects, setSelects] = React.useState([])

    const [eachState, setEachState] = React.useState([])

    // MAY NEED TO PASS IN KEY FOR EACH MAPPED DIV ON LINE 11

    // const { uuid } = require('uuidv4');


function clearState(){
    setEachState([])
}
//THIS MAPS THROUGH EVERY RECALL ITEM IN THE CONTEXT ARRAY
    function showList() {
    clearState()
    const list = contextItems.recalls.map(thing => {

              if(thing.state === selects) {
                     setEachState(prevState => [...prevState, thing] )
                

              }
            }
        )
            console.log(eachState)
    }
        

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

            // function showList(){
            //     for (let i = 0; i < contextItems.recalls.length; i++) {
            //     if(contextItems.recalls[i].state === selects) {
            //         //want to reset the state list
            //          setEachState(prevState => [ contextItems.recalls[i]] )
            //          }
            //     }
            // }
     

            const stateList = eachState.map(thing => <div className="eachState">
                    <h3>Location:</h3> {thing.city}, {thing.state}. {thing.country}
                    <br></br>
                    <h3>Product Type:</h3> {thing.product_type}<br></br>
                    <h3>Product Description:</h3> {thing.product_description}
                    <br></br>
                    <h3>Reason for Recall:</h3> {thing.reason_for_recall}
                    
            </div>
            )



    return (
        <>
            <div className="mainAreaList">
                <div className="topContainer">
                    <div className="fdaImg">
                    </div>

                    <div className="searchBox">
                        {/* <h3>Button is for weird Washington Recall Function</h3><br></br>
                        <button onClick={waList}>Click me</button><br></br> */}
                        <hr></hr>
                        <h3>Use our free search tool to see all the recalls in your state.</h3>
                        <p>Select your state from the drop-down menu below.</p>
                        <hr></hr>
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

                        <button className="searchBtn" onClick={showList}>Show My Recalls</button>
                        
                        
                        </div>
                    </div>
            {stateList}
            </div>
        </>
    )
}



export default RecallList