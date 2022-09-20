import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Services from "./components/Services.js"
import './App.css';


function App() {


  return (

    <Router>
      
      <nav style={{margin:10}}>

        <Link to="/" style={{padding: 5}}>Home</Link>
        <Link to="/services" style={{padding: 5}}>Services</Link>

      </nav>

      <Routes>

        <Route path ="/" element={<Main />} />

        <Route path ="/services" element={<Services />} />

      </Routes>

    </Router>



    
  );
}

export default App;