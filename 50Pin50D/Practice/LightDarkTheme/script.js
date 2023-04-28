const switch1 = document.querySelector('.switch')

switch1.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light'
    }
})