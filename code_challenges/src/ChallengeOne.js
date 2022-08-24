import React from "react"

function ChallengeOne() {

    function getFirstValue(arr) {
        for (let i=0; i<arr.length; i++){
            return <p>{(arr[0])}</p>
        }
    }

    return (
        <div className="challenge">
           <h3> CODE CHALLENGE 1:</h3>
           Create a function that takes an array containing only numbers and return the first element.


            <hr></hr>

            <h3>SOLUTION (REFER TO JS FILE)</h3> 
            
           {/* function getFirstValue(arr) {
        for (let i=0; i<arr.length; i++){
            return console.log(arr[0])
        }
    } */}
    
            {getFirstValue([1, 2, 3]) }
            {getFirstValue([80, 5, 100])}
            {getFirstValue([-500, 0, 50])}
        </div>
    )
}

export default ChallengeOne