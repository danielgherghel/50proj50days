const buttons = document.querySelectorAll('.circles')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        const x = e.clientX
        const y = e.clientY

        // console.log(x, y)

        const ButtonTop = e.target.offsetTop
        const ButtonLeft = e.target.offsetLeft

        const xIn = x - ButtonLeft
        const yIn = y - ButtonTop

        const icre = document.createElement('span')
        icre.classList.add('ef')
        icre.style.top = yIn + 'px'
        icre.style.left = xIn + 'px'

        this.appendChild(icre)

        setTimeout(() => icre.remove(), 500)
    })

})