const images = document.getElementById('images')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

const imgN = document.querySelectorAll('#images img')
// console.log(imgN)

let idx = 0

// let interval = setInterval(runF, 2000)

// function runF(){
//     idx++
//     slideImage()
// }


function slideImage(){
    if(idx > imgN.length -1){
        idx = 0
    } else if(idx < 0){
        idx = imgN.length -1
    }
    // console.log(idx)
    images.style.transform = `translateX(${-idx *800}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(runF, 2000)
}

leftButton.addEventListener('click', () =>{
    idx--
    slideImage()
    // resetInterval()
})

rightButton.addEventListener('click', () =>{
    idx++
    slideImage()
    // resetInterval()
})