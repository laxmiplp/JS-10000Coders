//1. Named Functions
//1.1 Named Functions without parameters
function fun1() {
    console.log("Hello")
}
fun1()
//1.2 Named Functions with return

debugger
function fun1() {
    console.log("Hello")
    return "Laxmi"
}
fun1()

console.log(fun1())
function fun2() {
    console.log("Hello")
    return "Laxmi"
    console.log("Hi")

}
console.log(fun2())
//1.3 Named Functions with parameters
function addition(x, y) {
    // let sum = x + y
    // return sum
    return sum = x + y

    console.log(sum)
}
// addition(4, 5)
console.log(addition(4, 5))
console.log(addition(5, 5))
//1.3 Named Functions with default parameters
//default parameters should be at last always
function fun3(x, y = '10k coders') {
    console.log(`${x} from ${y}`)
}
fun3('Laxmi')
fun3('Prasanna')
fun3('Sahasra')

fun3('Ammulu', 'JS Institutes')
fun3('pillalamarri', 'React Institutes')

// function sample() {
//     console.log(a, b)
// }
//sample()
function sample1(a, b) {
    console.log(a, b)
}
sample1()
function sample2(a, b) {
    console.log(a + b)
    console.log(a * b)

}
sample2()
function billing(item1, item2, m_c = 5) {
    let totalCharges = item1 + item2 + m_c
    // console.log(totalCharges)
    return totalCharges
}
billing(10, 20)
console.log(billing(50, 40))
console.log(billing(30, 10))
console.log("*************")
// console.log(abc())
// console.log(abc)

var abc = function () {
    abc = "Rose"
    // return "Hello Jasmine"
}
console.log(abc)

// console.log(abc())
console.log("*************")
//arrow function
var xyz = (a, b) => {
    console.log(a + b)
}
xyz(2, 3)
//with curly braces
var z = () => {
    return "arrow function"
}
console.log(z())
//without curly braces
var y = () => (
    "arrow function without curly braces"
)
console.log(y())
var ex1 = (a, b) => {
    return a + b
}
console.log(ex1(4, 5))
var ex2 = (a, b) => (
    a + b
)
console.log(ex2(10, 5))
var ex3 = c => 3 + 5
console.log(ex3())
ex3()
var ex4 = d => d + 52
console.log(ex4(1, 8))
function checkEvenOrOdd(x) {
    if (x % 2 == 0) {
        console.log("x is even")
    } else {
        console.log("x is odd")
    }
}
checkEvenOrOdd(125)
checkEvenOrOdd(124)
checkEvenOrOdd(12)
function parent(x, y) {
    x()
    y()

    console.log("Hello I'm parent function!")
    y()

    x()
    // y()

}

parent(
    function child1() {
        console.log("Hello I'm child1 function!")
    },
    function child2() {
        console.log("Hello I'm child2 function!")
    }
)
//Here parent is called Higher ordered function.
//child is called call-back function.
console.log("**************************************")
function parent1(x1, y1) {
    // x1()
    // y1()

    console.log("Hello I'm parent function!")
    // y1()

    // x1()
    // y()
    return "All these functions are known as call back functions"

}

console.log(
    parent1(
        function child11() {
            console.log("Hello I'm child11 function!")
        },
        function child22() {
            console.log("Hello I'm child22 function!")
        }
    )
)
console.log("**************************************")
function demo1() {
    console.log("This is Demo1")
    return function demo2() {
        console.log("This is Demo2")
        return "returns demo function"
    }
}
// console.log(demo1())
let n = demo1()
// console.log(n())
// n()
console.log(n())

console.log("**************************************")
function _10000coders() {
    console.log("27 batch")

    return function () {
        console.log("10k coders")
    }
}
console.log(_10000coders())

