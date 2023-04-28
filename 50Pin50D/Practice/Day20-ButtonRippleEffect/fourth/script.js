const buttons = document.querySelectorAll('.anim')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const effectJ = document.createElement('span')
        effectJ.classList.add('effect')
        effectJ.style.top = yInside + 'px'
        effectJ.style.left = xInside + 'px'

        this.appendChild(effectJ)

        setTimeout(() => effectJ.remove(), 500)

    })
})