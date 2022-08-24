const form = document.travel;
const submit = document.getElementById("submit");


form.addEventListener("submit", function(event){
    event.preventDefault();
    const goombas = form.goombas.value * 5;
    const bobombs = form.bobombs.value * 7;
    const cheeps = form.cheeps.value * 11;
    const totalBill = goombas + bobombs + cheeps
    const sumDiv = document.createElement('div');
    document.getElementById("formContainer").append(sumDiv);
    sumDiv.textContent = `Your Total Bill Is $ ${totalBill}`;

})