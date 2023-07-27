// step 1 bring in the container

const container = document.querySelector('.container')

// step 2 get the unsplash url
const unsplashURL = 'https://source.unsplash.com/random/'
// add the number of rows we want

const rows = 10

// have a for loop

for(let i = 0; i < rows * 3; i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}


// console.log(getRandomSize())

// console.log(getRandomNr())
// function to get a random size
function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

// create the function for the random sizes
function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}
