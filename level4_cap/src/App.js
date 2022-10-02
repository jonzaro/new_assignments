import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"
import RecallList from './components/RecallList';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



function App() {
  let windowWidth = window.innerWidth;

  return (
    <div className="App">
      {console.log(windowWidth)}
      <Router>
        {/* <Header /> */}

        <nav className="topNavbar">

          <Link to="/" style={{padding: 5}}>Home</Link>
          <Link to="/about" style={{padding: 5}}>About</Link>
          <Link to="/search" style={{padding: 5}}>Search</Link>


        </nav>

        <Routes>

          <Route path="/" element={<LandingPage />}  />
          <Route path="/about" element={<Main />} />
          <Route path="/search" element={<RecallList />}  />

        </Routes>

        <Footer />

      </Router>



    </div>
  );
}

export default App;
