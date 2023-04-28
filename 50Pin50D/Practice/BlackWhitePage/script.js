const toggle = document.querySelector('.toggle')


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})


const tgl = document.querySelector('.tgl')

tgl.addEventListener('click', (e) => {
    const cont = document.querySelector('.container')
    if (cont.classList.contains('black')) {
        cont.classList.remove('black')
        e.target.innerHTML = 'black'
    } else {
        cont.classList.add('black')
        e.target.innerHTML = ('light')
    }
})