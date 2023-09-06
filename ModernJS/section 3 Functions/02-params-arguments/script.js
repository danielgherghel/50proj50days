// default params
function registerUser(user) {
    // make a parameter as a default value
    // if (!user) {
    //     user = 'Robo'
    // }

    // easier way to do this default value

    return user + ' is registered'
}


console.log(registerUser());
console.log(registerUser('John'));

function register2User(user = 'robot') {
    return user + ' Is registered'
}

console.log(register2User());

// rest parameters
function sum(...numbers) {
    return numbers
}

console.log(sum(1, 2, 3, 4, 5));

// using a foor loop to sum up all the numbers


function sum2(...numbers) {

    let total = 0

    for (const num of numbers) {
        total += num
    }

    return total
}

console.log(sum2(10, 20, 30));

// Objects as parameters

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`
}

const user = {
    id: 1,
    name: 'John'
}

console.log(loginUser(user));

console.log(loginUser({
    id: 2,
    name: 'Sarah'
}));


// Arrays as params

function getRandom(arr) {
    // generate a random index
    const randomIndex = Math.floor(Math.random() * arr.length)

    // get the random item
    const item = arr[randomIndex]

    console.log(item);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(getRandom(numbers));



// using the rest parameter

function get2Random(...arr) {

    const randomIndex = Math.floor(Math.random() * arr.length)

    const item = arr[randomIndex]

    console.log(item);
}

get2Random(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)