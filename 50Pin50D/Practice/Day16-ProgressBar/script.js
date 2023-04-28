const smallBars = document.querySelectorAll('.bar-small')
const stations = document.getElementById('stations')
const percentage = document.getElementById('percentage')
const todos = document.getElementById('todos')

updatebigBars()

smallBars.forEach((bar, idx) => {
    // console.log(bar)
    // console.log(idx)
    bar.addEventListener('click', () => lightUpBars(idx))
})

function lightUpBars(idx) {
    // toggle on the last one
    if (idx === 9 && smallBars[idx].classList.contains('complete')) {
        idx--
    } else if (smallBars[idx].classList.contains('complete') && !smallBars[idx].nextElementSibling.classList.contains('complete'))
        idx--
    smallBars.forEach((bar, idx2) => {
        if (idx2 <= idx) {
            bar.classList.add('complete')
        } else {
            bar.classList.remove('complete')
        }
    })
    updatebigBars()
}

function updatebigBars() {
    // get the amount of the bars
    const fullBars = document.querySelectorAll('.bar-small.complete').length
    // console.log(fullBars)

    // get the total bars
    const totalBars = smallBars.length
    // console.log(totalBars)
    if (fullBars === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.width = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.width = `${fullBars * 100}px`
        percentage.style.height = `${fullBars * 10}px`
        percentage.innerText = `${fullBars / totalBars * 100}%`
    }


    if (fullBars == totalBars) {
        todos.style.visibility = 'hidden'
        todos.style.height = 0
    } else {
        todos.style.visibility = 'visible'
        stations.innerText = `${(totalBars - fullBars) * 10}%`
    }

}