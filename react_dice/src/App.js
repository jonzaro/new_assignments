import './App.css';
import React from "react"
import DiceBox from "./DiceBox.js"

function App(props) {

  // function randomNumber(){
  //   return Math.floor(Math.random() * 6)
  // }

  // const [dice, setDice] = React.useState([1, 2, 3, 4, 5])



//  const diceRoll = () => {
//    setDice((prevState) => {
//      return [prevState, randomNumber(), randomNumber(), randomNumber(),  randomNumber(), randomNumber()]
//    })
//  }


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//           React Dice 
//       </header>

return(
    <div className="container">
\      <DiceBox />

    </div>
  );
}

export default App;
