import axios from "axios"
import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid';


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


      const editItem = (id, updatedItem) => { 
        setAllThings(prevList => { 
            return prevList.map((item)=> { 
                if (item.id === id) { 
                    return (
                        updatedItem,
                        console.log("I've been updated")
                    )
                }
                else {
                    return (
                        item,
                        console.log("I'm old item")
                    )
                }
            })
        })
    }

      

      const deleteItem = (id) => {
        console.log("Delete item with this ID: ", id)
        axios.delete(`https://api.vschool.io/jonzaro/thing/${id}`)
        .then(res => {
            console.log("Delete request: ", res)
           
                //if this is the incorrect way to access context and get my state setter funciton, then how come the axios 
                //delete is working?
                return setAllThings(prev=> prev.filter((item) => item._id !== id))
                // return prev.filter((item) => item._id !== id)
                
                //also where do I refresh page inside delete button
                
            })
        
        .catch(err => console.log(err))

    }
      

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
            setAllThings: setAllThings,
            deleteItem: deleteItem,
            editItem: editItem
         }}>
            {props.children}
         </UglyContext.Provider>
    )

}
export {UglyContext, UglyContextProvider}