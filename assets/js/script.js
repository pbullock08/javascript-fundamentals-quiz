//add eventlistener to start quiz and timer while hiding first question
var startQuiz = document.querySelector(".start-quiz");
startQuiz.addEventListener("click", setTime);

var timeEl = document.querySelector("#timer.card");
var timeLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            //display high score log 
        }

    }, 1000); 

    var coverPage = document.querySelector("#cover-page");
    coverPage.innerHTML = "";

    var questions = document.querySelector(".quiz")
    questions.setAttribute ("style", "display:block")
};

//add additional question and answers 
var choices = document.querySelector("#choices");
var choice1 = document.querySelector("#choice1");
choices.addEventListener("click", selectAnswer);

function selectAnswer() {
    if (choice1.clicked == true) {
        alert("Hello World!")
    }
}

// var question = document.querySelector(".question-and-answers");

// question.addEventListener("click", changeQuestion);

// function changeQuestion() {
//     question.children[0].textContent = "The condition in an if/else statement is enclosed with ________.";
//     question.children[1].children[0].textContent = "quotes";
//     question.children[1].children[1].textContent = "curly brackets";
//     question.children[1].children[2].textContent = "parenthesis";
//     question.children[1].children[3].textContent = "square brackets";
// }



// var quizKey = [
//     {
//         question: "Commonly used data types DO NOT include:",
//         choice1: "strings", 
//         choice2: "booleans", 
//         choice3: "alerts", 
//         choice4: "numbers",
//         answer: "alerts",
//     },

//     {
//         question: "The condition in an if/else statement is enclosed with ________.",
//         choice1: "quotes", 
//         choice2: "curly brackets", 
//         choice3: "parenthesis", 
//         choice4: "square brackets",
//         answer: "curly brackets",
//     },

//     {
//         question: "Arrays in JavaScript can be used to store ________.",
//         choice1: "numbers and strings", 
//         choice2: "other arrays", 
//         choice3: "booleans", 
//         choice4: "all f the above",
//         answer: "all of the above",
//     },

//     {
//         question: "String values must be enclosed within ________ when being assigned to values.",
//         choice1: "commas", 
//         choice2: "curly brackets", 
//         choice3: "quotes", 
//         choice4: "parenthesis",
//         answer: "quotes",
//     },

//     {
//         question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//         choice1: "JavaScript", 
//         choice2: "terminal/bash", 
//         choice3: "for loops", 
//         choice4: "console log",
//         answer: "console log",
//     },
// ];

// var boxEl = document.querySelector("#content-box");
// boxEl.addEventListener("click", switchContent);

// function switchContent() {
//     boxEl.innerHTML = "";

//     var questions = document.createElement("h4");
//     var optionsEl = document.createElement("ol");
//     var option1 = document.createElement("li");
//     var option2 = document.createElement("li");
//     var option3 = document.createElement("li");
//     var option4 = document.createElement("li");
//     var questionIndex = 0;

//     questions.textContent = quizKey[questionIndex].question;
//     option1.textContent = quizKey[questionIndex].choice1;
//     option2.textContent = quizKey[questionIndex].choice2;
//     option3.textContent = quizKey[questionIndex].choice3;
//     option4.textContent = quizKey[questionIndex].choice4;

//     boxEl.appendChild(questions);
//     boxEl.appendChild(optionsEl);
//     boxEl.children[1].appendChild(option1);
//     boxEl.children[1].appendChild(option2);
//     boxEl.children[1].appendChild(option3);
//     boxEl.children[1].appendChild(option4);

//     console.log(quizKey[questionIndex]);
//     questionIndex++;
//     if(questionIndex >= quizKey.length) {
//         questionIndex = 0;
//     }
// };



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




