import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Main (props){

    const {color} = useContext(ThemeContext)
return (
    <div className={`${color}-theme`}>
        <h1>I'm a Main</h1>
    </div>
    )
}

export default Main