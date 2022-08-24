import React from "react"
import Card from "./Card"
import vacationSpots from "./vacationSpots"

function App() {
    const vacaCard = vacationSpots.map(spot => <Card place={spot.place} price={spot.price} timeToGo={spot.timeToGo} /> )
    
    
    return (
        <div>
            {vacaCard}            
        </div>
    )
}


export default App