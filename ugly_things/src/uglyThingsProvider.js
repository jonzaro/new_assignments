import axios from "axios"
import React, {useState} from "react"

const UglyContext = React.createContext()

function UglyContextProvider(props){


    const [allThings, setAllThings] = React.useState([]);

    function deleteThing() {
        axios.delete()
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


            const thing = {
                title: "NEW TUESDAY",
                description: "Test Desc",
                imgUrl: "www.someimage.jpeg"
            };
            axios.post('https://api.vschool.io/jonzaro/thing', thing)
                .then(response => response.data)
                .catch(err => console.log(err))
        

        console.log(newUglyItem)
       

      }

      // pass down allThings array into value prop
      // pss ugly context as value prop to access state in this component

    return (
         <UglyContext.Provider value={{
            addNewItem: addNewItem,
            deleteThing: deleteThing,
            allLThings: allThings,
            
         }}>
            {props.children}
         </UglyContext.Provider>
    )

}
export {UglyContext, UglyContextProvider}