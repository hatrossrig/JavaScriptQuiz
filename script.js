// for our quiz timer
var timer;
var seconds;

// for the timer that will clear correct or incorrect results from the screen
var answerTimer;
var answerSeconds = 1;

var score;
var finalScore;
var time = document.querySelector(".timer");
var start = document.querySelector("#startButton");
var question = document.querySelector(".question");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var answer = document.querySelector(".answer");

var names = ["Johnny", "Mark", "Bella"];
var scores = ["25", "50", "70"];

// function for question 1
function question1() {
    // quiz timer is reset and starts
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

    // remove the start quiz button
    start.remove();

    // question and choices are displayed in divs
    question.textContent = "Commonly used data types do not include:";
    choice1.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice1Button\">Alerts</button>";
    choice2.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice2Button\">Strings</button>";
    choice3.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice3Button\">Booleans</button>";
    choice4.innerHTML = "<button type=\"button\" class=\"btn btn-dark btn-lg\" id=\"choice4Button\">Numbers</button>";

    // when the user clicks a choice, they either win or lose points and go to the next question
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

// the same process is repeated for the 5 questions

function question2() {
    // this timer clears the correct or incorrect result from the screen for added functionality
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

// now the user is done with the quiz, and is shown their score. the user will enter their name
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

    choice1.innerHTML = `<form><div class="form-group">Name:<input type="text" class="form-control mb-3" id="enteredName" placeholder="Your name"></div><button type="button" class="btn btn-dark btn-lg mb-3" id="submitName">Submit</button></form>`;
    choice2.innerHTML = "";
    choice3.innerHTML = "";
    choice4.innerHTML = "";

    submitName.addEventListener("click", function () {
        addName();
    })
}

// the user ran out of time, their score is shown, and now will need to also enter their name
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

    choice1.innerHTML = `<form><div class="form-group">Name:<input type="text" class="form-control mb-3" id="enteredName" placeholder="Your name"></div><button type="button" class="btn btn-dark btn-lg mb-3" id="submitName">Submit</button></form>`;
    choice2.innerHTML = "";
    choice3.innerHTML = "";
    choice4.innerHTML = "";

    submitName.addEventListener("click", function () {
        addName();
    })
}

// the name and score are shown together
function addName() {
    var nameEl = document.querySelector("#enteredName");
    var userName = nameEl.value;

    question.textContent = "Name: " + userName + " | Final Score: " + finalScore;
    choice1.innerHTML = `<button type="button" class="btn btn-dark btn-lg mr-1" id="seeScores">See Scores</button><button type="button" class="btn btn-dark btn-lg mr-1" id="clearScores">Clear Scores</button><button type="button" class="btn btn-dark btn-lg" id="startOver">Try Again</button>`;

    // the name and score are added to the arrays
    names.push(userName);
    scores.push(finalScore);
    nameEl.value = "";


    seeScores.addEventListener("click", function () {
        highScores();
    })

    clearScores.addEventListener("click", function () {
        deleteScores();
    })

    startOver.addEventListener("click", function () {
        question1();
    })
}

function highScores() {
    question.textContent = "High Scores";
    choice1.innerHTML = "";

    // for every element in the names array, the name and score are displayed in a list
    for (var i = 0; i < names.length; i++) {
        var savedName = names[i];
        var savedScore = scores[i];
        var li = document.createElement("li");
        li.textContent = savedName + " - " + savedScore;
        choice1.appendChild(li);
    }

    choice2.innerHTML = `<button type="button" class="btn btn-dark btn-lg mt-3 mr-1" id="clearScores">Clear Scores</button><button type="button" class="btn btn-dark btn-lg mt-3" id="startOver">Try Again</button>`;

    clearScores.addEventListener("click", function () {
        deleteScores();
    })

    startOver.addEventListener("click", function () {
        question1();
    })
}

function deleteScores() {
    // both names and scores arrays get cleared here
    names.splice(0, names.length);
    scores.splice(0, scores.length);

    question.textContent = "";
    choice1.innerHTML = "All scores are now cleared.";
    choice2.innerHTML = `<button type="button" class="btn btn-dark btn-lg mt-3" id="startOver">Try Again</button>`;

    startOver.addEventListener("click", function () {
        question1();
    })
}


function startQuiz() {
    // when user clicks Start Quiz, we begin with the first Question
    start.addEventListener("click", function () {
        question1();
    })
};

startQuiz();