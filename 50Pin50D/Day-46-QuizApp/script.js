// step 1 create the arrays

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// step 2 - bring in everything we need
const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')



// step 3 need an index of the current questions
// we use let as it will be reassigned
let currentQuiz = 0

// step 3.1 - set the initial score to 0
let score = 0

// step 4 - we call and create a loadQuiz() function

loadQuiz()

function loadQuiz() {

    // 4.3 deselect answers by default
    deselectAnswers()

    // 4.1 get the current quiz data
    const currentQuizData = quizData[currentQuiz]

    // 4.2 get the question elements
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// 4.3.1 create the deselect function
function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}


// 5.1 create the function getSelected
function getSelected() {
    let answer

    // check which element is selected
    answerEl.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    // return the answer
    return answer
}


// 5 add an event listener on submit

submitBtn.addEventListener('click', () => {
    // get the answer
    const answer = getSelected()
    // console.log(answer)

    // 5.2 match the answer with the array's answer then increase the score 
    if(answer) {
        if( answer === quizData[currentQuiz].correct) {
            score++
        }

        // 5.3 move to the new quizz
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> You answered  ${score}
                /${quizData.length} questions correctly </h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})