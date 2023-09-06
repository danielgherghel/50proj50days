let x;
const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberries', 'blueberry', 'rasberry']


// fruits.push(berries)

// x = fruits[3][1]

const allFruits = [fruits, berries]

x = allFruits

x = allFruits[1][0]

x = fruits.concat(berries)


// Spread operator (...)


x = [...fruits, ...berries]

// Flatten arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8]

x = arr.flat()


// Static Methods of array

x = Array.isArray(fruits)

x = Array.from('12568')

const a = 2
const b = 4
const c = 5

y = Array.of(a, b, c)

console.log(y);

