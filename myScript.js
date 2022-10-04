var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var submitButton = document.getElementById('submit')

var myQuestions = [
    {
    question: "The code in The Martrix comes from what food recipes?",
    answers: {
        a: "Sushi recipes", 
        b: "Dumpling recipes",
        c: "Stir-fry recipes", 
        d: "Pad thai recpies", 
    },

    correctAnswer: 'b'

},
{
    question: "Where were The Lord of the Rings movies filmed?",
    answers: {
        a: "Ireland",
        b: "Iceland",
        c: "New Zealand", 
        d: "Australia", 
    },

    correctAnswer: 'c'

},
{
    question: "If you were to watch the Marvel movies in chronological order, which movie would you watch first?",
    answers: {
        a: "Iron man", 
        b: "Captain America: The First Avenger",
        c: "Doctor Strange",
        d: "Thor",
    },

    correctAnswer: 'b'
},
{
    question: "Which movie is this quote from: 'Here's looking at you kid'",
    answers:  {
        a: "Breakfast at Tiffany's",
        b: "Citizen Kane", 
        c: "Casablanca", 
        d: "Notorious", 
    },

    correctAnswer: 'c'
    
},
{
    question: "Which famous line from Jaws was ad-libbed?",
    answers:  {
        a: "'I use to hate the water'", 
        b: "'Your gonna need a bigger boat'",
        c: "'All this machine does is swim, and eat, and make little sharks'", 
        d: "'You know, a thing about a shark, hes got lifeless eyes. Black eyes, like a dolls eyes'", 
    }, 

    correctAnswer: 'b'
    }
    
];

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)


function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = []
        var answers

        for(var i=0; i<questions.length; i++) {

            answers = []

            for(letter in questions[i].answers) {

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    +'</label>'
                );
            }

            output.push(
                '<div class="question' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('')
    }


    showQuestions(questions, quizContainer)

    function showResults(questions, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answers')

        var userAnswer = ''
        var numCorrect = 0

        for(var i=0; i<questions.length; i++) {

            userAnswer = (answerContainers[i].querySelectorAll('input[name=question'+i+']:checked')||{}).value

            if(userAnswer===questions[i].correctAnswer) {

                numCorrect++

                answerContainers[i].style.color = 'lightgreen'
            }

            else {

                answerContainers[i].style.color = 'red'
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {

        showResults(questions, quizContainer, resultsContainer)
    }

}
