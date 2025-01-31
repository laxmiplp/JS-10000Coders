let num = new Number()
console.log(typeof num)
let num1 = 25
console.log(num1)
console.log('****************************')
let float = 145.5445
let result = parseInt(float)
console.log(result)
let result1 = parseFloat(float)
console.log(result1)
console.log('****************************')
let a = '124ha+7'
console.log(isNaN(a))

console.log(isNaN(a * 2))
console.log('****************************')
let x = Math.PI
console.log(x)
console.log('****************************')
let y = Math.sqrt(3)
console.log(y)
console.log('****************************')
let z = Math.round(35.556485)
console.log(z)
console.log('****************************')
let b = Math.ceil(3456.485)
console.log(b)
console.log('****************************')
let c = Math.floor(3456.485)
console.log(c)
let c1 = Math.floor('3456.485')
console.log(c1)
console.log('****************************')
let d = Math.random()
console.log(d)
console.log('****************************')
let e = Math.random() * 10000
let f = Math.floor(e)
console.log(f)
console.log('****************************')
let g = Math.random() * 1000000
let otp = Math.floor(g)
if (otp < 1000000) {
    console.log(otp + 1000000)
} else {
    console.log(otp)
}

console.log('****************************')
//Generate OTP
let ex = Math.floor(Math.random() * 100000)
console.log(`OTP Generate: ${ex}`)
console.log('****************************')
let ex1 = Math.random() * 10000
let otp1 = Math.floor(ex1)
if (otp1 < 1000) {
    console.log(otp1 + 1000)
} else {
    console.log(otp1)
}
console.log('****************************')
