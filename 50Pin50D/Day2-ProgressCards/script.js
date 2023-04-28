// pick up the dom elements
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


// circles.forEach((circle) => {
//     console.log(circle)
// })


// index to represent which one is active
let currentActive = 1



next.addEventListener('click', () => {
    // take whatever is active now and increment by 1
    currentActive++

    // console.log(currentActive)
    // make sure we keep it withing boundaries
    // if it goes to the last element to not pass past that

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    // console.log(currentActive)

    update()

})



prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    // console.log(actives.length, circles.length)
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}