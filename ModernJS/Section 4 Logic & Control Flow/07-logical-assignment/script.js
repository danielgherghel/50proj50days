

// || = assigns the right side value only if the left is a falsy value

let a = false

// we say if the value of a is false then assign 10 to the variable a
// if (!a) {
//     a = 10
// }



// the shorthand of doing this is:

// a = a || 20
// or we can shorten more as:

a ||= 30

// && = assigns the right side value only if the left is a truthy value


let b = 1

// if (b) {
//     b = 15
// }

// b = b && 15

b &&= 21

console.log(a);

console.log(b);

// ?? - assigns the right side value if the left is null or undefined

let c = undefined

// if (c === null || c === undefined) {
//     c = 30
// }


// c = c ?? 31

c ??= 32


console.log(c);