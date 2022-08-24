import React from "react"
import ReactDOM from "react-dom"
import logo from "../img/react-logo.png"

function Header(){
    return(
    // <img src="./something.jpg" />
    <nav>
        <img src={logo} className="logo" />
        <h3 className="left-txt">ReactFacts</h3>
        <h4 className="right-txt">React Course - Project 1</h4>
    </nav>
    )
}


export default Header



