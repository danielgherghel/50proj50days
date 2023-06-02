const boxes = document.getElementById('boxes')
const magicB = document.getElementById('btn')


magicB.addEventListener('click', ()=> {
    boxes.classList.toggle('big')
})

function createBoxes(){
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            const box = document.createElement('div')
            box.classList.add('box')

            // put some template literals to make them dynamic - using expressions
            box.style.backgroundPosition = `${-j * 125}px ${-i *125}px`

            // console.log(box)

            boxes.appendChild(box)
        }
    }
}


createBoxes()