import React from "react"

function Name(props){

    const [namesArr, setNamesArr] = React.useState( []
    )
    const [name, setName] = React.useState({name:""})
    
    
    function addItem() {
        
        setNamesArr(prevState => {
            return [...prevState, name]
        })
    }
    


    
    function handleSubmit(event) {
        event.preventDefault();
    addItem()
        
}

function handleChange (event){
    setName(() => {
        return {
            
            [event.target.name]: event.target.value

        }
    })
}

const nameList = namesArr.map(name => {
    return <div className="nameList" key={Math.floor(Math.random()*1000)}>
    
    <li>{name.name}</li>
    </div>
})

return(
    <div>
            <form onSubmit={handleSubmit}>
                <input
                
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
                name="name"
                value={name.name}
                />
            <button>Submit</button>
            </form>
            <h1>{name.name}</h1>
            {nameList}

        </div>
    )
}



export default Name