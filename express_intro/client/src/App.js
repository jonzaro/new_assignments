import './App.css';
import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty"
import AddMovieForm from './components/AddBountyForm';


function App() {

  const [bounties, setBounties] = useState([])


  //GET ALL BOUNTIES
  function getBounties(){
    axios.get("/bounty")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err.response.data.errMsg))

  }
  //POST NEW BOUNTY
  function addBounty(newBounty){
    axios.post("/bounty", newBounty)
      .then(res => {(setBounties(prevBounties => [...prevBounties, res.data]))})
      .catch(err => console.log(err.response.data.errMsg))
  }

  //DELETE BOUNTY
  function deleteBounty(bountyId) {
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  //EDIT BOUNTY
  function editBounty(updates, bountyId) {
    axios.put(`/bounty/${bountyId}`, updates)
      .then(res => 
        {
          //I BELIEVE MY UNIQUE KEY BUG IS HAPPENING HERE ON LINE 38
          setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
        })

    //What I currently have, is working as an edit, however, 

    //does not update to the list unless i refresh the page

      .catch(err => console.log(err.response.data.errMsg))
  }

  //FILTER BY REWARD FUNCTION
  function handleFilter(e){
    console.log(e.target.value)
  }


  useEffect(() => {
    getBounties()
}, [])



  return (
    <div className="App">
      <header className="App-header">
          <div className="header-image">
          </div>
      </header>
        <div className="bounty-container">
          <div className="header-img">
            <div className="header-banner">
                <h1>ADD A BOUNTY TO THE BOARD</h1>
              </div>
          </div>
          <AddMovieForm 
            submit={addBounty} 
            buttonText="Add Bounty"
            //KEY NOT NECESSARY HERE?
            key={bounties._id}
          />

          <h4>Filter by Reward</h4>
          <select onChange={handleFilter} className="filter-form">
            <option value="all">All</option>
            <option value="250">250</option>
            <option value="500">5000</option>
            <option value="1000">1000</option>
          </select>

          { 
            bounties.map(bounty => 
              <Bounty 
                {...bounty}
                key={bounty._id} 
                deleteBounty={deleteBounty}
                editBounty={editBounty}
              />)
            }
        </div>
    </div>
  );
}

export default App;
