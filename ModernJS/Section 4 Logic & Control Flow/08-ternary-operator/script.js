

// Ternary operator

const age = 16
// using an if statement
if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You can not vote');
}

// using a ternary operator
// there are 3 parts to it
// the condition age >= 18
// ternary operator is the ?
// the "else" is represented by the :
age >= 18 ? console.log('You can vote') : console.log('You can not vote');

scale = 6
const howtoreact = scale >= 7 ? "Very decent" : "You can work on it"
console.log(howtoreact);

// set a variable based on a value
// assigning a conditional value to a variable

const canVote = age >= 18 ? true : false
const canVote2 = age >= 18 ? 'You can vote' : 'You can not vote'

console.log(canVote);
console.log(canVote2);

// multiple statements

const auth = true
// let redirect;

// if (auth) =  true or false
// if (auth) {
//     alert('Welcome to the dashbord')
//     redirect = '/dashboard'
// } else {
//     alert('Access Denided')
//     redirect = '/login'
// }

// re doing the conditionals using the ternery operators

// const redirect = auth ?
//     (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denided'), '/login')




// console.log(redirect);

// auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');