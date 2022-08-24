import React from "react"
import axios from "axios"

function Color() {


    const [bgColor, setBgColor] = React.useState("")
    const [count, setCount] = React.useState(1)
 
    
    React.useEffect(function() {
        console.log("Effect ran")
            axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then((response) => {
                setBgColor(response.data.new_color)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [count])
    
let style = {
    backgroundColor: `#${bgColor}`
}
    return(
        <div style={style}>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Color</button>
          
        </div>
    )
}


export default Color