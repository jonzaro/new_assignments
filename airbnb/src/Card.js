import React from "react"
import ReactDOM from "react-dom"
// import katieIMG from "../src/katie.png"
import starIMG from "../src/star.png"

function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }    
    return(
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="coverImg" />
            <div className="starStats">
                <img src={starIMG} className="starIMG" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">{` ${props.item.stats.reviewCount}`}  •</span>
                <span className="gray">{props.item.location}</span>
                <p>{props.item.title}</p>
                <p><span className="bold">${props.item.price} </span>/ person</p>
            </div>
        </div>
    )
}

export default Card

