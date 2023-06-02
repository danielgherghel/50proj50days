const btn = document.getElementById('btn')
const boxes = document.getElementById('boxes')



btn.addEventListener('click', ()=>{
    boxes.classList.toggle('big')
})

function splitBoxes(){

    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            const box = document.createElement('div')
            console.log(box)
            box.classList.add('box')

            box.style.backgroundPosition = `${-j * 170}px ${-i * 60}px`

            boxes.appendChild(box)
        }
    }

}


splitBoxes()