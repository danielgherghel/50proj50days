const count = document.querySelectorAll('.count')


count.forEach(count => {
    count.innerText = '0'

    const updCount = () => {
        const target1 = +count.getAttribute('data-target')
        const x = +count.innerText

        const increm = target1 / 200

        if (x < target1) {
            count.innerText = `${Math.ceil(x + increm)}`
            setTimeout(updCount, 1)
        } else {
            count.innerText = target1
        }
    }

    updCount()


})