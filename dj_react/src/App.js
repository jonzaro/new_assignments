import './style.css';
import React from "react"
import Square from "./Square"


function App(props) {
  
  const [background, setBackground] = React.useState("blue")
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])
  
 const changeFirstSquare = () => {
      // setBackground("green")
    setBackground((prevState) => {
  return prevState === "blue" ? "green" : "blue"
    })
  }
 
  const smallTimeDj = () => {
    setColors(prevColors   => {
      if (prevColors[0] === "white") 
        return ["black", "black", "black", "black"]
      else
        return ["white", "white", "white", "white"]

    })
  }

  const purpleDj = () => {
    setColors(prevColors => {
       return ["purple", prevColors[1], "purple", prevColors[3]]
    })
  }
  
  const bottomLeftBlue = () => {
    setColors(prevColors => {
      return [prevColors[0], "blue", prevColors[2], prevColors[3]]
    })
  }

  const bottomRightBlue = () => {
    setColors(prevColors => {
      return [prevColors[0], prevColors[1], prevColors[2], "blue"]
    })
  }

  return (
    <div className="App">
      <div className="grid-container">
        <Square background={colors[0]}/>
        <Square background={colors[1]}/>

      </div>
      <div class="grid-container">
        <Square background={colors[2]}/>
        <Square background={colors[3]}/>

      </div>
      <div className="buttons-box"> 
        {/* <button onClick={changeFirstSquare}>Flip First Box</button> */}
        <button onClick={smallTimeDj}>Flip All Four</button>
        <button onClick={purpleDj}>Make Top Purp</button>
        <button onClick={bottomLeftBlue}>Bottom-Left Blue</button>
        <button onClick={bottomRightBlue}>Bottom-Right Blue</button>

      </div>
    </div>
  );
}

export default App;
