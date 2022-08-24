function fizzBuzz() {
    var arr = []
    for (var i = 0; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
            arr.push("fizzbuzz")
            continue;
        } else if (i % 3 === 0) {
            console.log("fizz")
            arr.push("fizz")
            continue;
        } else if (i % 5 === 0) {
            console.log("buzz")
            arr.push("buzz")
            continue;
        }
        console.log(i)
    }
    return arr
}

var arr1 = fizzBuzz()

