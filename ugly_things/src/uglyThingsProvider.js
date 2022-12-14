import axios from "axios"
import React, {useState} from "react"
import EditItem from "./EditItem";
import { v4 as uuidv4 } from 'uuid';


const UglyContext = React.createContext()

function UglyContextProvider(props){

    const [toggleEdit, setToggleEdit] = React.useState(false)

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


      //edit is working
    
      const editItem = (edits, id) => {
        console.log("Edited item with this ID: ", id)
        axios.put(`https://api.vschool.io/jonzaro/thing/${id}`, edits)
        .then(res => {
            console.log("Edit/Put request: ", res)

                return (
                    setAllThings(prev=> prev.map((item) => item._id !== id ? item : res.data)),
                    setToggleEdit(prev => !prev)
                )
            })
        
        .catch(err => console.log(err))

    }
      

      const deleteItem = (id) => {
        console.log("Delete item with this ID: ", id)
        axios.delete(`https://api.vschool.io/jonzaro/thing/${id}`)
        .then(res => {
            console.log("Delete request: ", res)

                return setAllThings(prev=> prev.filter((item) => item._id !== id))
                                
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


    return (
         <UglyContext.Provider value={{
            submit: addNewItem,
            deleteThing: deleteThing,
            allThings: allThings,
            setAllThings: setAllThings,
            deleteItem: deleteItem,
            editItem: editItem,
            //move sett toggle and toggle edit to its own new state in a new component
            setToggleEdit: setToggleEdit,
            toggleEdit: toggleEdit
         }}>
            {props.children}
         </UglyContext.Provider>
    )

}
export {UglyContext, UglyContextProvider}