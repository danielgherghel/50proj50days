const password = document.getElementById('password')
const background = document.getElementById('background')



password.addEventListener('input', (e) =>{
    const input = e.target.value
    const length = input.length


    // we've set up the 20 as the blur value
    // console.log(20 -length *2)

    const blurValue = 20 - length * 2

    // if(length <= 3){
    //     background.style.filter = blur(20px)
    // }

    background.style.filter = `blur(${blurValue}px)`



})