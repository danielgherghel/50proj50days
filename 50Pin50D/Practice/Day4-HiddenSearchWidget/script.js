const explore = document.querySelector('.explore')
const bttn = document.querySelector('.bttn')
const processing = document.querySelector('.processing')


bttn.addEventListener('click', () => {
    explore.classList.toggle('active')
    processing.focus()
})
