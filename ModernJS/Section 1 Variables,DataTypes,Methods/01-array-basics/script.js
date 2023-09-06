let x

// array literal
const numbers = [123, 45, 33, 29, 39, 101]

// array constructor
const fruits = new Array('apple', 'banana', 'grape')
const mixed = [12, 'Hello', true, null]


x = numbers[0]

x = numbers[0] + numbers[3]

x = `My favorite fruit is ${fruits[2]}`


x = numbers.length

fruits[2] = 'mango'

// fruits.length = 2


fruits[3] = 'strawberry'

fruits[fruits.length] = 'avocado'

fruits[fruits.length] = 'orange'

x = fruits



console.log(x);