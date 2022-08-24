import React, {useContext} from "react"
import { ThemeContext } from "./themeContext"

function Container (props){

    const {color} = useContext(ThemeContext)

return (
    <div className={`${color}-theme`}>
        <h1>I'm a container</h1>
    </div>
    )
}

export default Container