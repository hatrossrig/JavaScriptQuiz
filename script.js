var timer;
var seconds;
var answerTimer;
var answerSeconds = 1;
var score;
var finalScore;
var name;
var time = document.querySelector(".timer");
var start = document.querySelector("#startButton");
var question = document.querySelector(".question");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var answer = document.querySelector(".answer");

var names = [];
var highScores = [];

function question1() {
    seconds = 30;
    score = 0;
    timer = setInterval(function () {
        seconds--;
        time.textContent = seconds + " seconds left.";

        if (seconds === 0) {
            clearInterval(timer);
            timeOut();
        }

    }, 1000);

    start.remove();

    question.textContent = "Commonly used data types do not include:";
    choice1.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice1Button\">Alerts</button>";
    choice2.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice2Button\">Strings</button>";
    choice3.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice3Button\">Booleans</button>";
    choice4.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice4Button\">Numbers</button>";

    choice1Button.addEventListener("click", function () {
        answer.textContent = "Correct! You gained 5 seconds!"
        seconds = seconds + 5;
        score = score + 5;
        question2();
    })

    choice2Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question2();
    })

    choice3Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question2();
    })

    choice4Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question2();
    })
}

function question2() {
    answerTimer = setInterval(function () {
        answerSeconds = 1;
        answerSeconds--;

        if (answerSeconds === 0) {
            clearInterval(answerTimer);
            answer.textContent = "";
        }

    }, 1000);

    question.textContent = "The condition in an if / else statement is enclosed within:";

    choice1.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice5Button\">Quotes</button>";
    choice2.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice6Button\">Parentheses</button>";
    choice3.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice7Button\">Curly Brackets</button>";
    choice4.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice8Button\">Square Brackets</button>";

    choice5Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question3();
    })

    choice6Button.addEventListener("click", function () {
        answer.textContent = "Correct! You gained 5 seconds!"
        seconds = seconds + 5;
        score = score + 5;
        question3();
    })

    choice7Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question3();
    })

    choice8Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question3();
    })
}

function question3() {
    answerTimer = setInterval(function () {
        answerSeconds = 1;
        answerSeconds--;

        if (answerSeconds === 0) {
            clearInterval(answerTimer);
            answer.textContent = "";
        }

    }, 1000);

    question.textContent = "Arrays in JavaScript can be used to store:";

    choice1.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice9Button\">Numbers and Strings</button>";
    choice2.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice10Button\">Other Arrays</button>";
    choice3.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice11Button\">Booleans</button>";
    choice4.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice12Button\">All of the Above</button>";

    choice9Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question4();
    })

    choice10Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question4();
    })

    choice11Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question4();
    })

    choice12Button.addEventListener("click", function () {
        answer.textContent = "Correct! You gained 5 seconds!"
        seconds = seconds + 5;
        score = score + 5;
        question4();
    })
}

function question4() {
    answerTimer = setInterval(function () {
        answerSeconds = 1;
        answerSeconds--;

        if (answerSeconds === 0) {
            clearInterval(answerTimer);
            answer.textContent = "";
        }

    }, 1000);

    question.textContent = "String values must be enclosed within ________ when being assigned to variables.";

    choice1.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice13Button\">Commas</button>";
    choice2.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice14Button\">Curly Brackets</button>";
    choice3.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice15Button\">Quotes</button>";
    choice4.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice16Button\">Parentheses</button>";

    choice13Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question5();
    })

    choice14Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question5();
    })

    choice15Button.addEventListener("click", function () {
        answer.textContent = "Correct! You gained 5 seconds!"
        seconds = seconds + 5;
        score = score + 5;
        question5();
    })

    choice16Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        question5();
    })
}

function question5() {
    answerTimer = setInterval(function () {
        answerSeconds = 1;
        answerSeconds--;

        if (answerSeconds === 0) {
            clearInterval(answerTimer);
            answer.textContent = "";
        }

    }, 1000);

    question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";

    choice1.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice17Button\">JavaScript</button>";
    choice2.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice18Button\">Terminal / Bash</button>";
    choice3.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice19Button\">For Loops</button>";
    choice4.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice20Button\">Console Log</button>";

    choice17Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        endGame();
    })

    choice18Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        endGame();
    })

    choice19Button.addEventListener("click", function () {
        answer.textContent = "Incorrect! You lost 5 seconds!"
        seconds = seconds - 5;
        endGame();
    })

    choice20Button.addEventListener("click", function () {
        answer.textContent = "Correct! You gained 5 seconds!"
        seconds = seconds + 5;
        score = score + 5;
        endGame();
    })
}

function endGame() {
    finalScore = score + seconds;
    question.textContent = "Your final score is: " + finalScore;

    clearInterval(timer);
    time.textContent = "";

    answerTimer = setInterval(function () {
        answerSeconds = 1;
        answerSeconds--;

        if (answerSeconds === 0) {
            clearInterval(answerTimer);
            answer.textContent = "";
        }

    }, 1000);

    choice1.innerHTML = "<form><div class=\"form-group\">Name:<input type=\"text\" class=\"form-control mb-3\" id=\"enteredName\" placeholder=\"Your name\"></div><button type=\"button\" class=\"btn btn-dark btn-lg mb-3\" id=\"submitName\">Submit</button></form>";
    choice2.innerHTML = "";
    choice3.innerHTML = "";
    choice4.innerHTML = "";

    submitName.addEventListener("click", function () {
        addName();
    })
}

function timeOut() {
    time.textContent = "Time is up!";

    finalScore = score;
    question.textContent = "Your final score is: " + finalScore;

    answerTimer = setInterval(function () {
        answerSeconds = 1;
        answerSeconds--;

        if (answerSeconds === 0) {
            clearInterval(answerTimer);
            answer.textContent = "";
        }

    }, 1000);

    choice1.innerHTML = "<form><div class=\"form-group\">Name:<input type=\"text\" class=\"form-control mb-3\" id=\"enteredName\" placeholder=\"Your name\"></div><button type=\"button\" class=\"btn btn-dark btn-lg mb-3\" id=\"submitName\">Submit</button></form>";
    choice2.innerHTML = "";
    choice3.innerHTML = "";
    choice4.innerHTML = "";

    submitName.addEventListener("click", function () {
        addName();
    })
}

function addName() {
    var nameEl = document.querySelector("#enteredName");
    nameEl.value = name;
    question.textContent = "Name: " + name + "     |     Final Score: " + finalScore;
    choice1.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg mr-1\" id=\"seeScores\">See Scores</button><button type=\"button\" class=\"btn btn-dark btn-lg mr-1\" id=\"clearScores\">Clear Scores</button><button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"startOver\">Try Again</button>";

    startOver.addEventListener("click", function () {
        question1();
    })
}



function startQuiz() {
    start.addEventListener("click", function () {
        question1();
    })
};


startQuiz();