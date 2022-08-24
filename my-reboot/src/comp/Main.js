import React from "react"
import ReactDOM from "react-dom"
import logohalf from "../img/react-logo-half.png"


function Main(){
    return(
        <div className="box">
            {/* <img src={logohalf} className="logo-half" /> */}
            <h1 className="big-txt"> Fun facts about React</h1>
            <ul className="list-txt">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default Main