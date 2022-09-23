import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Services from "./components/Services.js";
import Testimonials from "./components/Testimonials.js"
import './App.css';
import bannerImg from "../src/banner.jpeg"



function App() {


  return (

    <Router>
      <Header img={bannerImg}/>
      <nav className="navbar">

        <Link to="/" style={{padding: 5}}>Home</Link>
        <Link to="/services" style={{padding: 5}}>Services</Link>
        <Link to="/testimonials" style={{padding: 5}}>Testimonials</Link>
      </nav>

      <Routes>

        <Route path ="/" element={<Main />} />

        <Route path ="/services" element={<Services />} />

        <Route path="/testimonials" element={<Testimonials />} />

      </Routes>

      <Footer />

    </Router>



    
  );
}

export default App;
