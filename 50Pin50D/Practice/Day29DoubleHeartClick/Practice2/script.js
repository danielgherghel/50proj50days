const likeMe = document.querySelector('.likeMe')
const ntimes = document.getElementById('ntimes')

let cTime = 0
let tClicked = 0

likeMe.addEventListener('click', (e) =>{
    if(cTime === 0){
        cTime = new Date().getTime()
    } else {
        if((new Date().getTime() - cTime) < 800){
            makeHeart(e)
            cTime = 0
        } else {
            cTime = new Date().getTime()
        }
    }
})


const makeHeart = (e) =>{
    const inima = document.createElement('i')
    inima.classList.add('fas')
    inima.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    // console.log(xIn, yIn)

    inima.style.top = `${yInside}px`
    inima.style.left = `${xInside}px`

    likeMe.appendChild(inima)

    ntimes.innerHTML = ++tClicked

    setTimeout(() => inima.remove(), 1000)

} 


// const loveMe = document.querySelector('.likeMe')
// const times = document.getElementById('times')

// let clickTime = 0
// let timesClicked = 0


// loveMe.addEventListener('click', (e)=>{
//     if(clickTime === 0) {
//         clickTime = new Date().getTime()

//     } else {
//         if ((new Date().getTime() - clickTime) <800){
//             createHeart(e)
//             clickTime = 0
//         } else {
//             clickTime = new Date().getTime()
//         }
//     }
// })


// const createHeart = (e) =>{

//     const heart = document.createElement('i')
//     heart.classList.add('fas')
//     heart.classList.add('fa-heart')

//     const x = e.clientX
//     const y = e.clientY

//     const leftOffset = e.target.offsetLeft
//     const topOffset = e.target.offsetTop

//     const xInside = x - leftOffset
//     const yInside = y - topOffset

//     heart.style.top = `${yInside}px`
//     heart.style.left = `${xInside}px`

//     loveMe.appendChild(heart)

//     times.innerHTML = ++timesClicked
//     // setTimeout(() => heart.remove(), 1000)

// }