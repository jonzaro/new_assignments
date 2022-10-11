import React, {useState} from "react"


const SomeContext = React.createContext()

function ContextProvider(props){


const [person, setPerson] = React.useState(
    {
        firstName: "Jon",
        lastName: "Zaro"
    }
    )
    return (
        
        <SomeContext.Provider value={{
            
            person: person
        }}
        
        >
            {props.children}



        </SomeContext.Provider>
    )
}


export {SomeContext, ContextProvider}