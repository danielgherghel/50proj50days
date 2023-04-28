const buttons = document.querySelectorAll('.effects')


buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop


        const effct = document.createElement('span')
        effct.classList.add('spef')
        effct.style.top = yInside + 'px'
        effct.style.left = xInside + 'px'


        this.appendChild(effct)

        setTimeout(() => effct.remove(), 500)

    })
})