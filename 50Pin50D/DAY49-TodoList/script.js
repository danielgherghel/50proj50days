// step 1 bring in all the elements we need

const form = document.getElementById('form')
const inputEL = document.getElementById('input')
const todosUL = document.getElementById('todos')


// stap 5 - check the localStorage
const todos = JSON.parse(localStorage.getItem('todos'))

// 5.1 if there are todos in the storage
if(todos){
    todos.forEach(todo => addTodo(todo))
}

// stap 2 - add an event listener on the form

form.addEventListener('submit', (e) =>{
    // prevent the form default
    e.preventDefault()


    // call a function addTodo()
    addTodo()
})


// step 3 create the function
function addTodo(todo){
    let todoText = inputEL.value

    // pass the parameter
    if(todo){
        todoText = todo.text
    }



    // construct the li
    // step 4
    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText


        // add an event listener to the todoEl
        todoEl.addEventListener('click', () => { todoEl.classList.toggle('completed')
        updateLS()
    })

        // add another event listener on the right click

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()

        })

        todosUL.appendChild(todoEl)
        inputEL.value = ''

        // step 6 - update LS (Local Storage)

        updateLS()
    }

    // console.log(todoText)
}


// use the browser api

// localStorage.setItem('name'. JSON.stringify(obj))
// JSON.parse(localStorage.getItem(obj))

// // storing the data in sessionStorage
// sessionStorage.setItem('token','testTokenBlaBlaBla')

// // retrieve data from sessionStorage
// const token = sessionStorage.getItem('token')
// console.log(token)


// step 7 - create the update Local Storage function
// were doing a function that will take all the li items and put them into localStorage

function updateLS(){
    todosEl = document.querySelectorAll('li')

    // intialize an todos array
    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })


    localStorage.setItem('todos', JSON.stringify(todos))

}
