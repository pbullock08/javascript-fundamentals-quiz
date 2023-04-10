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

var question = document.querySelector(".question-and-answers");

question.addEventListener("click", changeQuestion);

function changeQuestion() {
    question.children[0].textContent = "The condition in an if/else statement is enclosed with ________.";
    question.children[1].children[0].textContent = "quotes";
    question.children[1].children[1].textContent = "curly brackets";
    question.children[1].children[2].textContent = "parenthesis";
    question.children[1].children[3].textContent = "square brackets";
}

var question1 = [
    {
        name: "Answer 1"
    },
    {
        name: "Answer 2"
    },
    {
        name: "Answer 3"
    },
    {
        name: "Answer 4"
    },
];

for (var i=0; i < question1.length; i++) {
    console.log(question1[i]);
}



//create answer key 

//for answer key 
//if a1 === && a2 === {
    //correct 
    // move to next question 
//} else {
    //wrong 
    //move to next question
    //subtract 10 seconds from time 
//}

//log score to local storage after last question or if time = 0

//display local storage of high scores in order of  




