import React from "react"


function ChallengeTwo () {

    function cubes(a) {
        return <p>{a ** 3}</p>
    }

    return (
        <div className="challenge">
        <h3> CODE CHALLENGE 2:</h3>
        Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.



         <hr></hr>

         <h3>SOLUTION (REFER TO JS FILE)</h3> 
         
        {cubes(3)}

        {cubes(5)}

        {cubes(10)}
 
     </div>
 )
}

export default ChallengeTwo