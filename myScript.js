// telling javascript which HTML elements to use for quiz, submit and results

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// inputting questions into javascript in the form of an array of objects

// should ideally be held in an external JSON file

var myQuestions = [
    {
    question: "The code in The Martrix comes from what food recipes?",
    answers: {
        A: " Sushi recipes ", 
        B: " Dumpling recipes ",
        C: " Stir-fry recipes ", 
        D: " Pad thai recpies ", 
    },

    correctAnswer: 'A'

},
{
    question: "Where were The Lord of the Rings movies filmed?",
    answers: {
        
        A: " Ireland ",
        B: " Iceland ",
        C: " New Zealand ", 
        D: " Australia ", 
    },

    correctAnswer: 'C'

},
{
    question: "If you were to watch the Marvel movies in chronological order, which movie would you watch first?",
    answers: {
        A: "  Iron man ", 
        B: " Captain America: The First Avenger ",
        C: " Doctor Strange ",
        D: " Thor ",
    },

    correctAnswer: 'B'
},
{
    question: "Which movie is this quote from: 'Here's looking at you kid'",
    answers:  {
        A: " Breakfast at Tiffany's ",
        B: " Citizen Kane ", 
        C: " Casablanca ", 
        D: " Notorious ", 
    },

    correctAnswer: 'C'
    
},
{
    question: "Which famous line from Jaws was ad-libbed?",
    answers:  {
        A: " I use to hate the water", 
        B: " Your gonna need a bigger boat",
        C: " All this machine does is swim, and eat, and make little sharks", 
        D: " You know, a thing about a shark, hes got lifeless eyes"
    }, 

    correctAnswer: 'B'
    }
    
];

    //function to generate the quiz with parameters created in the file

    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    // showQuestions functions passing in questions as a pointer to myQuestions, and quizContainer

    function showQuestions(questions, quizContainer) {

        // variables to store output and choices

        var output = [];
        var answers;

        // for each question

        for(var i=0; i<questions.length; i++) {

            // reset the list of answers

            answers = [];

            // for in loop to get each available answer to the question based on ABCD

            for(letter in questions[i].answers) {

                /* answers now an array that includes question: 0, Value A, 'Sushi Recipes'... 
                + questions[i].answers[letter] gives the correct answer to a specific question
                i.e question 0, correct answer D */

                answers.push(
                    '<label class="d-flex">'
                        + '<input type="radio" class="col-md-6 float-right" name="question'+i+'" value="'+letter+'">'
                        + questions[i].answers[letter]
                    +'</label>'
                );
            }

            // add this question and its answers to the empty output array

            output.push(
                '<div class="question border border-primary rounded bg-white text-primary flex-nowrap p-3 text-center fs-5 m-3">' + questions[i].question + '</div>'
                + '<div class="answers fs-5 m-3 p-1 text-start">' + answers.join('') + '</div>'
            );
        }

        // merges output list onto one string

        quizContainer.innerHTML = output.join('')
    }

    // call function with parameters coming from generateQuiz

    showQuestions(questions, quizContainer);

    /* showResults function will find answer for each question, if correct respond,
    if incoorect, respond, and show the number of correct answers out of the total number of questions */

    function showResults(questions, quizContainer, resultsContainer) {

        // assemble answers from quiz (<div class="answers fs-5 m-3 p-1 text-start">' + answers.join('') + '</div>)

        var answerContainers = quizContainer.querySelectorAll('.answers');

        // to record user answers

        var userAnswer = '';
        var numCorrect = 0;

        // for every question

        for(var i=0; i<questions.length; i++) {

            // identify choice using the selector :checked and value property or if checkbox has been left empty

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value

            // if the answer given is right

            if(userAnswer===questions[i].correctAnswer) {

                // increment the amount of correct answers

                numCorrect++

                // then color the answers green else, color them red

                answerContainers[i].style.color = 'forestgreen';

            } else {

                answerContainers[i].style.color = 'red';        
            }

        }

        // display the results out of the number of questions

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

    }

    // on the user clicking submit, call showResults

    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {

        showResults(questions, quizContainer, resultsContainer)
    }

}

    // finally, generate the full quiz

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)
