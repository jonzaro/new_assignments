import React from "react"
import Friend from "./Friend"
import FriendList from "./FriendList"

function App() {

  // const newPet = FriendList.map(pet => <Pet key={pet.pets[0].id} name={pet.pets[0].name} breed={pet.pets[0].breed} />)
  const newFriend = FriendList.map(friend => <Friend key={friend.id} name={friend.name} age={friend.age} pets={friend.pets} /> )
  return (
    <div>
      {newFriend}
    </div>
  )
}

export default App
 