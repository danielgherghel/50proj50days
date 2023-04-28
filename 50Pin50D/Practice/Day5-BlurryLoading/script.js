const bgr = document.querySelector('.bgr')
const insertText = document.querySelector('.insert-text')


iterN = 0

let cicle = setInterval(blurF, 30)


function blurF() {
    iterN++

    if (iterN >= 100) {
        clearInterval(cicle)
    }

    insertText.innerText = `${iterN}%`
    insertText.style.opacity = scale(iterN, 0, 100, 1, 0)
    bgr.style.filter = `blur(${scale(iterN, 0, 100, 30, 0)}px)`

}


function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}