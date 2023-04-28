const buttons = document.querySelectorAll('.ask-toggle')



buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('selected')
    })
})