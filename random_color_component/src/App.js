import logo from './logo.svg';
import './App.css';
import React from "react"
import Color from "./Color"

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>

      <Color />
    </div>
  );
}

export default App;
