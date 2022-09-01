import axios from "axios"
import React, {useState} from "react"

const UglyContext = React.createContext()

function UglyContextProvider(props){


    const [allThings, setAllThings] = React.useState([]);

    function deleteThing() {
        axios.delete()
        //render delete for everything, then 
    }

    React.useEffect(function () {
        axios
          .get("https://api.vschool.io/jonzaro/thing")
          .then((response) => {
            setAllThings(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


      const addNewItem = (newUglyItem) => {

            axios.post('https://api.vschool.io/jonzaro/thing', newUglyItem)
                .then(response => {
                    console.log("Post Request:", response)
                    setAllThings(prev=>[...prev, response.data])
                })
                .catch(err => console.log(err))
        
       

      }

      // pass down allThings array into value prop
      // pss ugly context as value prop to access state in this component

    return (
         <UglyContext.Provider value={{
            addNewItem: addNewItem,
            deleteThing: deleteThing,
            allThings: allThings,
            
         }}>
            {props.children}
         </UglyContext.Provider>
    )

}
export {UglyContext, UglyContextProvider}