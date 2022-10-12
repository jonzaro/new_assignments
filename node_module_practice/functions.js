function printName(name){
    return (
        "Hello " + name
    )
}

function compliment(name){
    return(
        "Wow " + name + " you are beautiful!"
    )
}

function insult(name){
    return(
        "YIKES, " + name + "! Did you shower today?"
    )
}

module.exports = {
    printName: printName,
    compliment: compliment,
    insult: insult
}