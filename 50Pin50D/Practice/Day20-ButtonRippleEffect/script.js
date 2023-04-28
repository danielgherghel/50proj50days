const bttns = document.querySelectorAll('.bttn')


bttns.forEach(button => {
    button.addEventListener('click', function (e) {

        const xLine = e.clientX
        const yLine = e.clientY

        console.log(xLine, yLine)

        // get the position of the button itself
        const bttnTop = e.target.offsetTop
        const bttnLeft = e.target.offsetLeft

        const xInterior = xLine - bttnLeft
        const yInterior = yLine - bttnTop


        const effect = document.createElement('span')
        effect.classList.add('effect')
        effect.style.top = yInterior + 'px'
        effect.style.left = xInterior + 'px'

        this.appendChild(effect)

        setTimeout(() => effect.remove(), 500)

    })

})