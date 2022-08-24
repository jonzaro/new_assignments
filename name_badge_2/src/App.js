import logo from './logo.svg';
import React from "react"
import './App.css';

function App() {

const [badgeArr, setBadgeArr] = React.useState([])

const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favFood: "",
    comments: ""
})


function addItem() {
  setBadgeArr(prevState => {
      return [...prevState, formData]
  })
}

function handleSubmit(event) {
  event.preventDefault();
  // (event.target.value.length > 3 ? addItem() : console.log("Not enough characters")
  // )
addItem()
  
}

function handleChange(event){
  const {firstName, lastName, email, placeOfBirth, phone, favFood, comments} = event.target
  setFormData(prevFormData => ({
    ...prevFormData,
    [event.target.name]: event.target.value
  }))
}

const badgeList = badgeArr.map(info => {
  return <div className="badgeList" key={Math.floor(Math.random()*1000)}>
  
  <p>
      {"Name: " + info.firstName + " " + info.lastName}
      <br></br>
      {"Phone: " + info.phone}
      <br></br>
      {"Place of Birth: " + info.placeOfBirth}
      <br></br>
      {"Favorite Food: " + info.favFood}
      <br></br>
      {"Email: " + info.email}
      <br></br>
      {"Comments: " + info.comments}
  </p>
  </div>
})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name Badge
        </p>
       
      </header>
      <div className="inputBox">
          <h3>Fill in the text fields to generate your badge</h3>
          <form className="inputForm" onSubmit={handleSubmit}>

          <input 
                    type="firstName" 
                    minLength="3"
                    placeholder="First Name"
                    className="inputStyle"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    required
                />
          <input 
                    type="lastName" 
                    minLength="3"
                    placeholder="Last Name"
                    className="inputStyle"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    required
                />
                <br>
                </br>
          <input 
                    type="email" 
                    minLength="3"
                    placeholder="Email"
                    className="inputStyle"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />

          <input 
                    type="placeOfBirth" 
                    minLength="3"
                    placeholder="Place of Birth"
                    className="inputStyle"
                    name="placeOfBirth"
                    onChange={handleChange}
                    value={formData.placeOfBirth}
                    required
                />
              <br></br>

          <input 
                    type="phone" 
                    minLength="3"
                    placeholder="Phone Number"
                    className="inputStyle"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    required
                />
           <input 
                    type="favFood" 
                    minLength="3"
                    placeholder="Favorite Food"
                    className="inputStyle"
                    name="favFood"
                    onChange={handleChange}
                    value={formData.favFood}
                    required
                />
              <br></br>

          <textarea 
                value={formData.comments}
                placeholder="Tell us about yourself"
                onChange={handleChange}
                name="comments"
            />

            <br></br>

          <button>Submit</button>

          </form>
        {badgeList}
      </div>

    </div>
  );
}

export default App;
