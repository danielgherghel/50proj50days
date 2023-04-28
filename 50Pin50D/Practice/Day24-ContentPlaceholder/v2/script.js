// const header = document.getElementById('header')
// const title = document.getElementById('title')
// const except = document.getElementById('except')
// const profileImg = document.getElementById('profileImg')
// const name = document.getElementById('name')
// const date = document.getElementById('date')

// const animate = document.querySelectorAll('.animate')
// const animateText = document.querySelectorAll('.animate-text')


// setTimeout(getData, 1500)

// function getData(){
//     header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">'
//     title.innerHTML = 'Title of the card'
//     except.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo a consectetur quasi, in odit assumenda esse!'
//     profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/22.jpg" alt="">'
//     name.innerHTML = 'Jon Doe'
//     date.innerHTML = '04/02/23'

//     animate.forEach(b => b.classList.remove('animate'))
//     animateText.forEach(b => b.classList.remove('animate-text'))

// }


const header = document.querySelectorAll('.header')
const title = document.querySelectorAll('.title')
const nameT = document.querySelectorAll('.nameT')
const profImg = document.querySelectorAll('.profileImg')
const exceptT= document.querySelectorAll('.except')
const dateT = document.querySelectorAll('.date')

const animateEls = document.querySelectorAll('.animate')
const animateTels = document.querySelectorAll('.animate-text')

setTimeout(addE, 1500)



function addE(){
    header.forEach((e) =>{
        e.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">'
    })
    title.forEach((e) => {
        e.innerHTML = 'Fancy Cards'
    })
    nameT.forEach((e) =>{
        e.innerHTML = 'Daniel G'
    })
    exceptT.forEach((e) =>{
        e.innerHTML = 'Short description about the cards. Made them with sweat'
    })
    profImg.forEach((e) => {
        e.innerHTML = '<img src="https://randomuser.me/api/portraits/men/22.jpg" alt="">'
    })
    dateT.forEach((e) => {
        e.innerHTML = '04/02/23'
    })


    animateEls.forEach((e) =>{
        e.classList.remove('animate')
    })
    animateTels.forEach((e) =>{
        e.classList.remove('animate-text')
    })

}