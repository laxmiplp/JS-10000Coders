for (var a = 1; a <= 2; a++) {
    console.log("welcome", a)

}
console.log("**********************")

for (var i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i * 5}`)
}
console.log("**********************")
for (var i = 10; i >= 1; i--) {
    console.log(`5 x ${i} = ${i * 5}`)
}
console.log("**********************")
let str = "welcome"
for (i = 0; i < 7; i++) {
    console.log(str[i])
}
console.log("**********************")
let arr = [4, 6, 8, 1, 2, 3, 10]//7
for (i = 0; i <= arr.length; i++) {
    console.log(arr[i])//4
}
console.log("**********************")
let str1 = "welcome"
// for (i = 6; i >= 0; i--) {
//     console.log(str1[i])
// }
for (i = str1.length - 1; i >= 0; i--) {
    console.log(str1[i])
}
console.log("**********************")
let str2 = "welcome"
let op = ''
for (i = str2.length - 1; i >= 0; i--) {
    op += str2[i]


}
console.log(op)

console.log("**********************")
console.log("**********************")

let names = 'laxmi'
let op2 = ''

for (let b = 0; b < names.length; b++) {
    op2 = op2 + names[b]
    console.log(op2)
}
console.log("**********************")
console.log("**********************")

debugger
let op1 = ''

for (let a = 0; a <= 5; a++) {
    op1 = op1 + '*'
    console.log(op1)
}
console.log("**********************")
let arrNames = ["suresh", "mahesh", "ramesh", "naresh"]
for (i = 0; i < arrNames.length; i = i + 2) {
    console.log(arrNames[i])
    console.log("Hello" + " " + arrNames[i])

    // console.log(arrNames[i][2])

}

console.log("**********************")
const arrReverse = ['one', 'two', 'three', 'four']

for (let i = 0; i < arrReverse.length; i++) {
    let reverseString = ''
    for (let j = arrReverse[i].length - 1; j >= 0; j--) {
        reverseString += arrReverse[i][j]
    }
    arrReverse[i] = reverseString
}
console.log(arrReverse)
console.log("**********************")

const aryr = ["apple", "banana", "cherry"];

for (let i = 0; i < aryr.length; i++) {
    let reversedString = ""; // Initialize an empty string for the reversed string
    for (let j = aryr[i].length - 1; j >= 0; j--) {
        reversedString += aryr[i][j]; // Add characters in reverse order
    }
    aryr[i] = reversedString; // Replace the current element with its reversed string
}

console.log(aryr);
console.log("**********************")
const arrys = ['one', 'two', 'six', 'one'];

let result = ''; // Initialize an empty string to build the output

for (let i = 0; i < arrys.length; i++) {
    let reverseString = ''; // Reverse the current string
    for (let j = arrys[i].length - 1; j >= 0; j--) {
        reverseString += arrys[i][j];
    }
    result += reverseString[0]; // Take the first character of the reversed string
    if (i < arrys.length - 1) {
        result += ','; // Add a comma except for the last character
    }
}

console.log(result); // Output: "n,w,i,n"
console.log("**********************")
//check input string is palindrom or not?using for loop and ternary

console.log("**********************")
let isSubscribed = true
let validity = 45
while (isSubscribed && validity >= 0) {
    console.log("we can make a calls")
    console.log(`remained with ${validity} days`)
    validity--

}
console.log("**********************")

let isSubscription = false
let episodes = 0
do {
    console.log(`watched ${episodes}`)
    episodes++
} while (isSubscribed && episodes <= 10)
console.log("**********************")
for (i = 0; i <= 10; i++) {
    if (i == 5) {

        continue
    }
    console.log(i * 2)

}
console.log("**********************")
for (i = 1; i <= 10; i++) {
    let j = i * 2//2 4 6
    if (j == 6) {
        break
    }
    console.log(i)//12
}
console.log("**********************")
for (i = 1; i <= 10; i++) {
    let j = i * 2//2 4 6 8 10 12
    if (j == 6) {
        continue
    }
    console.log(i)//12345675910
}
console.log("**********************")

let array = ['HTML', 'CSS', 'JS', 'REACT', 'NODE', 'MYSQL', 'MONGODB']
for (i = 0; i <= array.length - 1; i++) {
    if (array[i].length >= 4) {
        console.log(`${array[i]} is at ${i}`)
    }
}
console.log("**********************")
// let arrObj3 = [
//     {
//         id: 1,
//         title: 'coffee',
//         price: '300',
//         category: '12',
//         description: 'I Love Coffe'
//     },
//     /*...*/
//     {
//         id: 30,
//         title: 'tea',
//         price: '500',
//         category: '12',
//         description: 'I Love Tea'
//     },
//     {
//         id: 60,
//         title: 'cappchino',
//         price: '1000',
//         category: '80',
//         description: 'I Love Cappachina'
//     },
//     {
//         id: 90,
//         title: 'dulgano',
//         price: '800',
//         category: '3',
//         description: 'I Love Dulgano'
//     }
// ]
// for (i = 0; i <= arrObj3.length; i++) {
//     if (arrObj3[i].price >= 800) {
//         console.log(arrObj3[i].title)
//     }
// }
console.log("**********************")
let num = 10;
switch (num) {
    case 125:
        console.log("Entered Number is 125")
        break;
    case 100:
        console.log("Entered Number is 100")
        break;
    case 25:
        console.log("Entered Number is 25")
        break;
    case 40:
        console.log("Entered Number is 40")
        break;
    default:
        console.log("Default Number is 0")
        break;


}
console.log("**********************")
let num1 = 150;
switch (true) {
    case num1 < 50 && num1 > 100:
        console.log("Entered Number is 80")
        break;
    case num1 > 100 && num1 < 150:
        console.log("Entered Number is 130")
        break;
    case num1 > 150 && num1 < 200:
        console.log("Entered Number is 180")
        break;
    case num1 > 100 && num1 < 180:
        console.log("Entered Number is 150")
        break;
    default:
        console.log("not having default number")
        break;


}
console.log("**********************")
let arrList = [2, 4, 8]
arrList[10] = 'hii'
console.log(arrList)

console.log(arrList.length)
console.log(arrList[8])

console.log("**********************")
var emptyArry = []
for (i = 20; i <= 40; i = i + 2) {
    emptyArry[emptyArry.length] = i

}

console.log(emptyArry)

console.log("**********************")
var emptyStr = 'JAVASCRIPT'
let emptyStrArry = []
for (let i = 0; i < emptyStr.length; i++) {
    emptyStrArry[emptyStrArry.length] = emptyStr[i]
}
console.log(emptyStrArry)
console.log("**********************")


console.log("**********************")
var emptyStrReverse = 'JAVASCRIPT'
let emptyStrArryReverse = []
for (let i = emptyStrReverse.length - 1; i >= 0; i--) {
    emptyStrArryReverse[emptyStrArryReverse.length] = `${emptyStrReverse[i]} at Index ${[i]}`
}
// console.log(emptyStrArryReverse)
console.log(emptyStrArryReverse)

console.log("**********************")
let arr5 = ['Hello', 'Javascript', 'Welcome']
for (i = 0; i < arr5.length; i++) {
    let str3 = ''

    for (j = arr5[i].length - 1; j >= 0; j--) {
        str3 += arr5[i][j]

    }
    console.log(str3)

}
console.log("**********************")
console.log("**********************")

let arr6 = ['Hello', 'Javascript', 'Welcome'];
let a1 = []; // This will hold the reversed strings

// Loop through arr6 in reverse order
for (let i = arr6.length - 1; i >= 0; i--) {
    let b1 = ''; // To hold the reversed string
    // Reverse the current string
    for (let j = arr6[i].length - 1; j >= 0; j--) {
        b1 += arr6[i][j];
    }
    a1[a1.length] = b1; // Add the reversed string to a1
}

// Print the final reversed array
console.log(a1); // Output: ["emocleW", "tpircsavaJ", "olleH"]

console.log("**********************")
// let arr7 = ["Hello", "Welcome", "To", "Javascript"]
// let x1 = []
// for (let i = 0; i <= arr7.length - 1; i = i++) {
//     let y1 = ''
//     for (let j = arr7[i].length - 1; j >= 0; j = j - 1) {
//         y1 += arr7[i][j]
//     }
//     x1[x1.length] = y1
// }
// console.log(x1)


let arr7 = ["Hello", "Welcome", "To", "Javascript"];

// Loop through the array
for (let i = 0; i < arr7.length; i++) {
    // Check if the index is even
    if (i % 2 === 0) {
        let reversedString = ''; // To hold the reversed string
        // Reverse the characters of the current string
        for (let j = arr7[i].length - 1; j >= 0; j--) {
            reversedString += arr7[i][j];
        }
        arr7[i] = reversedString; // Replace the original string with the reversed string
    }
}

console.log(arr7); // Output: ["olleH", "Welcome", "oT", "Javascript"]


console.log("**********************")
