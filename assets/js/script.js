// variables / declarations
var _time = 120;
var _index = 0;
var _score = 0;
var _interval;

var shuffledQuestions;

var elements = {
    timer: document.getElementById('time'),
    intro:  document.getElementById('starter'),
    
    container: document.getElementById('container'),
    question: document.getElementById('question'),
    questionContainer: document.getElementById('question-container'),
    
    highScores: document.getElementById('highscore'), // id variable
    highscoreUl: document.getElementById('highscore-list'), // ul variable


    button: {
        choices: document.getElementsByName('choices'),
        start: document.getElementById('btn-starter'),
        restart: document.getElementById('btn-restart'),
        highscore: document.getElementById('btn-highscore'), // button variable
    },
};

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

// array variable
var highScoreArr = [
    {
        name: "Max Score",
        score: 220,
    },
    {
        name: "ZTG",
        score: 200,
    },
    {
        name: "AGJ",
        score: 182,
    },
    {
        name: "ACQ",
        score: 163,
    },
    {
        name: "TQS",
        score: 150,
    },
    {
        name: "DTR",
        score: 117,
    },
    {
        name: "GGG",
        score: 108,
    },
];

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
    _time = _time - 0.0333333333333;

        if (_time > 1) {
            elements.timer.textContent = _time.toFixed(1) + ' seconds';
        }
        else if (_time == 1) {
            elements.timer.textContent = _time + ' second';
        }
        else {
            elements.timer.textContent = 'Time is up!';
            getScore();
        }
    }, 33.3333333333);
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
        console.log("correct");
    }
    else {
        _time-= 10;
        console.log("wrong");
    };

    _index++;
    if (_index < data.length) {
        newQuestion(_index);
    }
    else  {
        getScore();
    };
};

// timer = 0 game over | initials + score = highscore
function getScore() {
    clearInterval(_interval);
    elements.container.classList.add('hide');
    
    var finalScore = parseInt(Math.round(_score += _time));

    elements.timer.textContent = _time.toFixed(1) + " seconds left | Score: " + finalScore;

    setTimeout(function () {
        // get player name and push to highscore array and save to localStorage
        let person = prompt("Score: " + finalScore + "! Congratulations, please enter your Initials!");

        var newAddition = { name: person, 
                            score: finalScore};

        if (person == 0) {
            alert("Please enter your Initials");
        }
        else if (person > 5) {
            alert("Initials cannot be more than 5 character!");
        } 
        else {
            highScoreArr.push(newAddition);
            highScoreArr.sort((a, b) => (a.score < b.score) ? 1 : -1);
            localStorage.setItem("highScoreArr", JSON.stringify(highScoreArr));
        };
    }, 500);
    

    
};



// get LocalStorage information - parse and sort highscore by score# and appendChild into ul and onto html (highscore section)
function showScore() {

    // get localStorage data and parse into obj for new highScoreArr
    var newHighscore = JSON.parse(localStorage.getItem("highScoreArr"));

    console.log(newHighscore);

    // creates li and p and textContent for p tags (need to put inside for look for all highscores in array)
    var highscoreEl = document.createElement("li");
    var highscoreP = document.createElement("p");

    // highscoreP.textContent = "Name: " + newHighscore[i].name + " | Score: " + newHighscore[i].score;
    for (var i = 0; i < newHighscore.length; i++) {
        var highscoreEl = document.createElement("li");
        var highscoreP = document.createElement("p");

        highscoreP.textContent = "Name: " + newHighscore[i].name + " | Score: " + newHighscore[i].score;
        
        highscoreEl.appendChild(highscoreP);
        elements.highscoreUl.appendChild(highscoreEl);
    };

    // appendChild p > li > ul
    // highscoreEl.appendChild(highscoreP);
    // elements.highscoreUl.appendChild(highscoreEl);
}
    

// Restart Button - reset all data
function restartGame() {
    // var re-declaration
    _time = 120;
    _index = 0;
    _score = 0;
    
    clearInterval(_interval);

    elements.intro.classList.remove('hide');
    elements.highScores.classList.add('hide');
    elements.container.classList.add('hide');

    elements.timer.textContent = "120 seconds";
};

// highscores button function
function viewScores() {

    clearInterval(_interval);
    elements.timer.textContent = "120 seconds";

    elements.highScores.classList.remove('hide');
    elements.container.classList.add('hide');
    elements.intro.classList.add('hide');

    showScore();
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
    elements.highscoreUl.textContent = "";
    viewScores();
});