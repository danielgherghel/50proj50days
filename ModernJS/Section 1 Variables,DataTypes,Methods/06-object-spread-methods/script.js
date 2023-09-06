

// another way to create objects

let x

// const todo = {}
const todo = new Object()


todo.id = 1
todo.name = 'Get milk'
todo.completed = false

x = todo

const person = {
    address: {
        coords: {
            lat: 42.9578,
            lng: -87.989
        }
    }
}

x = person.address.coords.lng


const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const obj5 = { e: 5, f: 6, g: 7 }

// const obj3 = { obj1, obj2 }
// using the spread operator

const obj3 = { ...obj1, ...obj2, ...obj5 }
// using object assign

const obj4 = Object.assign({}, obj1, obj2)

const todos = [
    { id: 1, name: "Buy milk" },
    { id: 2, name: "Pick up salad" },
    { id: 3, name: "Drive a cybertruck" }
]


x = todos[2].name

// get all the keys in an object

x = Object.keys(todo)


x = Object.keys(todo).length

x = Object.values(todos)


x = Object.entries(todo)


x = todo.hasOwnProperty('id')

console.log(x);


