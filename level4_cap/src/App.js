import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"
import RecallList from './components/RecallList';
import Search from './components/Search';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Router>
        {/* <Header /> */}

        <nav className="topNavbar">

          <Link to="/" style={{padding: 5}}>Home</Link>
          <Link to="/about" style={{padding: 5}}>About</Link>
          <Link to="/recalllist" style={{padding: 5}}>Recall List</Link>
          <Link to="/search" style={{padding: 5}}>Search</Link>


        </nav>

        <Routes>

          <Route path="/" element={<LandingPage />}  />
          <Route path="/about" element={<Main />} />
          <Route path="/recalllist" element={<RecallList />}  />
          <Route path="/search" element={<Search />} />


        </Routes>



        {/* <Footer /> */}

      </Router>



    </div>
  );
}

export default App;
