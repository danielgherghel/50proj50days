

// regular function syntax
// function add(a, b) {
//     return a + b
// }

// console.log(add(1, 2));


// rewrite as an arrow function syntax

// const add = (a, b) => {
//     return a + b;
// };


// console.log(add(1, 2));


// make it shorter since we have a single expression

// implicit return
const substract = (a, b) => a - b;

console.log(substract(10, 5));


// if a function has a single parameter
const double = (a) => a * 2

console.log(double(10));


// returning an object

const createObj = () => ({
    name: 'Daniel',
})

console.log(createObj());


const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (n) {
    console.log(n);
})

numbers.forEach(num => {
    console.log(num);
})
