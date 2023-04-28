const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()


// cups.forEach(cup => {
//     console.log(cup)
// })


// adding idx will loop on the index of each object
smallCups.forEach((cup, idx) => {
    // console.log(cup)
    // console.log(idx)
    cup.addEventListener('click', () => highlightCups(idx))
})


function highlightCups(idx) {
    //toggle on the last one
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }


    // console.log(idx)
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}



function updateBigCup() {
    //get the amount of the full glasses
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // console.log(fullCups)

    //get the total cups
    // do that or 
    // const totalCups = document.querySelectorAll('.cup-small').length
    const totalCups = smallCups.length
    // console.log(totalCups)

    // hide the percentage if the full cups are 0
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups == totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        // 250 is the ml multiplied by 8 cups makes to 2l
        liters.innerText = `${2 - (250 * fullCups / 1000)} L`
    }
}