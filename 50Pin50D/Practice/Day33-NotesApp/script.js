const addButton = document.getElementById('push1')

const notesT = JSON.parse(localStorage.getItem('notesT'))

if(notesT){
    notesT.forEach(note => addNote(note))
}


addButton.addEventListener('click', ()=> addNote(""))

function addNote(text = ""){

    const item = document.createElement('div')
    item.classList.add('item')

    item.innerHTML= `
    
    <div class="entry">
        <div class="utensil">
            <button class="revise"><i class="fas fa-edit"></i></button>
            <button class="erase"><i class="fas fa-trash-alt"></i></button>
        </div>
    
        <div class="master ${text ? "" : "invisible"}"></div>
        <textarea class="${text ? "invisible" : "" }"></textarea>
    
    </div>
    `

    const editButton = item.querySelector('.revise')
    const eraseButton = item.querySelector('.erase')
    const master = item.querySelector('.master')
    const textArea = item.querySelector('textarea')

    textArea.value = text
    master.innerHTML = marked(text)

    eraseButton.addEventListener('click', ()=>{
        item.remove()
        updateLocalStorage()
    })

    editButton.addEventListener('click', () =>{
        master.classList.toggle('invisible')
        textArea.classList.toggle('invisible')
    })


    textArea.addEventListener('input', (e)=>{
        const { value } = e.target
        master.innerHTML = marked(value)
        updateLocalStorage()
    })


    document.body.appendChild(item)

}


function updateLocalStorage(){
    const notesText = document.querySelectorAll('textarea')

    const notesT = []

    notesText.forEach(note => notesT.push(note.value))
    
    localStorage.setItem('notesT', JSON.stringify(notesT))
}