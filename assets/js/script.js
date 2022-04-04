// variables / declarations
var _time = 120;
var _index = 0;
var _score = 0;
var _interval;

var elements = {
    timer: document.getElementById('time'),
    intro:  document.getElementById('starter'),
    highscore: document.getElementById('highscore'),
    container: document.getElementById('container'),
    question: document.getElementById('question'),
    questionContainer: document.getElementById('question-container'),
    
    button: {
        choices: document.getElementsByName('choices'),
        start: document.getElementById('btn-starter'),
        restart: document.getElementById('restart-btn'),
        highscore: document.getElementById('btn-highscore'),
    },
};


var shuffledQuestions 
var currentQuestionIndex

var data = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: '<script>',
        choices: ['<scripting>', '<script>', '<javascript>', '<js>'],
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer: 'The <body> section',
        choices: ['Both the <head> and <body> section', 'The <head> section', 'The <body> section', 'At the Top of the HTML File'],
    },
    {
        question: "Which symbol is used separate JavaScript statements?",
        answer: 'Semicolon (;)', 
        choices: ['Comma (,)', 'Colon (:)', 'Hyphen (_)', 'Semicolon (;)'],
    },

    {
        question: "In JavaScript, single line comment begins with ___.",
        answer: '//',
        choices: ['#', '/', '$', '//'],
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        answer: 'var',
        choices: ['var', 'Var', 'Let', 'All of the Above',],
    },

    {
        question: "Which is the correct syntax to declare a constant in JavaScript?",
        answer: 'const constant_name = value;',
        choices: ['const constant_name;', 'constant_name const;', 'constant_name const = value;', 'const constant_name = value;'],
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: 'function myFunction()',
        choices: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', 'function::myFunction()'],
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answer: 'Math.min(x,y);',
        choices: ['Math.min(xy);', 'min(x,y);', 'Math.min(x,y);', 'min(xy);'],
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answer: 'default',
        choices: ['default', 'catch', 'try', 'label'],
    },

    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        answer: 'if(x == 2)',
        choices: ['if(x 2)', 'if(x != 2 )', 'if(x = 2)', 'if(x == 2)'],
    },
];

var highScore = [
    {
        name: "Max Score",
        score: "220",
    },
    {
        name: "ZTG",
        score: "200",
    },
    {
        name: "AGJ",
        score: "182",
    },
    {
        name: "ACQ",
        score: "163",
    },
    {
        name: "TQS",
        score: "150",
    },
    {
        name: "DTR",
        score: "117",
    },
    {
        name: "GGG",
        score: "108",
    },
];

// highscores section
// if it's a correct answer increament score by 10 or decrement seconds by 5
// Then increment index by 1. When you increment check if index === questions.length and if it is return and display textbox to enter initials
// Once user enters the initials store initials and score into local storage 

// JS Game and Application Code
// Start Game coding (after button click event)
function startGame() {

    elements.intro.classList.add('hide');
    elements.container.classList.remove('hide');

    newQuestion(_index);
    startTimer();
};

// Timer functions
function startTimer() {
    _interval = setInterval(() => {
    _time--;

        if (_time > 1) {
            elements.timer.textContent = _time + ' seconds remaining';
        }
        else if (_time == 1) {
            elements.timer.textContent = _time + ' second remaining';
        }
        else {
            elements.timer.textContent = 'Time is up!';
            showScore();
        }
    }, 1000);
};

// display a question and options
function newQuestion(i) {
    elements.question.innerText = data[i].question;
    elements.button.choices[0].innerText = data[i].choices[0];
    elements.button.choices[1].innerText = data[i].choices[1];
    elements.button.choices[2].innerText = data[i].choices[2];
    elements.button.choices[3].innerText = data[i].choices[3];
};

// User answers question | increase score/decrease time / show next question
function checkAnswer(i) {
    answer = data[_index].answer;
    choice = data[_index].choices[i];

    if (choice == answer) {
        _score+= 10;
    }
    else {
        _time-= 10;
    };

    _index++;
    if (_index < data.length) {
        newQuestion(_index);
    }
    else  {
        showScore();
    };
};

// timer = 0 game over | initials + score = highscore
function showScore() {
    clearInterval(_interval);
    elements.container.classList.add('hide');
    elements.timer.textContent = _time + " seconds left";
    _score += _time;
    
    console.log(_score);
    // get player name and push to highscore array
    let person = prompt("Congratulations, please enter your Initials!");
    if (person != null) {
        highScore.push({
            name: person,
            score: _score,
        });
    };
};
    

// Restart Button - reloads the page to reset all data
function restartGame() {
    confirmRestart = confirm('Would you like to restart all progress?')
    if (confirmRestart) {
        document.location.reload(true);
    };
};

function viewScores() {
    elements.highscore.classList.remove('hide');
    elements.container.classList.add('hide');
    elements.intro.classList.add('hide');
};


// UX modifications and enhancements
// event listener for start button
elements.button.start.addEventListener('click', function() {
    startGame();
});

// event listener for restart button
elements.button.restart.addEventListener('click', function() {
    restartGame();
});


// event listener for choices buttons
elements.button.choices[0].addEventListener('click', function(e) {
    checkAnswer(0);
});
elements.button.choices[1].addEventListener('click', function(e) {
    checkAnswer(1);
});
elements.button.choices[2].addEventListener('click', function(e) {
    checkAnswer(2);
});
elements.button.choices[3].addEventListener('click', function(e) {
    checkAnswer(3);
});

// event listener for highscore button
elements.button.highscore.addEventListener('click', function() {
    viewScores();
});