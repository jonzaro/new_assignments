import React, {useState} from "react"
import axios from "axios"


function Main() {


    // const [allThings, setAllThings] = React.useState([]);

    // React.useEffect(function () {
    //     axios
    //       .get("https://api.fda.gov/food/enforcement.json?limit=100")
    //       .then((response) => {
    //         setAllThings(response.data.results);
    //         console.log(response.data.results)
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);


     
      
    return (
        <>
        <div className="mainArea">
            <div className="about">
                <h2>What is a recall?</h2>
                <p>
                Food recalls are removals of foods from the market that are in violation of the US Food and 
                Drug Administration’s (FDA) regulations. FDA regulates all foods except meat, poultry, and 
                processed egg products, which are regulated by the U.S. Department of Agriculture (USDA). It 
                is important that consumers be aware of recalls because recalled foods may cause injury or 
                illness, especially for people who are pregnant or have weakened immune systems because of
                chronic illness or medical treatment. A food may be recalled because of contamination with
                disease causing microorganisms, such as bacteria, viruses, or parasites; the presence of 
                foreign objects such as broken glass or fragments of metal or plastic; or failure to list
                a major allergen in the food, such as peanuts or shellfish, on the product label. Food 
                recalls are usually voluntarily initiated by the manufacturer or distributor of the food.
                    In some situations, the FDA may request or mandate a recall.
                </p>
            </div>
            <div className="aboutImg">
                
            </div>
        </div>
        

        
        
        </>
    )
}



export default Main