var seconds = 120;
var index = 0;
var score = 0;

var timerEl = document.getElementById('time');

const openText = document.getElementById('starter');
const startButton = document.getElementById('btn-starter');
const questionContainerElement = document.getElementById('container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const restartButton = document.getElementById('restart-btn')

var shuffledQuestions 
var currentQuestionIndex

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<scripting>", correct: false },
            { text: "<script>", correct: true },
            { text: "<javascript>", correct: false },
            { text: "<js>", correct: false },
        ],
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            { text: "Both the <head> and the <body> section are correct", correct: false },
            { text: "The <head> section", correct: false },
            { text: "The <body> section", correct: true },
            { text: "At the Top of the HTML File", correct: false },
        ],
    },

    {
        question: "Which symbol is used separate JavaScript statements?",
        answers: [
            { text: "Comma (,)", correct: false },
            { text: "Colon (:)", correct: false },
            { text: "Hyphen (_)", correct: false },
            { text: "Semicolon (;)", correct: true },
        ],
    },

    {
        question: "In JavaScript, single line comment begins with ___.",
        answers: [
            { text: "#", correct: false },
            { text: "/", correct: false },
            { text: "$", correct: false },
            { text: "//", correct: true },
        ],
    },

    {
        question: "Which JavaScript keyword is used to declare a variable?",
        answers: [
            { text: "var", correct: true },
            { text: "Var", correct: false },
            { text: "Let", correct: false },
            { text: "All of the Above", correct: false },
        ],
    },

    {
        question: "Which is the correct syntax to declare a constant in JavaScript?",
        answers: [
            { text: "const constant_name;", correct: false },
            { text: "constant_name const;", correct: false },
            { text: "constant_name const = value;", correct: false },
            { text: "const constant_name = value;", correct: true },
        ],
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function = myFunction()", correct: false },
            { text: "function myFunction()", correct: true },
            { text: "function:myFunction()", correct: false },
            { text: "function::myFunction()", correct: false },
        ],
    },

    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: [
            { text: "Math.min(xy);", correct: false },
            { text: "min(x,y);", correct: false },
            { text: "Math.min(x,y);", correct: true },
            { text: "min(xy);", correct: false },
        ],
    },

    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: [
            { text: "default", correct: true },
            { text: "catch", correct: false },
            { text: "try", correct: false },
            { text: "label", correct: false },
        ],
    },

    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        answers: [
            { text: "if(x 2)", correct: false },
            { text: "if(x != 2 )", correct: false },
            { text: "if(x = 2)", correct: false },
            { text: "if(x == 2)", correct: true },
        ],
    },
];

// Start a timer
function timer() {
    var seconds = 120;

    var timeInterval = setInterval(function () {
        if (seconds > 1) {
            timerEl.textContent = seconds + ' seconds remaining';
            seconds--;
        }
        else if (seconds === 1) {
            timerEl.textContent = seconds + 'second remaining';
            seconds--;
        }
        else {
            timerEl.textContent = 'Time is up!';
            clearInterval(timeInterval);
        }
    }, 1000);
};

function startGame() {
    openText.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    timer();
};

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
};

function selectAnswer() {
    
};

startButton.addEventListener("click", function () {
    startGame();
});
    
restartButton.addEventListener('click', function() {
    confirmRestart = confirm('Would you like to restart all progress?')
    if (confirmRestart) {
        questionContainerElement.classList.add('hide');
        openText.classList.remove('hide');
    };
});
// highscores section
// display a question and options
// once user click on an option check user's reapnse with correct answer from questions array
// if it's a correct answer increament score by 10 or decrement seconds by 5
// Then increment index by 1. When you increment check if index === questions.length and if it is return and display textbox to enter initials
// Once user enters the initials store initials and score into local storage 
