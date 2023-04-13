//add eventlistener to start quiz and timer while hiding first question
var startQuiz = document.querySelector(".start-quiz");
startQuiz.addEventListener("click", setTime);

var timeEl = document.querySelector("#timer");
var timeLeft = 75;
var timerInterval = 0;

var quiz = document.querySelector(".quiz");

function setTime() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }, 1000); 

    var coverPage = document.querySelector("#cover-page");
    coverPage.innerHTML = "";

    quiz.setAttribute ("style", "display:block");
    switchContent();
};

var quizKey = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. strings", 
        choice2: "2. booleans", 
        choice3: "3. alerts", 
        choice4: "4. numbers",
        answer: "3. alerts",
    },
        
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choice1: "1. quotes", 
        choice2: "2. curly brackets", 
        choice3: "3. parenthesis", 
        choice4: "4. square brackets",
        answer: "2. curly brackets",
    },
        
    {
        question: "Arrays in JavaScript can be used to store ________.",
        choice1: "1. numbers and strings", 
        choice2: "2. other arrays", 
        choice3: "3. booleans", 
        choice4: "4. all of the above",
        answer: "4. all of the above",
    },
        
    {
        question: "String values must be enclosed within ________ when being assigned to values.",
        choice1: "1. commas", 
        choice2: "2. curly brackets", 
        choice3: "3. quotes", 
        choice4: "4. parenthesis",
        answer: "3. quotes",
    },
        
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript", 
        choice2: "2. terminal/bash", 
        choice3: "3. for loops", 
        choice4: "4. console log",
        answer: "4. console log",
    }
];

var questions = document.querySelector(".question");
var option1 = document.querySelector(".choice1");
var option2 = document.querySelector(".choice2");
var option3 = document.querySelector(".choice3");
var option4 = document.querySelector(".choice4");

var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

//add additional question and answers 
var boxEl = document.querySelector(".quiz");
var questionIndex = 0;

boxEl.addEventListener("click", switchContent);

function switchContent() {
    var questions = document.querySelector(".question");
    var option1 = document.querySelector(".choice1");
    var option2 = document.querySelector(".choice2");
    var option3 = document.querySelector(".choice3");
    var option4 = document.querySelector(".choice4");
        
    questions.textContent = quizKey[questionIndex].question;
    option1.textContent = quizKey[questionIndex].choice1;
    option2.textContent = quizKey[questionIndex].choice2;
    option3.textContent = quizKey[questionIndex].choice3;
    option4.textContent = quizKey[questionIndex].choice4;
}

option1.addEventListener("click", select1);
function select1() {
    alert ("clicked");
    wrong.setAttribute("style", "display:block");
    if (timeLeft >= 10) {
        timeLeft -= 10;
    } else {
        clearInterval(timerInterval);
        logScore();
    }
    questionIndex++;
    if (questionIndex >= quizKey.length) {
        clearInterval(timerInterval);
        logScore();
    }
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        logScore();
    }
}

option2.addEventListener("click", select2);
function select2() {
    if (option2.textContent === "2. curly brackets") {
        alert ("clicked");
        correct.setAttribute("style", "display:block");
        questionIndex++;
        if (questionIndex >= quizKey.length) {
            clearInterval(timerInterval);
            logScore();
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
        
    } else {
        alert ("clicked");
        wrong.setAttribute("style", "display:block");
        if (timeLeft >= 10) {
            timeLeft -= 10;
        } else {
            clearInterval(timerInterval);
            logScore();
        }
        questionIndex++;
        if (questionIndex >= quizKey.length) {
            clearInterval(timerInterval);
            logScore();
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }
}

option3.addEventListener("click", select3);
function select3() {
    if (option3.textContent === "3. alerts" || option3.textContent === "3. quotes") {
        alert ("clicked");
        correct.setAttribute("style", "display:block");
        questionIndex++;
        if (questionIndex >= quizKey.length) {
            clearInterval(timerInterval);
            logScore();
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
        
    } else {
        alert ("clicked");
        wrong.setAttribute("style", "display:block");
        if (timeLeft >= 10) {
            timeLeft -= 10;
        } else {
            clearInterval(timerInterval);
            logScore();
        }
        questionIndex++;
        if (questionIndex >= quizKey.length) {
            clearInterval(timerInterval);
            logScore();
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }
}

option4.addEventListener("click", select4);
function select4() {
    if (option4.textContent === "4. all of the above" || option4.textContent === "4. console log") {
        alert ("clicked");
        correct.setAttribute("style", "display:block");
        questionIndex++;
        if (questionIndex >= quizKey.length) {
            clearInterval(timerInterval);
            logScore();
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
        
    } else {
        alert ("clicked");
        wrong.setAttribute("style", "display:block");
        if (timeLeft >= 10) {
            timeLeft -= 10;
        } else {
            clearInterval(timerInterval);
            logScore();
        }
        questionIndex++;
        if (questionIndex >= quizKey.length) {
            clearInterval(timerInterval);
            logScore();
        }
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }
}

//log time finished/zeroed out on page

function logScore() {
    quiz.setAttribute ("style", "display:none");
    var finalScore = document.querySelector(".finalscore");
    timeEl.textContent = "Time: " + timeLeft;
    finalScore.textContent = "Your final score is " + timeLeft +".";
    var highScore = document.querySelector(".high-score");
    highScore.setAttribute ("style", "display:block");
}

//log score and initials to local storage
var initialInput = document.querySelector("#initals");
var scoreInput = timeLeft;
var submit = document.querySelector(".submit");
var userInitialsSpan = document.querySelector("user-initials");
//var userScoreSpan = 

function renderScore() {
    var initials = localStorage.getItem("local-initials");
    //var score = 

    //userInitialsSpan.textContent = initials;
    //userScoreSpan.textContent = 
}

submit.addEventListener("click", function(event) {
    //event.preventDefault
    var intials = document.querySelector("#initals").value;
    //var score = 

    if (initials --- "") {
        alert("Initials field cannot be blank.");
    } else {
        localStorage.setItem("local-initals", initials);
    }       
});

//display local storage of high scores
renderScore();
