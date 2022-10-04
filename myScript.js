var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var submitButton = document.getElementById('submit')

var myQuestions = [
    {
    question: "The code in The Martrix comes from what food recipes?",
    answers: {
        A: " Sushi recipes", 
        B: " Dumpling recipes",
        C: " Stir-fry recipes", 
        D: " Pad thai recpies", 
    },

    correctAnswer: 'A'

},
{
    question: "Where were The Lord of the Rings movies filmed?",
    answers: {
        
        A: " Ireland",
        B: " Iceland",
        C: " New Zealand", 
        D: " Australia", 
    },

    correctAnswer: 'C'

},
{
    question: "If you were to watch the Marvel movies in chronological order, which movie would you watch first?",
    answers: {
        A: " Iron man", 
        B: " Captain America: The First Avenger",
        C: " Doctor Strange",
        D: " Thor",
    },

    correctAnswer: 'B'
},
{
    question: "Which movie is this quote from: 'Here's looking at you kid'",
    answers:  {
        A: " Breakfast at Tiffany's",
        B: " Citizen Kane", 
        C: " Casablanca", 
        D: " Notorious", 
    },

    correctAnswer: 'C'
    
},
{
    question: "Which famous line from Jaws was ad-libbed?",
    answers:  {
        A: "'I use to hate the water'", 
        B: "'Your gonna need a bigger boat'",
        C: "'All this machine does is swim, and eat, and make little sharks'", 
    }, 

    correctAnswer: 'B'
    }
    
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++) {

            answers = [];

            for(letter in questions[i].answers) {

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + questions[i].answers[letter]
                    +'</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('')
    }


    showQuestions(questions, quizContainer);

    function showResults(questions, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++) {

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value

            if(userAnswer===questions[i].correctAnswer) {

                numCorrect++

                answerContainers[i].style.color = 'lightgreen';
            }

            else {

                answerContainers[i].style.color = 'red'
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {

        showResults(questions, quizContainer, resultsContainer)
    }

}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)
