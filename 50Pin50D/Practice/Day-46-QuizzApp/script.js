// 1
const qustD = [
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        d: "Rome",
        e: "Ankara",
        correct: "a"
    },
    {
        question: "Which planet is known as the 'Red Planet?'",
        a: "Venus",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        e: "Pluto",
        correct: "c"
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        a: "Germany",
        b: "Brazil",
        c: "Spain",
        d: "France",
        e: "Ghana",
        correct: "d"
    },
    {
        question: "What is the largest ocean in the world?",
        a: "Southern Ocean",
        b: "Arctic Ocean",
        c: "Atlantic Ocean",
        d: "Indian Ocean",
        e: "Pacific Ocean",
        correct: "e"
    },
    {
        question: "What is the best area in Europe?",
        a: "France",
        b: "Spain",
        c: "Germany",
        d: "Balkans",
        e: "Uk",
        correct: "d"
    }
]


// 2

const quest = document.getElementById('quest')
const selectionEl = document.querySelectorAll('.selection')
const questionEl = document.getElementById('querry')
const sect_a = document.getElementById('sect_a')
const sect_b = document.getElementById('sect_b')
const sect_c = document.getElementById('sect_c')
const sect_d = document.getElementById('sect_d')
const sect_e = document.getElementById('sect_e')
const sendBtn = document.getElementById('btn-submit')

// 3

let activeQuiz = 0

let score = 0


getData()

// 4

function getData() {

    defaultSelection()

    const updatedQuizData = qustD[activeQuiz]

    questionEl.innerText = updatedQuizData.question
    sect_a.innerText = updatedQuizData.a
    sect_b.innerText = updatedQuizData.b
    sect_c.innerText = updatedQuizData.c
    sect_d.innerText = updatedQuizData.d
    sect_e.innerText = updatedQuizData.e

}

function defaultSelection(){
    selectionEl.forEach(selectionEl => selectionEl.checked = false)
}


5

function getAnswer(){

    let answer

    selectionEl.forEach(selectionEl => {
        if(selectionEl.checked){
            answer = selectionEl.id
        }
    })
    return answer

}




// 6

sendBtn.addEventListener('click', ()=> {

    const answer = getAnswer()



    if(answer) {
        if(answer === qustD[activeQuiz].correct) {
            score++
        }

        activeQuiz++

        console.log(answer)

        if(activeQuiz < qustD.length){
            getData()
        } else {
            quest.innerHTML = `
                <h2> You answered ${score}
                /${qustD.length} questions right </h2>

                <button onclick="location.reload()">Reload</button>   
            `
        }
    }
})
