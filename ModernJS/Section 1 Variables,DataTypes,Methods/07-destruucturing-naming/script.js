const firstName = 'John'
const lastName = 'Doe'
const age = 32

// if the names are the same don't need to do this
// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// }


// do this instead


const person = {
    firstName, // this is a pointer to an already defined variable
    lastName,
    age
}

console.log(person.firstName);



// desctructuring an object

const todo = {
    id: 1,
    task: 'Brainwash',
    priority: "Drop it like it's hot",
    user: {
        name: 'Matthew',
        userName: 'matth_415',
        email: 'matt@gmail.com',
        phone: '458 986 9269'
    }
}

// could do this
// const id = todo.id
// const task = todo.task


// any properties we wanna destruct will go along with {} curly braces

const {
    id: todoid, // that's renaming it
    task,
    priority,
    user: { email },
    user: { phone }
} = todo



console.log(todoid, task, priority, email, phone);



// destructuring arrays

const numbers = [23, 85, 74, 96, 159, 496]

const [firstArg, secondArg] = numbers

// const [first, second] = numbers


// get the rest of the numbers using the rest operators
// the rest can be called whatever

const [first, second, ...rest] = numbers

const [arg1, arg2, ...val] = numbers


console.log(val);