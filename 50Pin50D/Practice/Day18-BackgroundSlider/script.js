const body = document.body
const glides = document.querySelectorAll('.glide')
const ltBtn = document.getElementById('left')
const rtBtn = document.getElementById('right')

let selectedGlide = 0


rtBtn.addEventListener('click', () => {
    selectedGlide++

    if (selectedGlide > glides.length - 1) {
        selectedGlide = 0
    }

    setBackToBody()
    setSelectedGlide()

})

ltBtn.addEventListener('click', () => {
    selectedGlide--

    if (selectedGlide < 0) {
        selectedGlide = glides.length - 1
    }

    setBackToBody()
    setSelectedGlide()
})






setBackToBody()


function setBackToBody() {
    body.style.backgroundImage = glides[selectedGlide].style.backgroundImage
}


function setSelectedGlide() {
    glides.forEach((glide) => {
        glide.classList.remove('selected')
    })

    glides[selectedGlide].classList.add('selected')
}