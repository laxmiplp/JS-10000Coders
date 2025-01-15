
console.log(z)
var z = function () {
    console.log("hello")
}

function isPalindrome(str1) {
    let i
    let str = ''
    for (i = str1.length - 1; i >= 0; i--) {
        str += str1[i]
    }
    console.log(str)
    if (str == str1) {
        console.log('palindrom')
    } else {
        console.log('not palindrom')

    }
}
isPalindrome('level')
isPalindrome('laxmi')
isPalindrome('engine')

var a = 123
let b = 456
const c = 102
function demo() {
    console.log(a)//123
}
// demo()

for (let i = 0; i <= 10; i++) {
    console.log(b)

}
if (true) {
    console.log(c)

}
demo()
function sample() {
    var bcaa = 202020
    // console.log(bcaa)
}
// sample()
console.log(bcaa)


