// step 1
const library = [
    {
        title: 'The Wheel of time',
        author: 'Robert Jordan',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Malazan Book of the Fallen',
        author: 'Steven Erickson',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Game of thrones',
        author: 'George RR Martin',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

// step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// step 3
const { title: firstBook } = library[0]
console.log(firstBook);

// step 4
const obj = JSON.stringify(library)

console.log(obj);


