const fillcontent = document.querySelector('.fillcontent')
const voidcontent = document.querySelectorAll('.voidcont')

fillcontent.addEventListener('dragstart', dragS)
fillcontent.addEventListener('dragend', dragE)



for (const blank of voidcontent) {
    blank.addEventListener('dragover', dragO)
    blank.addEventListener('dragenter', dragE)
    blank.addEventListener('dragleave', dragL)
    blank.addEventListener('drop', dragD)
}




function dragS() {
    this.className += ' holdcontainer'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragE() {
    this.className = ' fillcontent'

}


function dragO(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' fillcontent'
}


function dragL() {
    this.className = 'voidcont'
}

function dragD() {
    this.className = 'voidcont'
    this.append(fillcontent)
}