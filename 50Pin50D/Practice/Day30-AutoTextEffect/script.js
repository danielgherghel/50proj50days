const textE = document.getElementById('content1')
const speedE = document.getElementById('intensity')

const textDisplayed = "We love programming and learning new things!"

let indx = 1
let speed1 = 200 / speedE.value

writeT()

function writeT(){
    textE.innerText = textDisplayed.slice(0, indx)

    indx++

    if (indx > textDisplayed.length){
        indx = 1
    }

    setTimeout(writeT, speed1)

}


speedE.addEventListener('input', (e) =>{
    speed1 = 200 / e.target.value
})