import React from "react"

function ChallengeThree() {


    function circuitPower(voltage, current) {
        return <p>{voltage * current}</p>
    }

    return (
        <div className="challenge">
        <h3> CODE CHALLENGE 3:</h3>
        "Create a function that takes voltage and current and returns the calculated power.""



         <hr></hr>

         <h3>SOLUTION (REFER TO JS FILE)</h3> 
         
         {circuitPower(230, 10)}|

        {circuitPower(110, 3)}

        {circuitPower(480, 20)}
        
        </div>
 )
}
   



export default ChallengeThree