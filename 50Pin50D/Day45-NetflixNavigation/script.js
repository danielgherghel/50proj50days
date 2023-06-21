// step 1 bring in the elements
const open_btn = document.querySelector('.open-btn')
const closed_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

// step 2 add event listener on the open button
open_btn.addEventListener('click', () => {
    // step 2.1 add a for each button so when we click to add the .visible class
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

// step 3 make the event listener on the closed button
closed_btn.addEventListener('click', () => {
    // step 3.1 add a for each button where you remove the class .visible
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

