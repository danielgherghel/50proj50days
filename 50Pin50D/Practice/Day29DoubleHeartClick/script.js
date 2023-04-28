const lokeMe = document.querySelector('.lokeMe')
const ntimes = document.getElementById('ntimes')

const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
let clickTime2 = 0
let likeCount2 = 0

let clickTime3 = 0
let likeCount3 = 0

let clickTme = 0
let tClicked = 0

lokeMe.addEventListener('click', (e) =>{
    if (clickTme === 0){
        clickTme = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTme) <800){
            createLike(e)
            clickTme = 0
        } else {
            clickTme = new Date().getTime()
        }
    }
})

card2.addEventListener('click', (e) =>{
    if(clickTime2 ===0){
        clickTime2 = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime2) < 800){
            createLike(e, card2)
            clickTime2 = 0
        } else {
            clickTime2 = new Date().getTime()
        }
    }
})

card3.addEventListener('click', (e) =>{
    if(clickTime3 ===0){
        clickTime3 = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime3) < 800){
            createLike(e, card3)
            clickTime3 = 0
        } else {
            clickTime3 = new Date().getTime()
        }
    }
})

const createLike = (e, container) =>{
    const loke = document.createElement('i')
    loke.classList.add('fas')
    loke.classList.add('fa-heart')

    const x= e.clientX
    const y = e.clientY

    const lOffset = x - container.offsetLeft
    const tOffset = y - container.offsetTop

    loke.style.top = `${tOffset}px`
    loke.style.left = `${lOffset}px`

    container.appendChild(loke)

    if (container === card2) {
        likeCount2++
        ntimes.innerHTML = likeCount2
    } else if (container === card3) {
        likeCount3++
        ntimes.innerHTML = likeCount3
    } else {
        tClicked++
        ntimes.innerHTML = tClicked
    }

    setTimeout(() => loke.remove(), 1000)
}
