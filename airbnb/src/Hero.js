import React from "react"
import ReactDOM from "react-dom"
import herologo from "./herologo.png"
function Hero(){
    return (
        <div className="heroSection">
            <img src={herologo} className="heroIMG" />
            <h1>Online Experiences</h1>
            <p className="heroTXT">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero