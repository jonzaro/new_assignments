
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.objects[0].pokemon[0])
        showData(data.objects[0].pokemon)
    } 
}


function showData(arr){
        for (let i = 0; i < arr.length; i++){
        const newH1 = document.createElement("h1")
        newH1.textContent = arr[i].name
        document.body.appendChild(newH1)
        }
    }

    // console.log(new Buffer.from("ZGF0YS5vYmplY3RzWzBdLnBva2Vtb24=", "base64").toString('ascii'))
