const form = document.travel;
const submit = document.getElementById("submit");


form.addEventListener("submit", function(event){
    event.preventDefault();
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const species = form.species.value;
    const transportation = form.transportation.value
    const checkedInputs = []
    
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            checkedInputs.push(form.diet[i].value)
        }
    }
    alert(`Double Check That Your Migration Details are Correct! \n\nName: ${firstName} ${lastName} \nAge: ${age} \nSpecies: ${species} \nTransportation: By ${transportation} \nSnacks Required: ${checkedInputs} `)

})