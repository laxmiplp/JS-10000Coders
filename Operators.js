let isNodejs = true
let isDjango = false
let exp = 4.5
let joinIn = 30
let isRelocate = true
let isFlexible = true
let job = ((isNodejs || isDjango) && (exp > 4) && (joinIn <= 15) && (isRelocate) && (isFlexible)) // T&&T&&F&&T&&T
console.log(job) //F

//ternary operator
job ? (console.log("successful")) : (console.log("unsuccessful"))

let username = "Srikanth"
let password = "sri@123"
username == "Srikanth" || password == "sri@1234" ? (console.log("Login Successful")) : (console.log("Login Failed"))

let obj = {
    empName: "Sree",
    details: {
        id: 101,
        location: "hyderabad",
        dept: 'IT'
    }
}
console.log(obj?.details?.dept)

let arr = [1, 2, 3, 4, 5[4, 5, 8]]
// console.log(arr[4][2])
let products =
    [
        {
            id: 1,
            title: 'shirts',
            price: '2000',
            category: 'Male',
            description: 'no description'
        },
        {
            id: 30,
            title: 'kurtas',
            price: '3000',
            category: 'Female',
            location: [{
                item1: 'Hyderabad',
                item2: 'Banglore',
                item3: 'Chennai',
                item4: 'gurugram'
            }]
        }
    ]
// console.log(products.description ?? "its women kurta set")
console.log(products[0].category)
console.log(products[0].description)
console.log(products[1].description ?? "its women kurta set")
console.log(products[1].rating ?? "5 star")
console.log(products[1].location.item2)
console.log(products[1].location)
console.log(products[1].location.item5 ?? "salam")
console.log(products[1].location[0].item5 ?? "salam")



let isLogin = true
let role = 'admin'
isLogin ? role == 'customer' ? (console.log("Welcome to customer")) : (console.log("Welcome to admin")) : console.log("Please Login")
// let veg = 'panner'
// veg == 'gobi' ? console.log("GOBI") : console.log("PANNER")
// let nonveg = 'chicken'
// nonveg == 'mutton' ? console.log("MUTTON") : console.log("CHICKEN")

// let user = 'veg'
// let vegetarian = 'panner'
// let nonveg = 'mutton'
// user == 'veg' ? vegetarian == 'gobi' ? console.log("gobi") : console.log("panner") : nonveg == 'chicken' ? console.log("chicken") : console.log("mutton")
let isUserLogin = true
let userChoice = 'vegetarian'
let item = 'gobi'
isUserLogin ?

    userChoice == 'nonvegetarian' ?
        item == 'chicken' ?

            console.log("chicken") : console.log("mutton") :
        item == 'panner' ?
            console.log("panner") : console.log("gobi")

    : console.log("Please login")


// let course1 = ['HTML', 'CSS', 'BOOTSTRAP']
// let course2 = ['HTML', 'CSS', 'BOOTSTRAP', 'JS', 'REACT']
// let course3 = ['HTML', 'CSS', 'BOOTSTRAP','JS','NODE']
// let course = ['HTML', 'CSS', 'BOOTSTRAP', 'JS', 'REACT', 'NODE']
// let studentKnows = true

// studentKnows?
// course==['HTML', 'CSS', 'BOOTSTRAP'] ? console.log("UI/UX Designer"):course==['HTML', 'CSS', 'BOOTSTRAP', 'JS', 'REACT']?console.log("Frontend Developer"):course==['HTML', 'CSS', 'BOOTSTRAP','JS','NODE']?console.log("Backend Developer"):course==['HTML', 'CSS', 'BOOTSTRAP', 'JS', 'REACT', 'NODE']?console.log("Fullstack Developer")

// :console.log("Go and Join in 10k coders")



// debugger
var a = 45
console.log(a)

let b = 7
console.log(b)

const c = "Hello"
console.log(c)

let ex = "welcome"
for (i in ex) {
    console.log(ex[i])
}
let ex1 = [1, 2, 3, 4, 5, 6, 7, 8]
for (k in ex1) {
    console.log(k)
}
let objFor = { id: 12, dept: 'Software', company: 'MNC', type: 'product' }
for (s in objFor) {
    console.log(objFor[s])

}
let strLength = 'nope'
for (i in strLength) {
    // console.log("sree", i++)
    console.log("sree", +i + 1)
}
// let mul = "something"
// for (a in mul) {
//     console.log(`2 x ${a} = ${a * 2}, Hello`)

// }
// let x = 'laxmi'
// for (n of x) {
//     console.log(n)
// }
let y = ["arvindh", "suresh", "karthik", "ramya", "bhavya"]
for (const b in y) {
    // console.log(b + "-" + y[b])
    console.log(`${+b + 1}-${y[b]}`);

}

let count = 1
for (const b of y) {
    // console.log(y[1] + "-" + b)
    console.log(`${count}-${b}`)
    count++

    //     let count = 1;
    // for (const name of names) {
    //   console.log(`${count}-${name}`);
    //   count++;

}
let knowsHTML = true
let knowsCSS = true
let knowsBootstrap = true
let knowsJS = false
let knowsReact = false
let knowsNode = false
let student
student ?
    knowsHTML && knowsCSS && knowsBootstrap && !knowsJS && !knowsReact && !knowsNode ? console.log("UI/UX Designer") :
        knowsHTML && knowsCSS && knowsBootstrap && knowsJS && knowsReact && !knowsNode ? console.log("Frontend Developer") :
            knowsHTML && knowsCSS && knowsBootstrap && knowsJS && knowsNode && !knowsReact ? console.log("Backend Developer") :

                knowsHTML && knowsCSS && knowsBootstrap && knowsJS && knowsNode && knowsReact ? console.log("Fullstack Developer")





                    : console.log("Go and join in 10k coders!!!")
    : console.log("Go and join in 10k coders")
