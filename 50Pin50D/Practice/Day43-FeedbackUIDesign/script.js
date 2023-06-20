// step 1 bring in the elements

const reviews  = document.querySelectorAll('.review')
const btnE = document.querySelector('#fireup')
const mainE = document.querySelector('#main')
// 1.2 bring in the .rating-section container
const ratingSectio = document.querySelector('.rating-section')

// step 2.4 initialize a default for the review
let defaultReview = 'Happy'

// step 2 - use the event bubbling
ratingSectio.addEventListener('click', (e) => {
    // console.log(e.target)

    if(e.target.parentNode.classList.contains('review')){
        // console.log(e.target)
        // step 2.2 create a function to remove the active class in the first place
        deleteActive()
        e.target.parentNode.classList.add('active')
        defaultReview = e.target.nextElementSibling.innerHTML
        // console.log(defaultReview)
    }

})

// 2.4 add event listener on the button click

btnE.addEventListener('click', (e) => {

    mainE.innerHTML = `

        <i class="fas fa-heart" style="width: 30px font-size: 30px"></i>
        <strong> Thank you! </strong>
        <br>
        <strong>Feedback: ${defaultReview}</strong>
        <p style="font-size: 50px">We'll use your feedback today</p>
    
    `



})




// 2.3 creating the delete function

function deleteActive(){
    // reviews.forEach(item => {
    //     item.classList.remove('active')
    // })

    // using the loop function
    for (let i = 0; i < reviews.length; i++){
        reviews[i].classList.remove('active')
    }
}