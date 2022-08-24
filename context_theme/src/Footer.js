import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Footer (props){

    const {color} = useContext(ThemeContext)

return (
    <div className={`${color}-theme`}>
        <h1>I'm a Footer</h1>
    </div>
    )
}

export default Footer