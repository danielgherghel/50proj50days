// bring in the elements
const exBtn = document.querySelector('.expandBtn')
const xBtn = document.querySelector('.xButton')
const navEl = document.querySelectorAll('.nav')


// create an event listener on the expand Button
exBtn.addEventListener('click', () => {
    // create a forEach button to add the active class
    navEl.forEach(nav_element => nav_element.classList.add('active'))
})

// create an event listener to the xButton
xBtn.addEventListener('click', () => {
    // create a forEach function to remove the active class
    navEl.forEach(nav_element => nav_element.classList.remove('active'))
})