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

    update1()

})


prev1.addEventListener('click', () => {
    presActive--

    if (presActive < 1) {
        presActive = 1
    }
    update1()
})


function update1() {
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