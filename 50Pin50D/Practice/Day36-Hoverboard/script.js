const main = document.getElementById('main')

const colorPallete = ['#AC513E','#1F5DB0', '#ACA0A0', '25D35A', '#E112B2', '#EFB606']

const DOTS = 841


for(i = 0; i<DOTS; i++){
    const dots = document.createElement('div')
    dots.classList.add('dots')

    dots.addEventListener('mouseover', () => assignColor(dots))
    dots.addEventListener('mouseleave', () => unassignColor(dots))

    main.appendChild(dots)

}

// add color input
const colorInput = document.getElementById('colorInput')
const addColorBtn = document.getElementById('addColorBtn')

addColorBtn.addEventListener('click', () =>{
    const newColor = colorInput.value
    colorPallete.push(newColor)
})



function assignColor(element){
    const color = getColor()
    element.style.background = color
    element.style.boxShaddow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function unassignColor(element){
    const color = getColor()
    element.style.background = '#626262'
}




function getColor(){
    return colorPallete[Math.floor(Math.random() * colorPallete.length)]
}