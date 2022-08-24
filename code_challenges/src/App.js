import logo from './logo.svg';
import './style.css';
import React from "react"
import ChallengeOne from "./ChallengeOne"
import ChallengeTwo from "./ChallengeTwo"
import ChallengeThree from "./ChallengeThree"
import ChallengeFour from "./ChallengeFour"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coding Challenges</h1>
        
      </header>
      <ChallengeOne />
      <ChallengeTwo />
      <ChallengeThree />
      <ChallengeFour />
    </div>
  );
}

export default App;
