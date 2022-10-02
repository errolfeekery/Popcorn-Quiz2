const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('question')
const answerButtomsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame () {
    console.log('start')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion ()
}
function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        answerButtomsElement.appendChild(button)
    })
}

function giveAnswer () {

}

const questions = [ 
    {
    question: "The code in The Martrix comes from what food recipes?",
    answers: [
        {text: "Sushi recipes", isCorrect: true},
        {text: "Dumpling recipes", isCorrect: false},
        {text: "Stir-fry recipes", isCorrect: false},
        {text: "Pad thai recpies", isCorrect: false}
        ]
    }
]