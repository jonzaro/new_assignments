

const addForm = document.add;
const subForm = document.sub;
const multForm = document.mult;

const sumFunc = (a, b) => {
    let sumResult = a + b; 
    return sumResult;
}

const subFunc = (a, b) => {
    let subResult = a - b;
    return subResult;
}
const multFunc = (a, b) => {
    let multResult = a * b;
    return multResult
}

addForm.addEventListener("submit", function(event){
    event.preventDefault();
    const sum1 = parseInt(addForm.sumNum1.value);
    const sum2 = parseInt(addForm.sumNum2.value);
    const sumResult = sumFunc(sum1, sum2);
    const sumDiv = document.createElement('div');
    document.getElementById("sumContainer").append(sumDiv);
    sumDiv.textContent = sumResult;
    

})

subForm.addEventListener("submit", function(event){
    event.preventDefault();
    const sub1 = parseInt(subForm.subNum1.value);
    const sub2 = parseInt(subForm.subNum2.value);
    const subResult = subFunc(sub1, sub2);
    const subDiv = document.createElement('div');
    document.getElementById("subContainer").append(subDiv);
    subDiv.textContent = subResult;
})

multForm.addEventListener("submit", function(event){
    event.preventDefault();
    const mult1 = parseInt(multForm.multNum1.value);
    const mult2 = parseInt(multForm.multNum2.value);
    const multResult = multFunc(mult1, mult2);
    const multDiv = document.createElement('div');
    document.getElementById("multContainer").append(multDiv);
    multDiv.textContent = multResult;
})