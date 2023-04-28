const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const btnGenEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')



const randomFunc = {
    // use an object to give each function a key
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


clipboardEl.addEventListener('click', () => {
    // create a textarea
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){ return }

    textarea.value = password
    // append the text area to the body
    document.body.appendChild(textarea)
    // select what was appended 
    textarea.select()
    // use the exact command
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to the clipboard')

})

btnGenEl.addEventListener('click', (e) => {
    // add the length element and parse it to a number adding + in front of lengthEl.value
    const length = +lengthEl.value
    // console.log(typeof length)
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    // console.log(`${hasLower}, ${hasUpper}, ${hasNumber}, ${hasSymbol}`)

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)

})


function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''

    // give the count of how many are selected
    const typesCount = lower + upper + number + symbol
    // console.log(typesCount)

    // create an array of types
    // const typesArr = [{lower}, {upper}, {number}, {symbol}]
    // console.log(typesArr)

    // filter out the array so if we have the false value to not show
    // using a for each item to get rid of each element with 0= false value
    const typesArr =[{lower}, {upper}, {number}, {symbol}].filter(item=> Object.values(item)[0])
    // console.log(typesArr)

    // if nothing is checked we dont want to do anything

    if (typesCount === 0){
        return ''
    }

    // to create the password characters we create a for loop

    for(let i = 0; i < length; i+= typesCount){
        typesArr.forEach(type =>{
            // console.log(type) 
            const funcName = Object.keys(type)[0]
            // console.log(funcName)
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword

}


function  getRandomLower(){
    // see the asci code 97 is a and 122 is z
    // get a random number from 97 to 122 - this is for the lowercase letters
    return String.fromCharCode(Math.floor(Math.random() *26)+ 97)
}


function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}


function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    // return String.fromCharCode(Math.floor(Math.random() * 15) +33)
    // or can specify what symbols to be used
    const symbols = '!@#$%^&*()[]=<>,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

