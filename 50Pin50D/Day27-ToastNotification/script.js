const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

// array of random messages
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = [
    'success',
    'error',
    'info'
]

button.addEventListener('click', () => createNotification())

function createNotification(message=null, type= null){

    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomTypes())

    notif.innerText = message ? message: getRandomMessage()


    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)


}


function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}


function getRandomTypes(){
    return types[Math.floor(Math.random() * types.length)]
}