import React from "react"
// import bannerImg from "../src/banner.jpeg"


function Header(props){

return (
    <div className="header">
        <img src={props.img} />
        {console.log(props)}
    </div>
)

}


export default Header