const psw = document.getElementById('password')
const container = document.getElementById('backGr')


psw.addEventListener('input', (e) =>{
    const input = e.target.value
    const length = input.length

    const blurE = 16 - length * 2

    container.style.filter = `blur(${blurE}px)`



})