const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('question')
const choices = Array.from(document.querySelectorAll('.answer-buttons'))

console.log(choices)

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame () {
    console.log('start')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion ()
    setNextChoices()
}
function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const p = document.createElement('p')
        p.innerText = answer.text
        choices.forEach(choice => {
            const number = choice.dataset['number']
            choice.innerText = setNextChoices['p' + 'number']
        }
        
    )


/*
function setNextChoices (answers) {
    const number = choice.dataset['number']

}
*/
/*
   question.answers.forEach(answer => {
        const p = document.createElement('p')
        p.innerText = answer.text
        */
/*
choices.forEach(choice => {

    const number = choice.dataset['number']
    choice.innerText = showQuestion['choice' + 'number']
})
*/
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