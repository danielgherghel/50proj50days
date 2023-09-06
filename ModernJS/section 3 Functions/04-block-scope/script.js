const x = 100
const foo = 1
var bar = 2

if (true) {
    const y = 200
    console.log(x + y);
}


// can't do this as the y is not defined in the global scope but the local scope
// console.log(x + y);

// loop example


for (var i = 0; i < 5; i++) {
    console.log(i);

}

// i cannot be accesed ouside the loop as it's a local scope
// console.log(i);

// var is not block scopped with loops and if statements / can be accessible outside the scope
// need the variables to be accessible just inside the scope
if (true) {
    const a = 500
    let b = 600
    var c = 700
}


// console.log(a);
// console.log(b);
console.log(c);

// var is acting as a local scope inside a function
function run() {
    var d = 100
    console.log(d);
}

run()


// console.log(d);



const words = ['spray', 'limit', 'iphone12promax', 'exuberant', 'destruction', 'present']
const result = words.filter((word) => word.length > 6)

console.log(result);


const objFilters = ['window', 'variables', 'console', 'reason', 'foo', 'bar', 'asa', 'run']
const objRes = objFilters.filter((obj) => obj.length > 4)

console.log(objRes);


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function getEven(numbers) {
    for (let i = 2; numbers > i; i++) {
        if (numbers % i === 0) {
            return false
        }
    }
    return numbers > 1
}

console.log(array.filter(getEven));