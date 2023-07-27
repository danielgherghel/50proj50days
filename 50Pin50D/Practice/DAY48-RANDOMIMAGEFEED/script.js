

// step 1 - bring in the elements

const container = document.querySelector('.container')

// step 2 - get the unsplash url
const unsplastImg = 'https://source.unsplash.com/random/'

// step 3 - set the number of rows

const rowCount = 15


// step 6 - do a for loop

for(let i = 0; i < rowCount * 5; i++){
    const image = document.createElement('img')
    image.src = `${unsplastImg}${randomSize()}`
    container.appendChild(image)
}




// console.log(randomSize())

// step 4 - create a function to ger a random size from 1 to 10

function randomNum(){
    return Math.floor(Math.random() * 10) + 400
}



// step 5 - crate a function to get the sizes
function randomSize(){
    return `${randomNum()}x${randomNum()}`
}