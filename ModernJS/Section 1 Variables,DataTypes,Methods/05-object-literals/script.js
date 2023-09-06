let x;


const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: 'Main Street no. 1',
        zipCode: 98757,
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'books', 'snowboarding']
}

// accessing the data from this object

x = person

console.log(x.age);
console.log(x['name']);


// accesing an arrayinside the array


console.log(x.address.zipCode);
console.log(x.address.street);
console.log(x['address']['state']);
console.log(x.address.zipCode);

console.log(person.hobbies[2]);


person.name = 'Jane Doe'


x = person.address.city


person['isAdmin'] = false


delete person.age

person.hasChildren = true
person.eyeColor = 'Hazel'

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet()


const person2 = {
    'first name': 'Daniel',
    'last name': 'Gherghel',
}

x = person2['last name']




console.log(x);
