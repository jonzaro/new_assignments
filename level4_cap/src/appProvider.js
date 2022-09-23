import React, {useState} from "react"
import axios from "axios"
import { v4 as uuidv4 } from "uuid"

const AppContext = React.createContext()

function AppContextProvider(props){

    const [recalls, setRecalls] = React.useState([]);

    React.useEffect(function () {
        axios
          .get("https://api.fda.gov/food/enforcement.json?limit=100")
          .then((response) => {
            setRecalls(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      
    // const assignID = (newItem) => {
    //     newItem.id = uuidv4()
    //     setRecalls(prev=>[...prev, newItem])
    // }


    return (

        <AppContext.Provider value={{

            //PASS FUNCTIONS AND STATE HERE

            // searchData: searchData;
            // deleteItem: deleteItem
            // assignID: assignID,
            recalls: recalls

        }}>

        {props.children}

        </AppContext.Provider>

    )
}

export {AppContext, AppContextProvider}