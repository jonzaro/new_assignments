import logo from './logo.svg';
import './App.css';
import Name from "./Name"

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>
          Name Entry Assignment
      </p>
        
      </header>

      <Name />   

  </div>
  );
}

export default App;
