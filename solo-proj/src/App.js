import "./style.css"
import React from "react"
import Card from "./Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      
        <img src="../icon.png" className="icon"/>
        <span className="navText">my travel journal</span>
        {cards}
    </div>
  )
}

export default App;
