import React , {useState, useContext} from "react"
import axios from "axios"
import { UglyContext } from "./uglyThingsProvider"

function AddUglyThing(props) {

const {uglyThing, addNewItem} = useContext(UglyContext)


const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    imgUrl: ""
})

function handleSubmit(data) {
    
    addNewItem(data)
   
}

function handleChange(event){
    const {title, description, imgUrl} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [event.target.name]: event.target.value
    }))
}


    return (
        <>
        <div className="main">
            <h3> AddUglyThing component returns inputs and button</h3>
            <form 
                className="formInputs" 
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(formData)
}}>
                <input 
                    name="title"
                    type="text"
                    placeholder="Title" 
                    onChange={handleChange}
                    value={formData.title}
                    required
                />

                <input 
                    name="description"
                    type="text"
                    placeholder="Description" 
                    onChange={handleChange}
                    value={formData.description}
                    required
                />
                <input 
                    name="imgUrl"
                    type="text"
                    placeholder="Img URL"
                    onChange={handleChange}
                    value={formData.imgUrl}
                    required
                />

            <button>Submit Your Ugly Thing</button>
            </form>

        </div>
        </>
    )
}

export default AddUglyThing