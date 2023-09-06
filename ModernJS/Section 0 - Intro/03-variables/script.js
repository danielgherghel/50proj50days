// ways to create a variable

// var, let, const

let firstName = 'John'
let lastName = 'Doe';

console.log(firstName, lastName)

// let is initializing a variable

let age = 30

console.log(age);


// re-assigning variables

age = 31

console.log(age);

let score;

score = 1

console.log(score);

if (true) {
    score = score + 1
}

console.log(score);


const x = 100

// x = 200

// const score1
// let score1

const arr = [1, 2, 3, 4]

// getting an error on the array reassign
// arr = [1,2,3,4,5]


// add to the end
arr.push(5)
console.log(arr);

const person = {
    name: 'Brad'
}

person.name = 'John'



// console.log(person);

person.email = 'daniel@gmail.com'

person.phone = '0757528486'

console.log(person);


// declare multiple values at once

let a, b, c

const d = 10, e = 20, f = 30

console.log(e)
console.log(a);
console.log(b);