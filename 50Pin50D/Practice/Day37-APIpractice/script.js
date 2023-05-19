


// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ed9d99101144ceb4653b56d9fdfc14d&page=1'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


// fetchApi()

// async function fetchApi(){
//     for(let i = 1; i<= card_nos; i++){
//         await getMovies(API_URL + i)
//     }
// }

// async function getMovies(API_URL){
//     const res = await fetch(API_URL)
//     const data = await res.json()
//     displayMovies(data.results)
// }


// function displayMovies(data) {
//     console.log(data)


// }



const stwars_container = document.getElementById('starwars-container')
const card_nos = 6

const fetchPokemons = async () =>{
    for(let i = 1; i <= card_nos; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard()
}


const createPokemonCard = (id) => {
    const starwarsEl=document.createElement('div')
    starwarsEl.classList.add('starwars')

    const starwarsInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}">
     </div>
    <div class="info">
        <span class="number">#001</span>
        <h3 class="name">Dummy</h3>
        <small class="type">Type: <span>grass</span></small>
    </div>
    `

    starwarsEl.innerHTML = starwarsInnerHTML
    stwars_container.appendChild(starwarsEl)

}

fetchPokemons()
