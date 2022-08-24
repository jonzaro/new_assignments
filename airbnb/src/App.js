// import logo from './logo.svg';
import './style.css';
import Nav from "./Nav";
import Hero from "./Hero";
import Card from "./Card"
// import katieIMG from "../src/katie.png"
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
    <div className="page">
      <Nav />
      <Hero />
      {cards}
      
    </div>
  );
}

export default App;
