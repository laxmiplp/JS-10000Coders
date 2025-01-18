
//Problem 1: FizzBuzz with "Hello" and "Javascript"
// Write a program using a loop that prints the numbers from 1 to 100, but for multiples of 3 print
// "Hello" and for multiples of 5 print "Javascript". For numbers that are multiples of both 3 and 5, print
// "Hello Javascript".
// Input: No input required (prints numbers from 1 to 100)
// Output:
// 1. For multiples of 3: "Hello"
// 2. For multiples of 5: "Javascript"
// 3. For multiples of both 3 and 5: "Hello Javascript"
function multiples() {
    for (let i = 1; i <= 100; i++) {
        console.log(i)
        if (i % 3 === 0) {
            console.log('For multiples of 3:' + " " + 'Hello')
        }
        if (i % 5 === 0) {
            console.log('For multiples of 5:' + " " + 'Javascript')
        }
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('For multiples of 3 & 5:' + " " + 'Hello' + " " + 'Javascript')

        }
    }

}
multiples()

console.log('******************************************')
// Problem 6: Greet User
// Write a function greetUser that takes a name as a parameter and prints a greeting message.
// Call the function to greet a user whose name is entered by the user. (Use `prompt` to enter the user
// name).
// Input/Output:
// Input: "John" (entered via prompt)
// Output: "Hello, John!"
// Input: "Emma" (entered via prompt)
//  Output: "Hello, Emma!"
function greetUser(username1, username2) {
    username1 = prompt('Enter the name to Greet.')
    let print1 = alert(`Hello ${username1}, Good Morning! Have a Nice Day with a Great Coffee.`)
    console.log(print1)
    username2 = prompt('Enter the name to Welcome.')
    let print2 = alert(`Hello ${username2}, Please Welcome to the Home.`)
    console.log(print2)

}
greetUser()


console.log('******************************************')
// Problem 5: Multiplication Table
// Create a program that prints a multiplication table for a number entered by the user. The program
// should use a function to generate the multiplication table and display the result.
// Input/Output:
// Input: 3
function multiplication(num1, num2) {

    for (num1 = 1; num1 <= 10; num1++) {
        result1 = num1 * 3
        console.log(`3 x ${num1} = ${result1}`)
    }
    console.log('******************************************')

    for (num2 = 1; num2 <= 10; num2++
    ) {
        result2 = num2 * 5
        console.log(`5 x ${num2} = ${result2}`)
    }
}
multiplication(3, 5)
console.log('******************************************')

console.log('******************************************')
// Problem 2: Check Leap Year
// Create a function checkLeapYear that checks whether a year is a leap year or not.
// Input/Output:
// • Input: 2000 Output: true
// • Input: 1900 Output: false
// • Input: 2024 Output: true
// • Input: 2021 Output: false
function checkLeapYear(leapYear) {
    if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)) {
        return true;
    }
    return false;

}
console.log(checkLeapYear(2000));
console.log(checkLeapYear(1900));
console.log(checkLeapYear(2024));
console.log(checkLeapYear(2021));
console.log('******************************************')
// Problem 3: Calculate Factorial
// Create a function factorial that calculates the factorial of a number n.
// Input/Output:
// • Input: 4 Output: 24
// • Input: 5 Output: 120
// • Input: 0 Output: 1
function factorial(n) {
    let result = 1
    for (let i = n; i >= 1; i--) {
        result = result * i

    }
    if (n === 0) {
        return 1
    }
    return result

}

console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(0))
console.log('******************************************')

// Problem 4: Print Even Numbers Up to a Given Number
// Write a program that asks the user for a number, then prints all the even numbers from 0 up to that
// number. Use a loop to find and print the even numbers. You should also add a conditional check to
// ensure the number is not negative.
// Input/Output:
// • Input: 10 Output: 0, 2, 4, 6, 8, 10
// • Input: 7 Output: 0, 2, 4, 6
// • Input: 5 Output: "Please enter a nonnegative number."
function evenNumber() {
    let inputField = prompt('Enter a Non Negative number:');
    let num = parseInt(inputField);

    if (isNaN(num) || num < 0) {
        document.write("Please enter a valid Non Negative number.");
        return;
    }

    document.write(`Even Numbers up to ${num}: `);

    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            document.write(i + " ");
        }
    }
}

evenNumber();


console.log('******************************************')
// Problem 8: Sum of Digits in a Number
// Write a function sumOfDigits that calculates the sum of all digits in a given number. For example, for
// the number 12345, the sum is 1 + 2 + 3 + 4 + 5 = 15.
// Input/Output:
// Input: 12345
// Output: 15
// Input: 9876
// Output: 30
function sumOfDigits(number) {
    let sum = 0;

    while (number > 0) {
        let digit = number % 10;
        sum += digit;
        number = (number - (number % 10)) / 10;
    }

    return sum;
}

console.log(sumOfDigits(12345));
console.log(sumOfDigits(9876));

console.log('******************************************')
// Problem 7: Remove Vowels from a String
// Write a program that removes all vowels from a string entered by the user. The program should print
// the string without vowels.
// Input/Output:
// Input: "Hello, World!"
// Output: "Hll, Wrld!"
// Input: "JavaScript is awesome!"
//  Output: "JvScrpt s wsm!
function removeVowels() {
    let ip1 = 'Hello, World!'
    let result11 = ip1.replace(/[aeiouAEIOU]/g, '')

    console.log(result11)

    let ip2 = 'JavaScript is awesome!'
    let result22 = ip2.replace(/[aeiouAEIOU]/g, '')

    console.log(result22)


}
removeVowels()