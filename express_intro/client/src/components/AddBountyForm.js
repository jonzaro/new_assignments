import React, { useState } from "react"

export default function AddBountyForm(props){

    const initInputs = { 
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living || "",
        bountyAmount: props.bountyAmount || "",
        type: props.type || "",
        image: props.image || ""
    }

    const [ inputs, setInputs ] = useState(initInputs)


    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("Form has been submitted with the following details", inputs)
        
        //POST REQUEST
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }


    return (
        <>
            
            <form className="bounty-form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange} 
                placeholder="First Name"/>

                <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange} 
                placeholder="Last Name"/>

                <input 
                type="text" 
                name="living" 
                value={inputs.living} 
                onChange={handleChange} 
                placeholder="Living"/>

                <input 
                type="text" 
                name="bountyAmount" 
                value={inputs.bountyAmount} 
                onChange={handleChange} 
                placeholder="Bounty Amount"/>

                <input 
                type="text"
                name="type" 
                value={inputs.type} 
                onChange={handleChange} 
                placeholder="Type"/>

                <input 
                type="text"
                name="image" 
                value={inputs.image} 
                onChange={handleChange} 
                placeholder="Image"/>
                <br></br>
                <button className="add-bounty">{props.buttonText}</button> 

            </form>

        </>

    )

}