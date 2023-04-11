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
var boxEl = document.querySelector(".quiz");

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
    
    for (var i = 0; i < quizKey; i++) {
        console.log(quizKey[i]);
    }
    
    var questionIndex = 1;

    boxEl.addEventListener("click", switchContent);
    function switchContent() {
        var questions = document.querySelector(".question");
        var option1 = document.querySelector("#choice1");
        var option2 = document.querySelector("#choice2");
        var option3 = document.querySelector("#choice3");
        var option4 = document.querySelector("#choice4");
        
        questions.textContent = quizKey[questionIndex].question;
        option1.textContent = quizKey[questionIndex].choice1;
        option2.textContent = quizKey[questionIndex].choice2;
        option3.textContent = quizKey[questionIndex].choice3;
        option4.textContent = quizKey[questionIndex].choice4;
        console.log(quizKey[questionIndex]);
        questionIndex++;
    }
        
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




