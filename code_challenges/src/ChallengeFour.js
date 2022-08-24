import React from "react"
import matchImg from "./matchstick_houses.png"


function ChallengeFour() {

        

    return (
        <div className="challenge">
           <h3> CODE CHALLENGE 4:</h3>

           <img src={matchImg} className="matchImg" />
           Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

            <hr></hr>

            <h3>SOLUTION (REFER TO JS FILE)</h3> 
            
        {/* function matchHouses(step) {
	        return step === 0 ? 0 : (step * 6) - (step * 1) +1
        } 
        
        Each step is 6 matchsticks
        Each step number, is the same number of matchsticks that need to be removed, (sticks that are being used in 2 houses)
        E.G. - Step 4 needs 4 matchsticks removed. 
        
        */}
    
            
        </div>
    )
}

export default ChallengeFour