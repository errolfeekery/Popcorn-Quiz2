const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame);

function startGame () {
    nextQuestion ()
}

function nextQuestion (questions) {
    questionElement.innerText = question.questions
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