//sum of an array
let arry = [10, 20, 30, 40, 50]
let sum = 0
for (let i = 0; i < arry.length; i++) {
    sum += arry[i]//10 20
}
console.log(sum)
//Finding the longest word in an array of strings
let word = ['Apple', 'kiwi', 'Mango', 'Custard', 'Orange']
let longestWord = ''//Apple
for (i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
        longestWord = word[i]
    }

}
console.log(longestWord)

//Counting occurrences of a character in a string
let charStr1 = "Javascript"
let charStr2 = "Spring Boot"
let char1 = 'y'
let char2 = 'x'
let count1 = 0
let count2 = 0

for (let i = 0; i < charStr1.length; i++) {
    if (charStr1[i] === char1) {
        count1++
    }
}
console.log(count1)
for (let j = 0; j < charStr2.length; j++) {
    if (charStr2[j] === char2) {
        count2++
    }
}
console.log(count2)
//Reversing a string
let reverseString = 'LaxmiSahasra Pillalamarri'
let emptyString = ''
for (i = reverseString.length - 1; i >= 0; i--) {
    emptyString += reverseString[i]
}
console.log(emptyString)
//Array of even numbers
let evenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 81, 52, 67]
let index = 0
let emptyEvenArry = []
for (i = 0; i <= evenNum.length; i++) {
    if (evenNum[i] % 2 == 0) {
        emptyEvenArry[index] = evenNum[i]
        index++
    }

}
console.log(emptyEvenArry)
//Find the index of a character of a string
let str = '10k coders'
let char = 'e'
for (i = 0; i <= str.length; i++) {
    if (str[i] === char) {
        console.log(i)

    }
}
//Swapping arrays

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
//Swapping destructuring an array
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
console.log("Before swap")
console.log(`a: ${a}`)
console.log(`b: ${b}`)
let temp = a
a = b
b = temp
console.log("After swap")

console.log(`a: ${a}`)
console.log(`b: ${b}`)
