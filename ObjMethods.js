let obj1 = { 'name': 'Laxmi' }
let obj2 = { 'profession': 'Software' }
let obj = Object.assign(obj1, obj2)
console.log(obj)
console.log('******************************')
let obj11 = { 'name': 'Laxmi' }
let obj22 = { 'profession': 'Software' }
let op = Object.assign(obj1, obj2, { 'Skills': 'Html,React' }, { 'Location': 'Banglore' })
console.log(op)
console.log('******************************')
obj11 = { 'name': 'prasanna' }
let op1 = Object.assign(obj11, obj22, { 'Skills': 'Html,React' }, { 'Location': 'Banglore' })
console.log(op1)
console.log('******************************')
let entries = Object.entries(op1)
console.log(entries)
let entries1 = Object.keys(op1)
console.log(entries1)

console.log('******************************')

let entries2 = Object.values(op1)
console.log(entries2)
console.log('******************************')

let len = Object.entries(op1).length
console.log(len)
console.log('******************************')
let seal1 = { 'name': 'Laxmi', 'dept': 'IT', 'loc': 'Asia' }
console.log(seal1)
// Object.seal(seal1)
seal1['dept'] = 'Hardwarwe'
console.log(seal1)
delete seal1.loc
console.log(seal1)
let k = Object.isSealed(seal1)
console.log(k)

console.log('******************************')
let seal2 = { 'name': 'Laxmi', 'dept': 'IT', 'loc': 'Asia' }
// Object.freeze(seal2)
seal2.gender = 'female'
console.log(seal2)
seal2['loc'] = 'Europe'
console.log(seal2)
delete seal2.loc
console.log(seal2)
let m = Object.isFrozen(seal2)

console.log(m)
console.log('******************************')
