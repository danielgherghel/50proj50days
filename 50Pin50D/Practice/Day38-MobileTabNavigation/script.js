const context = document.querySelectorAll('.section')
const lItems = document.querySelectorAll('nav ul li')


lItems.forEach((param1, param2) =>{
    param1.addEventListener('click', () =>{
        hideContent()
        hideItems()

        param1.classList.add('active')
        context[param2].classList.add('display')

    })
})


function hideContent(){
    context.forEach(item => item.classList.remove('display'))
}


function hideItems(){
    lItems.forEach(item => item.classList.remove('active'))
}