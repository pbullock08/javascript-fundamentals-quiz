//add eventlistener to start quiz and timer while hiding first question
var startQuiz = document.querySelector(".start-quiz");
startQuiz.addEventListener("click", setTime);

var timeEl = document.querySelector("#timer.card");
var timeLeft = 75;

var quiz = document.querySelector(".quiz");

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

    quiz.setAttribute ("style", "display:block");
};

var quizKey = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. strings", 
        choice2: "2. booleans", 
        choice3: "3. alerts", 
        choice4: "4. numbers",
        answer: "alerts",
    },
        
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choice1: "1. quotes", 
        choice2: "2. curly brackets", 
        choice3: "3. parenthesis", 
        choice4: "4. square brackets",
        answer: "curly brackets",
    },
        
    {
        question: "Arrays in JavaScript can be used to store ________.",
        choice1: "1. numbers and strings", 
        choice2: "2. other arrays", 
        choice3: "3. booleans", 
        choice4: "4. all f the above",
        answer: "all of the above",
    },
        
    {
        question: "String values must be enclosed within ________ when being assigned to values.",
        choice1: "1. commas", 
        choice2: "2. curly brackets", 
        choice3: "3. quotes", 
        choice4: "4. parenthesis",
        answer: "quotes",
    },
        
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript", 
        choice2: "2. terminal/bash", 
        choice3: "3. for loops", 
        choice4: "4. console log",
        answer: "console log",
    }
];

var questions = document.querySelector(".question");
var option1 = document.querySelector(".choice1");
var option2 = document.querySelector(".choice2");
var option3 = document.querySelector(".choice3");
var option4 = document.querySelector(".choice4");

var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

option3.addEventListener("click", correct1);
function correct1() {
    // correct.setAttribute("style", "display:block");

    questions.textContent = quizKey[1].question;
    option1.textContent = quizKey[1].choice1;
    option2.textContent = quizKey[1].choice2;
    option3.textContent = quizKey[1].choice3;
    option4.textContent = quizKey[1].choice4;

    option1.className = "choice11"
    option2.className = "choice21"
    option3.className = "choice31"
    option4.className = "choice41"
}

option1.addEventListener("click", wrong1);
option2.addEventListener("click", wrong1);
option4.addEventListener("click", wrong1);

function wrong1() {
    //wrong.setAttribute("style", "display:block");
    
    questions.textContent = quizKey[1].question;
    option1.textContent = quizKey[1].choice1;
    option2.textContent = quizKey[1].choice2;
    option3.textContent = quizKey[1].choice3;
    option4.textContent = quizKey[1].choice4;

    option1.className = "choice11"
    option2.className = "choice21"
    option3.className = "choice31"
    option4.className = "choice41"

    timeLeft -= 10;
}

var option11 = document.querySelector(".choice11")
var option21 = document.querySelector(".choice21")
var option31 = document.querySelector(".choice31")
var option41 = document.querySelector(".choice41")

option21.addEventListener("click", correct2);
function correct2() {
    // correct.setAttribute("style", "display:block");
    alert ("clicked");
     
    questions.textContent = quizKey[2].question;
    option11.textContent = quizKey[2].choice1;
    option12.textContent = quizKey[2].choice2;
    option13.textContent = quizKey[2].choice3;
    option14.textContent = quizKey[2].choice4;

    option11.className = "choice12"
    option21.className = "choice22"
    option31.className = "choice32"
    option41.className = "choice42"
}

option11.addEventListener("click", wrong2);
option31.addEventListener("click", wrong2);
option41.addEventListener("click", wrong2);

function wrong2() {
    alert ("clicked");
    //wrong.setAttribute("style", "display:block");
    
    var questionIndex = 2;
     
    questions.textContent = quizKey[2].question;
    option11.textContent = quizKey[2].choice1;
    option21.textContent = quizKey[2].choice2;
    option31.textContent = quizKey[2].choice3;
    option41.textContent = quizKey[2].choice4;

    option11.className = "choice12"
    option21.className = "choice22"
    option31.className = "choice32"
    option41.className = "choice42"

    timeLeft -= 10;
}


//add additional question and answers 
// var boxEl = document.querySelector("#choices");

// var quizKey = [
//     {
//         question: "Commonly used data types DO NOT include:",
//         choice1: "1. strings", 
//         choice2: "2. booleans", 
//         choice3: "3. alerts", 
//         choice4: "4. numbers",
//         answer: "alerts",
//     },
    
//     {
//         question: "The condition in an if/else statement is enclosed with ________.",
//         choice1: "1. quotes", 
//         choice2: "2. curly brackets", 
//         choice3: "3. parenthesis", 
//         choice4: "4. square brackets",
//         answer: "curly brackets",
//     },
    
//     {
//         question: "Arrays in JavaScript can be used to store ________.",
//         choice1: "1. numbers and strings", 
//         choice2: "2. other arrays", 
//         choice3: "3. booleans", 
//         choice4: "4. all f the above",
//         answer: "all of the above",
//     },
    
//     {
//         question: "String values must be enclosed within ________ when being assigned to values.",
//         choice1: "1. commas", 
//         choice2: "2. curly brackets", 
//         choice3: "3. quotes", 
//         choice4: "4. parenthesis",
//         answer: "quotes",
//     },
    
//     {
//         question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//         choice1: "1. JavaScript", 
//         choice2: "2. terminal/bash", 
//         choice3: "3. for loops", 
//         choice4: "4. console log",
//         answer: "console log",
//     }
// ];

// var questionIndex = 1;

// boxEl.addEventListener("click", switchContent);

// function switchContent() {
//     var questions = document.querySelector(".question");
//     var option1 = document.querySelector("#choice1");
//     var option2 = document.querySelector("#choice2");
//     var option3 = document.querySelector("#choice3");
//     var option4 = document.querySelector("#choice4");
        
//     questions.textContent = quizKey[questionIndex].question;
//     option1.textContent = quizKey[questionIndex].choice1;
//     option2.textContent = quizKey[questionIndex].choice2;
//     option3.textContent = quizKey[questionIndex].choice3;
//     option4.textContent = quizKey[questionIndex].choice4;
//     questionIndex++;
// }

// choices.addEventListener("click", selectAnswer);

// function selectAnswer() {
//     if (choice1.clicked == true) {
//         alert("Hello World!")
//     }
// }

// var question = document.querySelector(".question-and-answers");

// question.addEventListener("click", changeQuestion);

// function changeQuestion() {
//     question.children[0].textContent = "The condition in an if/else statement is enclosed with ________.";
//     question.children[1].children[0].textContent = "quotes";
//     question.children[1].children[1].textContent = "curly brackets";
//     question.children[1].children[2].textContent = "parenthesis";
//     question.children[1].children[3].textContent = "square brackets";
// }


//create answer key 

//for last question whether wrong or right when you click on an answer it stops time and then logs that time on page with input 

//log score to local storage after last question or if time = 0

//display local storage of high scores in order of  
