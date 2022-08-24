


    const peopleArray = [
        {
            firstName: "Sarah",
            lastName: "Palin",
            age: 47
        },
        {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12
        },
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78
        },
        {
            firstName: "Morty",
            lastName: "Smith",
            age: 29
        },
        {
            firstName: "Kyle",
            lastName: "Mooney",
            age: 27
        },
        {
            firstName: "Pasha",
            lastName: "Datsyuk",
            age: 13
        },
        {
            firstName: "Lev",
            lastName: "Tolstoy",
            age: 82
        }
    ]
//Using the provided peopleArray (bottom of this article), write a function that:

//Returns a list of everyone older than 18, which is
//sorted alphabetically by last name, and where
//each name and age is embedded in a string that looks like an HTML <li> element.
let newArr = []
function sortedOfAge(arr){
    arr.filter(function(person){
        if (person.age > 18){
            newArr.push(person)
        }
    })
    newArr.sort(function(a, b){
        if(a.lastName < b.lastName) { return -1; }
        if(a.lastName > b.lastName) { return 1; }
        return 0;        
        
    })
   console.log(`<li>${newArr[0].firstName} ${newArr[0].lastName} is ${newArr[0].age}</li>`)
   console.log(`<li>${newArr[1].firstName} ${newArr[1].lastName} is ${newArr[1].age}</li>`)
   console.log(`<li>${newArr[2].firstName} ${newArr[2].lastName} is ${newArr[2].age}</li>`)
   console.log(`<li>${newArr[3].firstName} ${newArr[3].lastName} is ${newArr[3].age}</li>`)
   console.log(`<li>${newArr[4].firstName} ${newArr[4].lastName} is ${newArr[4].age}</li>`)
}
    
    sortedOfAge(peopleArray)
 
 /*
 Output: 
 [ 
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>" 
 ]
//  */