var shazil = {
    america: "NEW YORK", india: "DELHI", pakistan: "LAHORE", hello: function(a, b) {
        return a + b
    }
}

console.log(shazil.america)

console.log(shazil.india)

console.log(shazil.pakistan)

console.log(shazil.hello(5, 6))


var shazil2 = ['saad', 'shazil', 'khan', 'hashim', 'ali',]

console.log(shazil2[0])

console.log(shazil2[1])

console.log(shazil2[2])

console.log(shazil2[3])

console.log(shazil2[4])

console.log(shazil2.shift())

console.log(shazil2.pop())

console.log(shazil2)

console.log(shazil2.join('"..,.."'))

// call stack

function add(a, b) {
    return a + b
}

function average(a, b) {
    return add(a, b) / 2
}

console.log(average(5, 6))


