let str1 = 'Hello'
console.log(typeof str1)
let str2 = new String('Hi')
console.log(typeof str2)
console.log('******************')
let str = 'Welcome'
let result1 = str.charAt(3)
console.log(result1)
result1 = str.charAt[4]
console.log(result1)
result1 = str.charAt(-1)
console.log(result1)
result1 = str.charAt[-3]
console.log(result1)
result1 = str.at(-1)
console.log(result1)
result1 = str.at(-5)
console.log(result1)
result1 = str.at(5)
console.log(result1)
result1 = str.at(2)
console.log(result1)
console.log('******************')

let a = 'LaxmiPrasanna'
let op1 = a.slice(2, 4)
console.log(op1)
// let op2 = a.slice(9, 8)
// console.log(op2)
let op3 = a.slice(-3, -8)
console.log(op3)
let op4 = a.slice(-8, -3)//nasar
console.log(op4)
let op5 = a.charCodeAt(13)
console.log(op5)
let op6 = a.slice(8)
console.log(op6)
console.log('******************')
let b = 'Tenkcoders'
// let output = b.substring(-1, 5)
// output = b.substring(-3)
// output = b.substring(2)
// output = b.substring(2, 5)
// output = b.substring(-2, -5)
output = b.substring(5, 2)
console.log(output)
console.log('******************')
let c = 'Hyderabad'
// console.log(c.substr(3))
// console.log(c.substr(3, 5))
console.log(c.substr(5, 2))
console.log(c.substr(2, 3))
console.log(c.substr(4, 7))
console.log(c.substr(7, 2))
console.log('******************')
let wording = 'HELLOworld'
console.log(wording.toLowerCase())
console.log(wording.slice(0, 5).toLowerCase().concat(wording.slice(5).toUpperCase()))
console.log(wording.slice(0, 5).toLowerCase())

console.log('******************')
let skill1 = 'HTML'
let skill2 = 'CSS'
let skill3 = 'JS'
let skill4 = 'React'
let skill5 = 'Node'
let skillKown = skill1.concat(skill2, skill3, skill4, skill5, 'webtechnologies')
console.log(skillKown)

console.log('******************')

let tech = '     React'
console.log(tech.length)
let space = tech.trim()
console.log(space)
console.log(space.length)
console.log('******************')

let tech1 = '     React   '
let space1 = tech1.trimStart()
console.log(space1)
let space2 = tech1.trimEnd()
console.log(space2)

console.log('******************')
let x = 'Telangana'
console.log(x.length)
let xx = x.padStart(15, 'From')
console.log(xx)
console.log(xx.length)

let xxx = x.padEnd(10, '9')
console.log(xxx)
console.log(xxx.length)
console.log('******************')
let y = 'rabbit'
console.log(y.repeat(10))
console.log('******************')
let yy = 'Frontend Developer will works on Frontend Part'
console.log(yy)
console.log(yy.replace('Frontend', 'Fullstack'))
console.log('******************')
console.log(yy.replace(/Frontend/g, 'Fullstack'))
console.log('******************')

let yz = 'Frontend Developer will works on FRONTEND Part as a fullstack DEVELOPER'

console.log(yz.replace(/Frontend/ig, 'Fullstack'))
console.log(yz.replace(/Frontend/i, 'Fullstack'))


console.log('******************')
let ex1 = 'hieklHIEKLyTdW'
let ex2 = ''
console.log(ex1[1] == ex1[1].toUpperCase())
console.log(ex1[2] === ex1[2].toUpperCase())
console.log('******************')
for (i = 0; i < ex1.length; i++) {
    if (ex1[i] == ex1[1].toUpperCase()) {
        ex2 += ex1[i].toLowerCase()

    } else {
        ex2 += ex1[i].toUpperCase()

    }
}
console.log(`input string is ${ex1}`)
console.log(`converted string is ${ex2}`)

console.log('******************')
function findIndex() {
    let a1 = ['excel', 'fuel', 'react', 'js', 'html', 'css']
    let b1 = a1[1].indexOf('e')
    b1 = a1[2].indexOf('e')
    // b1 = a1[4].indexOf('e')
    console.log(b1)
    console.log('******************')

    for (i = 0; i < a1.length; i++) {
        console.log(a1[i].indexOf('e'))
    }
    for (i = 0; i < a1.length; i++) {
        if (a1[i].indexOf('e') == -1) {
            console.log(`e is not available in ${a1[i]}`)
        } else {
            console.log(`e is available at #${a1[i]} at Index ${a1[i].indexOf('e')}`)
        }
    }
}
findIndex()

console.log('******************')
//0p ['HTML','CSS','javascript','REACT','angular']
function task() {
    let sample = ['html', 'css', 'JAVASCRIPT', 'react', 'ANGULAR']

    //1st method
    // console.log('[' + `'` + sample[0].toUpperCase() + `'`.concat(',' + `'` + sample[1].toUpperCase() + `'` + ',' + `'` + sample[2].toLowerCase() + `'` + ',' + `'` + sample[3].toUpperCase() + `'` + ',' + `'` + sample[4].toLowerCase()) + `'` + ']')

    //2nd method
    let result = [sample[0].toUpperCase(), sample[1].toUpperCase(), sample[2].toLowerCase(), sample[3].toUpperCase(), sample[4].toLowerCase()]

    console.log(`[${result.join(",")}]`)


}
task()


console.log('******************')
function splitTask() {
    let i = 'jav,asc,ri,pt'
    let v = i.split(',')
    console.log(v)
}
splitTask()
console.log('******************')
let matchEx = 'Hello Welcome Home'
let matchStore = matchEx.match('H')
console.log(matchStore)
let inc = 'India'
let inc2 = inc.includes('N')
console.log(inc2)