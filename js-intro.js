// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

const ripFirstChar = (string) => string.charAt(0)
console.log(ripFirstChar(mantra) + "\n")
// 2. Write the code that determines if there is a 'x' in mantra.

const findX = (string) => {
    let index = string.indexOf("x")
    if (index === -1){
        return "'x' not found in mantra"
    } else {
        return `'x' found in mantra at ${index}`
    }
}
console.log(findX(mantra) + "\n")

// 3. Write the code that determines if there is a 'v' in mantra.

const findV = (string) => {
    let index = string.indexOf("v")
    if (index === -1){
        return "'v' not found in mantra"
    } else {
        return `'v' found in mantra at ${index}`
    }
}
console.log(findV(mantra) + "\n")

// Stretch: Write the code that returns the position of 'v' in mantra.
//accidentally did that automatically


// Consider the following statement:

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!\n")
} else {
    console.log("Steady as she goes\n")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
//done above

// Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!\n')
} else {
    console.log('Keep coding!\n')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
//done above

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

console.log("for loop of Mantra")
for (let i = 0; i < mantra.length; i++) {
    console.log(mantra.charAt(i))
}

// Stretch: Using a while loop.

console.log("\nwhile loop of Mantra")
var iter = mantra[Symbol.iterator]();
var letter = iter.next()
while (letter.done != true){
    console.log(letter.value)
    letter = iter.next()
}

// Super Stretch: Using forEach().

console.log("\nforEach loop of Mantra")
mantra.split("").forEach(element => {
    console.log(element)
})

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

console.log("\nde-vowel a string\n")
const vowelRemove = (str) => {
    let vowels = "aeiou"
    let holder = []
    str.split("").forEach(element => {
        if (vowels.indexOf(element) === -1){
            holder.push(element)
        }
    })
    return holder.join("")
}
console.log(vowelRemove(message) + "\n")

// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

const catsOnly = (arr) => {
    let holder = []
    arr.forEach(element => {
        if (element.animal === 'cat'){
            holder.push(element)
        }
    })
    return holder
}
console.log(catsOnly(toonimals))

