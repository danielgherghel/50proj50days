let x

const name = 'John'
age = 31

x = 'Hi, my name is' + name + ' and I am ' + age + ' years old'

// do the same thing using template literals
x = `Hello, my name is ${name} and I am ${age} years old`


// String Properties and Methods

const s = new String('Helo people')


x = typeof s

x = s.length


// Access value by key
x = s[1]


// see all the different methods available for a function
x = s.__proto__


x = s.toLocaleUpperCase()
x = s.toLowerCase()

x = s.charAt(5)

x = s.indexOf('p')

x = s.substring(0, 3)

x = s.substring(3)


x = s.slice(0, 6)

x = s.slice(-5)

x = s.slice(-11, -5)

x = '           helo world'
x = s.trim()


// replace an item in the string
// the first argument is the string we wanna replace
// the second argument is the string we're replacig with
x = s.replace('people', 'John')

x = s.includes('helo')


x = s.valueOf()


x = s.split('')

x = s.split(' ')

console.log(x);