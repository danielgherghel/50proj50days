// event bubbleling

// step 1 - bring in what you need

const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
// 2.5 target the rating-container to not trigger the bubbling into the panel
const ratingsContainer = document.querySelector('.ratings-container')

// step 2.4 initialize a variable initially with 'Satisfied'
let selectedRating = 'Satisfied'



// we could do a for each and add an event listener
// ratings.forEach(rating =>)

// step 2 - use event bubling
// using an e.target we can see on what element the click was on

// 2.5 changed from: panel.addEventListener('click', (e) =>{

ratingsContainer.addEventListener('click', (e) => {
    // console.log(e.target)
    // we got to target the images

    // step 2.1

    // if (e.target.classList.contains('rating')){
    //     console.log(e.target)
    // }

    if (e.target.parentNode.classList.contains('rating')){
        // console.log(e.target)
        // 2.2 create a function to remove the active clas in the first place
        removeActive()
        e.target.parentNode.classList.add('active')
        // 2.5 we're targeting the small as its the sibbling of this element and that's having the rating eventually
       // we're taking the html element of that sibbling
        selectedRating = e.target.nextElementSibling.innerHTML
        // console.log(selectedRating)
    }


})


// 2.4 add event listener on click so when its happening to change the html document

sendBtn.addEventListener("click", (e) => {
    const fontSize = "30px";
    panel.innerHTML = `

      <i class="fas fa-heart" style="width: 30px; height:30px; font-size: ${fontSize}"></i>
      <strong>Thank you! </strong>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p style="font-size: ${fontSize}">We'll use your feedback to improve our customer support</p>
    `
  })

// 2.3 creating the removeActive function

function removeActive(){
    // this is the standard way of doing
    // ratings.forEach(item =>{
    //     item.classList.remove('active')
    // })

    // can use a for loop as well
    for (let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}



