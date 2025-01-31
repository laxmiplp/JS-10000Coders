let arr1 = [1, 2, 3, 4, 5]
console.log(arr1)
let op = arr1.toString()
console.log(op)
console.log(op, arr1)
console.log('****************')
let arr2 = [20, 30, 40, 50, 60]
// let op1 = arr2.at(-3)
let op11 = arr2.join('*')
console.log(op11)
let op22 = op11.split('')
console.log(op22)

console.log(op11)
// console.log(op1)
// op1 = arr2.at(3)
// console.log(op1)

console.log('****************')
let arr3 = [200, 300, 400, 500, 600]
let op4 = arr3.push()
console.log(op4)
arr3.push('Hi', 9, true)

console.log(arr3)

console.log('****************')
let arr4 = ['tibet', 'china', 'mongolia', 'bhutan']
// arr4.pop()
// console.log(arr4)
let op33 = arr4.pop()
console.log(op33)

console.log('****************')
let arr5 = [1, 2, 3, 4, 5]
arr5.shift()
console.log(arr5)
let arr6 = [1, 2, 3, 4, 5]
let op44 = arr6.shift()
console.log(op44)
console.log('****************')
let arr7 = ['Hongkong', 'Thailand', 'Bangkong', 'Singapore']
arr7.unshift('India', 10, 'USA')
console.log(arr7)
let op55 = arr7.unshift('UK', 2, false)
console.log(op55)
console.log('****************')
let ex1 = [1, 'HTML', 'CSS', 2, 'Javascript', 'React', 3, 4]
let result = ex1.slice(4, 6)
let result1 = ex1.slice(4)
console.log(result1)
console.log(result)
let result2 = ex1.slice(-5)
console.log(result2)
console.log('****************')
let ex2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ex2.splice(2, 3, 'hing', 'jupiter', 7, 'tiger', false)
// console.log(ex2)
let op77 = ex2.splice(5, 4)
console.log(op77)
console.log('****************')
let arr8 = [5, 6, 3, 9]
let yy = arr8.indexOf(3)
console.log(yy)
console.log('****************')
let op88 = [4, 5, 2, 1, 6, 10, 7]
let zz = op88.find(function (value, index, array) {
    return value > 5
})
console.log(zz)
console.log('****************')
let op99 = [4, 5, 2, 1, 6, 10, 7]
let pp = op99.find(function (value, index, array) {
    return index > 4
})
console.log(pp)
console.log('****************')
let op92 = ['HTML', 'CSS', 'Javascript', 'React', 'Node']
// let r1 = op92.findIndex(value => value.length > 5)
let r1 = op92.find(value => value.length > 3)

console.log(r1)

console.log('****************')
let r2 = [24, 12, 89, 41, 35, 75]
let rr = r2.find(function (value, index, array) {
    return value % 2 !== 0
})
console.log(rr)
console.log('****************')
let arr = [10, 2, 3, 4, 5, 6]
arr.map((value, index, array) => {
    console.log(value - 2)
})
console.log('****************')
let arr12 = [10, 2, 3, 4, 5, 6]
let op12 = arr12.map((value, index, array) => {
    return value - 2
})
console.log(op12)
console.log('****************')
let arr13 = [1, 2, 3, 4]
let op14 = arr13.map((value, index, array) => {
    // return value * 2 == 2
    return index * 2

})
console.log(op14)
console.log('****************')
let arr14 = ['Hi', 'Hello', 'Welcome', 'Javascript']
// let arr15 = arr14.map((value, index, array) => {
//     return value + '-10k coders'

// }
// )
let arr15 = arr14.map((value, index, array) => {
    console.log(value + '-10k coders')

}
)

console.log('****************')
let arr16 = ['Hi', 'Hello', '12']
let arr17 = arr16.map(() => {
    return 'js'
})
console.log(arr17)
console.log('****************')
let arr18 = ['js', 'html', 'css', 'react']
let arr20 = arr18.forEach((value) => {
    return 'js' + value

})
console.log(arr20)
console.log('****************')
let arr22 = [12, 18, 34, 16, 45]
// let arr21 = arr22.filter((x, y, z) => {
//     return x > 16
// })
// let arr21 = arr22.forEach((x, y, z) => {
//     return x > 16
// })
let arr21 = arr22.map((x, y, z) => {
    return x >= 16
})
console.log(arr21)
console.log('****************')
let arr23 = ['Java', 'java', 'Html', 'Css', 'css', 'React', 'react']
let arr24 = arr23.filter((x, y) => {
    return x[0] == x[0].toLowerCase()
})
console.log(arr24)
console.log('****************')
let arr25 = [7, 5, 1, 4, 3]
let arr26 = arr25.reduce((x, y) => {
    console.log(`x value is : ${x} , y value is : ${y} and value x+y is: ${x + y}`)

    return x + 3

})

console.log('****************')
let arr33 = [1, 2, 3, 4]
let arr32 = arr33.every((x, y) => {
    return x <= 5
})
console.log(arr32)
console.log('****************')
let arr34 = [1, 2, 3, 4, 7]
let arr35 = arr34.some((x, y) => {
    return x >= 4
})
console.log(arr35)
console.log('****************')
let arr38 = [1, 2, 3, 4, 7]
console.log(arr38.sort())
let arr39 = ['egg', 'roti', 'batani', 'makani', 'wheat']
console.log(arr39.sort())
let arr40 = [8, 2, 5, 4, 7]
let arr41 = arr40.sort((a, b) => {
    // return a - b
    return b - a

})
console.log(arr41)
console.log('****************')