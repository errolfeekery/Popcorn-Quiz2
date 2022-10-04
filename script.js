const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('question')
/*
const nextButton = document.getElementById('next')
const btnElement1 = document.getElementById('btn1')
const btnElement2 = document.getElementById('btn2')
const btnElement3 = document.getElementById('btn3')
const btnElement4 = document.getElementById('btn4')
*/

const choices = Array.from(document.querySelectorAll('.answer-buttons-text'))
console.log(choices)


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++ 
    setNextQuestion () 
})

let shuffledQuestions, currentQuestionIndex

function startGame () {
    console.log('start')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion ()

}

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
    reset ()
}


function showQuestion (question) {
    questionElement.innerText = question.question
      
        question.answers.forEach(answer => {


        /*
        btnElement1.innerText = question.answers[0].text
        btnElement2.innerText = question.answers[1].text
        btnElement3.innerText = question.answers[2].text
        btnElement4.innerText = question.answers[3].text
        */
/*
let newText =""

for (const x of choices) {
    answers
}

        if(btnElement1.isCorrect) {
            btnElement1.dataset.isCorrect = answer.isCorrect
        }

        if(btnElement2.isCorrect) {
            btnElement2.dataset.isCorrect = answer.isCorrect
        }

        if(btnElement2.isCorrect) {
            btnElement2.dataset.isCorrect = answer.isCorrect
        }

        if(btnElement2.isCorrect) {
            btnElement2.dataset.isCorrect = answer.isCorrect
        }
      }
    )
    
        btnElement1.addEventListener('click', giveAnswer)
        btnElement2.addEventListener('click', giveAnswer)
        btnElement3.addEventListener('click', giveAnswer)
        btnElement4.addEventListener('click', giveAnswer)
    }

    function giveAnswer(e) {
       const selectedButton = e.target
       const correct = selectedButton.dataset.isCorrect
       if (correct == true) {
        btnElement1.style.color = "green"
        btnElement2.style.color = "green"
        btnElement3.style.color = "green"
        btnElement4.style.color = "green"
       }
       if (shuffledQuestions.length > currentQuestionIndex + 1) {
        startButton.innerText = "Restart"
       }
    }
*/

const questions = [ 
    {
    question: "The code in The Martrix comes from what food recipes?",
    answers: [
        {text: "Sushi recipes", isCorrect: true},
        {text: "Dumpling recipes", isCorrect: false},
        {text: "Stir-fry recipes", isCorrect: false},
        {text: "Pad thai recpies", isCorrect: false}
        ]
    },
    {
    question: "Where were The Lord of the Rings movies filmed?",
    answers: [
        {text: "Ireland", isCorrect: false},
        {text: "Iceland", isCorrect: false},
        {text: "New Zealand", isCorrect: true},
        {text: "Australia", isCorrect: false}
        ]
    },
    {
    question: "If you were to watch the Marvel movies in chronological order, which movie would you watch first?",
    answers: [
        {text: "Iron man", isCorrect: false},
        {text: "Captain America: The First Avenger", isCorrect: true},
        {text: "Doctor Strange", isCorrect: false},
        {text: "Thor", isCorrect: false}
        ]
    },
    {
    question: "Which movie is this quote from: 'Here's looking at you kid'",
    answers:  [
        {text: "Breakfast at Tiffany's", isCorrect: false},
        {text: "Citizen Kane", isCorrect: false},
        {text: "Casablanca", isCorrect: true},
        {text: "Notorious", isCorrect: false}
    ]  
    },
    {
    question: "Which famous line from Jaws was ad-libbed?",
    answers:  [
        {text: "'I use to hate the water'", isCorrect: false},
        {text: "'Your gonna need a bigger boat'", isCorrect: true},
        {text: "'All this machine does is swim, and eat, and make little sharks'", isCorrect: false},
        {text: "'You know, a thing about a shark, hes got lifeless eyes. Black eyes, like a dolls eyes'", isCorrect: false} 
    ]  
    },
    {
    question: "Who played Wendy Torrence in The Shining?",
    answers: [
        {text: "Cher", isCorrect: false},
        {text: "Sissy Spacek", isCorrect: false},
        {text: "Shelley Duvall", isCorrect: true},
        {text: "Linda Ronstadt", isCorrect: false}
    ]
    }
]

    /*
    const choices = Array.from(document.querySelectorAll('.answer-buttons'))

    console.log(choices)
    */
    /*
        btnElement1.innerText = question.answers[0].text
        btnElement2.innerText = question.answers[1].text
        btnElement3.innerText = question.answers[2].text
        btnElement4.innerText = question.answers[3].text

        btnElement1.value = question.answers[0].isCorrect
        btnElement2.value = question.answers[1].isCorrect
        btnElement3.value = question.answers[2].isCorrect
        btnElement4.value = question.answers[3].isCorrect
    */
    /*    

    var selected = ""

    btnElement1.addEventListener('click', () => {
        selected = btnElement1.value
        if (selected == true) {
            btnElement1.style.color = "green"
        }
    })

    btnElement2.addEventListener('click', () => {
        selected = btnElement2.value
        if (selected == true) {
            btnElement2.style.color = "green"
        }
    })

    btnElement3.addEventListener('click', () => {
        selected = btnElement3.value
        if (selected == true) {
            btnElement3.style.color = "green"
        }
    })

    btnElement4.addEventListener('click', () => {
        selected = btnElement4.value
        if (selected == true) {
            btnElement4.style.color = "green"
        }
    })

    console.log(selected)
*/

/*
question.answers.forEach(answer => {
    const p = document.createElement('p')
    p.innerText = answer.text
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = setNextChoices['p' + 'number']
    }
  */  
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