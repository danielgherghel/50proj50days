// Declare a function / function declaration

function addDollarSign(value) {
    return '$' + value
}

console.log(addDollarSign(100));

// using a function expression
const addPlusSign = function (value) {
    return '+' + value
}

console.log(addPlusSign(200));

