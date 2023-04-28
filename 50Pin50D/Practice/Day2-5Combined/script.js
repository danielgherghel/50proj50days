const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))



const progress1 = document.getElementById('progress1')
const prev1 = document.getElementById('prev1')
const next1 = document.getElementById('next1')
const squares = document.querySelectorAll('.square')



// squares.forEach((square) => {
//     console.log(square)
// })


let presActive = 1

next1.addEventListener('click', () => {
    presActive++

    // console.log(presActive)
    //restrict to our range
    if (presActive > squares.length) {
        presActive = squares.length
    }

    update()

})

prev1.addEventListener('click', () => {
    presActive--

    if (presActive < 1) {
        presActive = 1
    }
    update()
})




function update() {
    squares.forEach((square, par2) => {
        if (par2 < presActive) {
            square.classList.add('active')
        } else {
            square.classList.remove('active')
        }
    })

    const active1 = document.querySelectorAll('.active')
    progress1.style.width = (active1.length - 1) / (squares.length - 1) * 100 + '%'

    if (presActive === 1) {
        prev1.disabled = true
    } else if (presActive === squares.length) {
        next1.disabled = true
    } else {
        prev1.disabled = false
        next1.disabled = false
    }


}


const explore = document.querySelector('.explore')
const btn = document.querySelector('.btn')
const processing = document.querySelector('.processing')


btn.addEventListener('click', () => {
    explore.classList.toggle('active')
    processing.focus()
})



const cont4 = document.querySelector('.container4')
const textArea = document.querySelector('.text-area')


iterN = 0


let cicle = setInterval(blurPage, 40)


function blurPage() {
    iterN++

    if (iterN >= 100) {
        clearInterval(cicle)
    }

    textArea.innerText = `${iterN}%`
    textArea.style.opacity = scale(iterN, 0, 100, 1, 0)
    cont4.style.filter = `blur(${scale(iterN, 0, 100, 30, 0)}px)`
}


function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}