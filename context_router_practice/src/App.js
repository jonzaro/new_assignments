import logo from './logo.svg';
import React from "react"
import './App.css';
import { SomeContext } from './ContextFile';


function App() {

  const appContext = React.useContext(SomeContext)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
        Greetings from React ContextFile,<br></br>
        My name is {appContext.person.firstName} {appContext.person.lastName}
      </p>
    </div>
  );
}

export default App;