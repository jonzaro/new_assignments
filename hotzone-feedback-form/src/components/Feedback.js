import React, {useState} from "react"

export default function Feedback(props) {
    
    
    const {name, email, feedback} = props
    const initInputs = { name: name || "", email: email || "", feedback: feedback || ""}    
    
    const [inputs, setInputs] = useState(initInputs)
    const [feedbackItems, setFeedbackItems] = useState([])
    
    //FUNCTIONS
    
    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        let x = document.forms["feedbackForm"]["feedback"].value;
        if (x === "") {
          alert("The feedback field must be filled out");
          return false;
        }
        console.log("Form has been submitted successfully")
        setFeedbackItems(inputs)
        setInputs(initInputs)
        alert("Thank you for your feedback!")
        

    }

    
    //STYLES

    const formStyle = {
        height: "33vw",
        width: "37vw",
        backgroundColor: "cadetBlue",
        opacity: "0.8",
        border: "3px solid black",
        borderRadius: "7px",
        padding: "25px",
    }
    
    const inputStyle = {
        fontSize: "24px",
        border: "3px solid grey",
        borderRadius: "4px",
        padding: "10px",
        margin: "5px",
    }
    
 
    return (
        <div>
            <form name="feedbackForm" onSubmit={handleSubmit} style={formStyle}>
                <p style={{fontSize: "25px", fontWeight: "bold", marginLeft: "20px"}}>
                    Please provide your feedback in the form below
                </p>
                <input 
                    style={inputStyle}
                    type="text" 
                    name="name" 
                    value={inputs.name} 
                    onChange={handleChange} 
                    placeholder="Name" />

                <input 
                    style={inputStyle}
                    type="text" 
                    name="email" 
                    value={inputs.email} 
                    onChange={handleChange} 
                    placeholder="Email" />
                <br></br>
                <input 
                    style={{
                        width: "33vw",
                        height: "12vh",
                        fontSize: "20px", 
                        border: "3px solid grey", 
                        borderRadius: "4px", 
                        margin: "5px",
                        paddingLeft: "20px",
                        paddingRight: "20px",}}
                    type="text" 
                    name="feedback" 
                    placeholder="Feedback"
                    value={inputs.feedback} 
                    onChange={handleChange} 
                        />
                <br></br>
                <button
                    style={{
                        width: "8vw",
                        border: "2px solid black",
                        borderRadius: "4px",
                        fontSize: "20px",
                        padding: "10px",
                        marginTop: "10px",
                        marginLeft: "60%",
                        
                    }}>Submit</button> 


            </form>
        </div>
    )
}