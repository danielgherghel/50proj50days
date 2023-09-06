// String
const firstName = 'Samuel'

// const output = firstName;

// Number
const age = 32;
const temp = 98.9


// Boolean
const hasKids = true

// Null
const aptNumber = null;

// Undefined
// let score
const score = undefined


// Symbol
const id = Symbol('id')

// BigInt
const n = 9007199254740991n


// Refference Types
const numbers = [1, 2, 3, 4]

// const person = {
//     name: 'Daniel'
// }

function sayHello() {
    console.log('hello');
}


const output = sayHello;

// as a second argument we pass it the type of the operator
console.log(output, typeof output);





let person = {
    name: 'Daniel',
    age: 31
}

console.log(person)

let newPerson = person

newPerson.age = 25

console.log(newPerson);