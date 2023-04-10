//add eventlistener to start quiz and timer while hiding first question
var startQuiz = document.querySelector(".start-quiz");
startQuiz.addEventListener("click", setTime);

var timeEl = document.querySelector("#timer.card");
var timeLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            //display high score log 
        }

    }, 1000); 
}

//unhide first question 

//add additional question and answers 

// var question = document.querySelector(".question-and-answers");

// question.addEventListener("click", changeQuestion);

// function changeQuestion() {
//     question.children[0].textContent = "The condition in an if/else statement is enclosed with ________.";
//     question.children[1].children[0].textContent = "quotes";
//     question.children[1].children[1].textContent = "curly brackets";
//     question.children[1].children[2].textContent = "parenthesis";
//     question.children[1].children[3].textContent = "square brackets";
// }

var questions = document.createElement("p");
var optionsEl = document.createElement("ol");
var options = document.createElement("li");

var quizKey = [
    {
        question: "Commonly used data types DO NOT include:",
        options: {
            1: "strings", 
            2: "booleans", 
            3: "alerts", 
            4: "numbers"
        },
        answer: "alerts"
    },

    {
        question: "The condition in an if/else statement is enclosed with ________.",
        options: {
            1: "quotes", 
            2: "curly brackets", 
            3: "parenthesis", 
            4: "square brackets"
        },
        answer: "curly brackets"
    },

    {
        question: "Arrays in JavaScript can be used to store ________.",
        options: {
            1: "numbers and strings", 
            2: "other arrays", 
            3: "booleans", 
            4: "all of the above"
        },
        answer: "all of the above"
    },

    {
        question: "String values must be enclosed within ________ when being assigned to values.",
        options: {
            1: "commas", 
            2: "curly brackets", 
            3: "quotes", 
            4: "parenthesis"
        },
        answer: "quotes"
    },

    {
        question: "A very useful tool used during development and debuggin for printing content to the debugger is:",
        options: {
            1: "JavaScript", 
            2: "terminal/bash", 
            3: "for loops", 
            4: "console log"
        },
        answer: "console log"
    },
]

for (var i=0; i < quizKey.length; i++) {
    questions.textContent = quizKey[i].question;
    document.body.appendChild(questions);
    options
    }




//create answer key 

//for answer key 
//if a1 === && a2 === {
    //correct 
    // move to next question 
//} else {
    //wrong 
    //move to next question
    //timeLeft = timeLeft - 10
//}

//for last question whether wrong or right when you click on an answer it stops time and then logs that time on page with input 

//log score to local storage after last question or if time = 0

//display local storage of high scores in order of  




