var seconds = 120;
var index = 0;
var score = 0;

var timerEl = document.getElementById('time');

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>","<script>","<javascript>","<js>"],
        answer: "<script>",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["Both the <head> and the <body> section are correct","The <head> section","The <body> section","At the Top of the HTML File"],
        answer: "The <body> section",
    },
    {
        question: "Which symbol is used separate JavaScript statements?",
        options: ["Comma (,)","Colon (:)","Hyphen (_)","Semicolon (;)"],
        answer: "Semicolon (;)",
    },
    {
        question: "In JavaScript, single line comment begins with ___.",
        options: ["#","/*","$","//"],
        answer: "//",
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        options: ["var","Var","Let","All of the Above"],
        answer: "var",
    },
    {
        question: "Which is the correct syntax to declare a constant in JavaScript?",
        options: ["const constant_name;","constant_name const;","constant_name const = value;","const constant_name = value;"],
        answer: "const constant_name = value;",
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()","function = myFunction()","function:myFunction()","function::myFunction()"],
        answer: "function myFunction()",
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        options: ["min(x,y);","Math.min(x,y);","Math.min(xy);","min(xy);"],
        answer: "Math.min(x,y);",
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        options: ["default","catch","try","label"],
        answer: "default",
    },
    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        options: ["if(x 2)","if(x != 2 )","if(x == 2)","if(x = 2)"],
        answer: "if(x == 2)",
    },
];

// timer function
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
            clearInterval(TimeInterval);
        }
    }, 1000);
};

function displayQuestion(){
    // Write a FOR loop to generate buttons for each option
//  for (var i=0; i<questions[index].options.length; i++) {
//     var b = document.createElement("button");
//     b.innerHTML = questions[index].options[i];
//     b.setAttribute("data-answer", questions[index].options[i]);
//     b.addEventListener("click", function () {
//         var user_answer = this.getAttribute("data-answer");
//         console.log(user_answer);
//     })

//     document.getElementById("questions").appendChild(b);

// };
}

document.getElementById("btn-starter").addEventListener("click", function(){
    document.getElementById("starter").style.display = "none";

    displayQuestion();
    timer();
})



// highscores section
//Start a timer
//display a question and options
//once user click on an option check user's reapnse with correct answer from questions array
//if it's a correct answer increament score by 10 or decrement seconds by 5
//Then increment index by 1. When you increment check if index === questions.length and if it is return and display textbox to enter initials
//Onse user enters the initials store initials and score into local storage

