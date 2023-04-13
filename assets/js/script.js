//add eventlistener to start quiz and timer
var startQuiz = document.querySelector(".start-quiz");
startQuiz.addEventListener("click", setTime);

var timeEl = document.querySelector("#timer");
var timeLeft = 75;
var timerInterval = 0;

var coverPage = document.querySelector("#cover-page");
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

var questionsEl = document.querySelector(".ask");
var option1 = document.querySelector(".choice1");
var option2 = document.querySelector(".choice2");
var option3 = document.querySelector(".choice3");
var option4 = document.querySelector(".choice4");

var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

//add additional question and answers to quiz
var boxEl = document.querySelector(".quiz");
var questionIndex = 0;

boxEl.addEventListener("click", switchContent);

function switchContent() {
    questionsEl.textContent = quizKey[questionIndex].question;
    option1.textContent = quizKey[questionIndex].choice1;
    option2.textContent = quizKey[questionIndex].choice2;
    option3.textContent = quizKey[questionIndex].choice3;
    option4.textContent = quizKey[questionIndex].choice4;
};

//assess user input for correct or wrong and log scores based on getting to the last question or timing out (time >= 0)
option1.addEventListener("click", select1);
function select1() {
    wrong.setAttribute("style", "display:block");
    correct.setAttribute("style", "display:none");
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
};

option2.addEventListener("click", select2);
function select2() {
    if (option2.textContent === "2. curly brackets") {
        correct.setAttribute("style", "display:block");
        wrong.setAttribute("style", "display:none");
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
        wrong.setAttribute("style", "display:block");
        correct.setAttribute("style", "display:none");
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
};

option3.addEventListener("click", select3);
function select3() {
    if (option3.textContent === "3. alerts" || option3.textContent === "3. quotes") {
        correct.setAttribute("style", "display:block");
        wrong.setAttribute("style", "display:none");
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
        wrong.setAttribute("style", "display:block");
        correct.setAttribute("style", "display:none");
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
};

option4.addEventListener("click", select4);
function select4() {
    if (option4.textContent === "4. all of the above" || option4.textContent === "4. console log") {
        correct.setAttribute("style", "display:block");
        wrong.setAttribute("style", "display:none");
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
        wrong.setAttribute("style", "display:block");
        correct.setAttribute("style", "display:none");
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
};

var highScore = document.querySelector(".high-score");
var finalScore = document.querySelector(".finalscore");

//log time finished/zeroed out on page
function logScore() {
    quiz.setAttribute ("style", "display:none");
    timeEl.textContent = "Time: " + timeLeft;
    finalScore.textContent = "Your final score is " + timeLeft +".";
    highScore.setAttribute ("style", "display:block");
};

var choices = document.querySelector("#choices");
var initialInput = document.querySelector("input");

choices.addEventListener("mouseover", hideFeedback);
initialInput.addEventListener("click", hideFeedback);

function hideFeedback() {
    correct.setAttribute("style", "display:none");
    wrong.setAttribute("style", "display:none");
};

var scoreArray = [];
var scoreDataEl = document.querySelector("#scoredata");

//log score to webpage
function displayScores() {
    for (var i=0; i < scoreArray.length; i++) {
        var score = scoreArray[i];

        var li = document.createElement("li");
        li.textContent = score.name + " - " + score.timeFinished;
        //li.setAttribute("data-index", i);

        scoreDataEl.appendChild(li);
    }
};
console.log(displayScores());

var scoreBankEl = document.querySelector("#score-bank");

//get score out of local strorage 
function renderScore() {
    highScore.setAttribute("style", "display:none");
    timeEl.setAttribute("style", "display:none");
    coverPage.setAttribute("style", "display:none");
    quiz.setAttribute("style", "display:none");
    correct.setAttribute("style", "display:none");
    wrong.setAttribute("style", "display:none");
    viewScores.setAttribute("style", "display:none");
    scoreBankEl.setAttribute("style", "display:block");

    var loggedScores = JSON.parse(localStorage.getItem("scoreArray"));
    
    if (loggedScores !== null) {
        scoreArray = loggedScores;
    } else {
        return;
    }

    displayScores();
}

console.log(displayScores());

var submit = document.querySelector(".submit");
var userScore = {
    name: initialInput.value,
    timeFinished: timeLeft
};

//once data is submitted it gets logged into local storage 
submit.addEventListener("click", function(event) {
    //event.preventDefault();
    highScore.innerHTML = "";

    if (userScore.name === "") {
        //alert("Initials field cannot be blank.");
    } else {
        scoreArray.push(userScore);
        localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
    }  

    renderScore();
    //logScore();
});

console.log(scoreArray);
console.log(displayScores());

//when you click go back it reloads the webpage 
var goBack = document.querySelector(".back");

goBack.addEventListener("click", function() {
    location.reload()
});

//when you click clear scores it clears scores from display and local storage
var clearScores = document.querySelector(".clear");

clearScores.addEventListener("click", function() {
    scoreDataEl.innerHTML="";
    localStorage.removeItem("local-userScore");
});

var viewScores = document.querySelector("a");

//when you click view scores you are taken to the highscores page 
viewScores.addEventListener("click", function() {
    renderScore();
    //logScores();
});