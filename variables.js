//we use var, let and const to declare a variable...
//the var is functions scope, let and const are block scope...
//as much as possible, avoid using var...

//declaring a variable example...
let firstName = 'Naruto'
firstName = 'Eyob'

const PI = 3.14//you are not allowed to reassign PI to a new value...
//primitive datatypes...
//integers...
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)//outputs true...

let age = 35
const gravity = 9.81//we use const for non-changing values, gravitational constant in m/s2...
let mass = 72 //mass in kilogram...
const boilingPoint = 100 //temperature in Celcius, boiling point of water which is a constant...
const bodyTemp = 37 //in Celcius...this is the average human body temperature, which is a constant... 

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

/**Math Methods to work with number variables...
 * const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
*************************************************************************************************************************

Random Number Generator

The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...

let randomNum = Math.random() // generates 0 to 0.999...

Now, let us see how we can use random() method to generate a random number between 0 and 10:

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
 */

/************************************************************************************************************************************************************************ */

//strings...
let js = 'JavaScript'
let py ='Python'
let quote = "The saying, 'Seeing is Believing' is not correct in 2020."
let quoteWithBackTick = `The saying, 'Seeing is Believing' is not correct in 2020.`
let fname = "Sakura"
let lname = "Haruno"

console.log(js == py) //outputs false...

//String concatenation...
let fullname = fname + " " + lname;//conatenating using the addition operator...

console.log(fullname)//Sakura Haruno

//a string could be a single character, paragraph or a page...
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

//template strings...example...
console.log(`The sum of 2 and 3 is 5`) //statically writing the data...
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)//injecting the data dynamically...

//String methods...
console.log(js.length)//this is to display the length of the string...
 let d = "cat"

 //accessing the first letter in the string...
 let firstLetter = d[0]
 console.log(firstLetter)//outputs c...

 let secondLetter = d[1]
 console.log(secondLetter)//outputs a...

 console.log(d.toUpperCase())//converting a string to uppercase...outputs CAT...

 console.log(d.toLowerCase())//converting all characters of a string to lowercase...

 console.log(d.substr(1,2))//outputs at...

 console.log(d.substring(1,2))//outputs a...
//booleans...
let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) //outputs false...

//non-primitive datatypes(arrays and objects)...
//arrays...
let nums =[1,2,3]//array...
nums[0] = 10//changing the value of index 0...

console.log(nums)// outputs [10,2,3]

let numbers = [1,2,3]

console.log(nums==numbers)//outputs false...even if two non-primitive datatypes have the same properties and values, they are not strictly equal...
console.log(d.replace("cat", "dog"))//outputs dog...

console.log(d.charAt(2))//outputs d...

//objects...
let userOne = {
    name:"Naruto Uzumaki",
    role: "Ninja",
    country: "Konoha"
}

let userTwo = {
    name:"Hinata Hyuga",
    role: "Medical Ninja",
    country: "Konoha"
}

console.log(userOne == userTwo)// outputs false...



