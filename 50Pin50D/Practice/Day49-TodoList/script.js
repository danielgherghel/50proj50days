// step 1 bring in all the elements

const form = document.getElementById('form')
const inputE = document.getElementById('input')
const todosE = document.getElementById('todos')


// step 5  - store into the localStorage
const tasks = JSON.parse(localStorage.getItem('todos'))

// 5.1 - check if there are todos in the storage

if(tasks){
    tasks.forEach(task => addTasks(task))
}





// step 2 add an event listener to the form

form.addEventListener('submit', (e) => {
    // prevent the default action
    e.preventDefault()

    // call a todo function

    addTasks()
})


// step 3 - create the addTasks

function addTasks(param1){
    let taskText = inputE.value

    // console.log(taskText)

    // pass the parameter
    if(param1){
        taskText = param1.text
    }

  
// step 4 construct the li

    if(taskText){
        const taskEl = document.createElement('li')
        if(param1 && param1.done){
            taskEl.classList.add('done')
        }

        taskEl.innerText = taskText

        taskEl.addEventListener('click', () => {
            taskEl.classList.toggle('done')
            updateStorage()
        })



        taskEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            taskEl.remove()
            updateStorage()
        })

        // step 4.1 append the child
        todosE.appendChild(taskEl)
        inputE.value = ''

        updateStorage()
    }


}


function updateStorage(){
    tasksEl = document.querySelectorAll('li')

    // initialize an todos array
    const tasks = []

    tasksEl.forEach(taskEl => {
        tasks.push({
            customtext: taskEl.innerText,
            done: taskEl.classList.contains('done')
        })
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}