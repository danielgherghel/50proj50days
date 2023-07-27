// step 1 grab the screen
const screens = document.querySelectorAll('.screen')

// step 1.2 - change the screens
// screens[0].classList.add('up')

// step 1.3 - get the insects screen
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')

// 1.4 get the start btn
const start_btn = document.getElementById('start-btn')

// 1.5 get the game container
const game_container = document.getElementById('game-container')
// 1.6 get the time / score / message
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

// 2.0 build some global variables
let seconds = 0
let score = 0
let selected_insect = {}

// 3.0 add an event listener on  the start button
// screens is a node list of all the classes
start_btn.addEventListener('click', () => screens[0].classList.add('up') )

// 3.1 loop through the insects buttons

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt}
        screens[1].classList.add('up')
        // create the insect
        setTimeout(createInsect, 1000)
        startGame()
    })
})


// 6.0 create the startGame()
function startGame(){
    // 6.1 set an interval
    setInterval(increaseTime, 1000)
}

// 6.2 function increaseTime
function increaseTime(){
    // get the minutes
    let m = Math.floor(seconds / 60)
    // get the seconds
    let s = seconds % 60

    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    timeEl.innerHTML = `Time: ${m}: ${s}`
    seconds++
}


// step 4 create the createInsect function
function createInsect(){
    // create the insect element as a random div and give it a class
    const insect = document.createElement('div')
    insect.classList.add('insect')

    // 4.1
    // give it a random position
    // use distraction to get the value of x and y

    const {x, y} = getRandomLocation()

    // 4.5 get the insect that we're using and set the style
    insect.style.top =`${y}px`
    insect.style.left = `${x}px`

    // 4.6 set the inner html with what we want inside of it\
    // 4.6.1 have a random rotation
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`


    // 4.8 add an event listener to the insect; calling a function

    insect.addEventListener('click', catchInsect)


    // 4.7 append the insect tot he game_container
    game_container.appendChild(insect)

}

// 4.2 create the function getRandomLocation()
function getRandomLocation(){
    // 4.3 need to figure out the width and the height of the window
    const width = window.innerWidth
    const height = window.innerHeight

    // 4.4 get the x value
    const x = Math.random() * (width - 200 ) + 100
    const y = Math.random() * (height - 200) +100
    return {x, y}

}


// 5.0 create the catchInsect() function
function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}


// 5.5 addInsects function
function addInsects(){
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}


// 5.1 increaseScore()
function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}