

function sayHello() {
    console.log('Hi');
}

sayHello('maya')


// when you declare the function these are the parameters (num1, num2)
function add(num1, num2) {
    console.log(num1 + num2);
}

// when you call the function these are the arguments (1,20)
add(1, 20)

function substract(num1, num2) {
    return num1 - num2

    console.log('After the return');
}



const result = substract(10, 2)
console.log(result, substract(20, 10));