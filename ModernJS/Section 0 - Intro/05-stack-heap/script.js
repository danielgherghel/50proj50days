// These values are stored on the stack
const name = 'John'
age = 20


// refference values are stored on the heap
const person = {
    name: 'Daniel',
    age: 31
}

let newName = name
newName = 'Jonathan'

let newPerson = person
newPerson.name = 'ADI'
newPerson.age = 40

console.log(name, newName);
console.log(person, newPerson);
