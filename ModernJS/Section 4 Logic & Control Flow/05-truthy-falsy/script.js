// const email = 'test@test.com'

// if (email) {
//     console.log("You've passed in an email");
// }

// console.log(Boolean(email));

// ### falsy Values

// - false (obviously)
// - 0 (also -0 and BigInt 0n)
// - "" (empty string)
// - null
// - undefined
// - NaN



// ### Truthy Values

// Everything that is not falsy will evaluate to `true`, however, Some of these may surprise you.

// - Everything else that is not falsy
// - true (obviously)
// - '0' (string with 0)
// - 'false' (string with false)
// - ' ' (space in a string)
// - [] (empty array)
// - {} (empty object)
// - function() {} (empty function)

const x = function () { };

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// Thruthy and falsly caveats

const children = 0

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter the number of children you have');
}

// checking for empty arrays

const arr = ['1', '2', '3', '4', '5']

if (arr.length > 0) {
    console.log(`The array has ${arr.length} items`);
} else {
    console.log('The array is empty');
}


// Checking for empty objects

const user = {};

if (Object.keys(user).length > 0) {
    console.log('List user');
} else {
    console.log('no user');
}

// loose equality comparison
console.log(false == 0);
console.log(false == '');
console.log(false === '');
console.log(null == undefined);
console.log(null === undefined);
