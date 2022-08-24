import React from "react"
import diceImg from "../src/diceImg.jpeg"


function DiceBox(props){

    function randomNumber(){
        return Math.floor(Math.random() * 6) + 1
      }

      const [dice, setDice] = React.useState([1, 2, 3, 4, 5])



    const diceRoll = () => {
        setDice((prevState) => {
          return [randomNumber(), randomNumber(), randomNumber(),  randomNumber(), randomNumber()]
        })
      }
     
     
       return (
         <div className="App">
           <header className="App-header">
           <img src={diceImg} className="diceImg" />
           </header>

  
            <div className="diceBox">
            <h1>React Dice</h1>


            <h2>Here's Your Numbers</h2>
            <p>
                {dice[0]}
                {dice[1]}
                {dice[2]}
                {dice[3]}
                {dice[4]}

            </p>

            <button onClick={diceRoll}>Roll the Dice</button>
            </div>
         
        </div>
    )
}

export default DiceBox