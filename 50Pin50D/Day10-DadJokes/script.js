const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


generateJoke()


// Doing it with async/await
// when using await we have to label the function as async

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const response = await fetch('https://icanhazdadjoke.com', config)
    const data = await response.json()
    jokeEl.innerHTML = data.joke
}



jokeBtn.addEventListener('click', () => {
    generateJoke()
})

// using .then
// // this is where we make the fetch request
// function generateJoke() {
//     // using const config for a cleaner look
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config).then((res) => res.json()).then((data) => console.log(data))
// }

// this is where we make the fetch request
// function generateJoke() {
//     // using const config for a cleaner look
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }