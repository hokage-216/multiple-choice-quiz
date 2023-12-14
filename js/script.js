// body element
var body = $('body');

// timer element variables
var timeContainer = $('<section></section>');
timeContainer.attr('id', 'timer-container');
timeContainer.addClass("container-fluid p-2");

var timeRow = $('<div></div>');
timeRow.attr('id', 'timer-row');
timeRow.addClass("row justify-content-between align-items-center");

var viewContainer = $('<div></div>');
viewContainer.attr('id', 'view-high-container');
viewContainer.addClass("col-auto");

var viewHigh = $('<button></button>');
viewHigh.attr({
    'id': 'view-high',
    'type': 'button'
});
viewHigh.addClass("btn btn-link");

var countContainer = $('<div></div>');
countContainer.attr('id', 'countdown-container');
countContainer.addClass("col-auto");

var timeLabel = $('<span></span>');
timeLabel.attr('id', 'timer-label');

var countdown = $('<span></span>');
countdown.attr('id', 'countdown');

//startbox element variables
var quizContainer = $('<section></section>');
quizContainer.attr('id', 'quiz-container');
quizContainer.addClass("container-fluid p-5 justify-content-center");

var shiftContainer = $('<div></div>');
shiftContainer.attr('id', 'shift-container');
shiftContainer.addClass("card p-4 text-center mx-auto");

var startCardHeader = $('<h1></h1>');
startCardHeader.attr('id', 'start-card-header');
startCardHeader.addClass("p-3");

var startParagraph = $('<p></p>');
startParagraph.attr('id', 'start-paragraph');
startParagraph.addClass("mx-3");

var startBtn = $('<button></button>');
startBtn.attr({
    'type': 'button',
    'id': 'start-button'
});
startBtn.attr('id', 'start-button');
startBtn.addClass("btn btn-outline-primary mx-auto");

// question box elements
var questionHeader = $('<h3></h3>');
questionHeader.attr('id', 'question-card-header');
questionHeader.addClass("p-3");

var answer1 = $('<button></button>');
answer1.attr({
    'id': 'answer1',
    'type': 'button'
});
answer1.addClass('btn btn-primary col-6 m-1 mx-auto');

var answer2 = $('<button></button>');
answer2.attr({
    'id': 'answer2',
    'type': 'button'
});
answer2.addClass('btn btn-primary col-6 m-1 mx-auto');

var answer3 = $('<button></button>');
answer3.attr({
    'id': 'answer3',
    'type': 'button'
});
answer3.addClass('btn btn-primary col-6 m-1 mx-auto');

var answer4 = $('<button></button>');
answer4.attr({
    'id': 'answer4',
    'type': 'button'
});
answer4.addClass('btn btn-primary col-6 m-1 mx-auto');

var result = $('<div></div>');
result.attr('id', 'result');
result.addClass('border-top border-2 p-2 m-3 fw-light fst-italic');

// game over elements

var gameOverHeader = $('<div></div>');
gameOverHeader.attr('id', 'go-card-header');
gameOverHeader.addClass('p-3');

var scoreContainer = $('<div></div>');
scoreContainer.attr('id', 'scoreContainer');
scoreContainer.addClass('p-1');

var scoreLabel = $('<span></span>');
scoreLabel.attr('id', 'score-label');
scoreLabel.addClass('m-2');

var userScore = $('<span></span>');
userScore.attr('id', 'user-score');

var initialContainer = $('<div></div>');
initialContainer.attr('initial-container');
initialContainer.addClass('m-4');

var initialsLabel = $('<label></label>');
initialsLabel.attr('for', 'initials');
initialsLabel.addClass('m-2');

var userInitials = $('<input>');
userInitials.attr({
    'type': 'text',
    'name': 'initials',
    'id': 'initials-input'
});



// index variables
var currentQuestionIndex = 0;
var resultsSecondsLeft = 2;
var gameClock = 60;
var userPoints = 0;
const leaderboard = [];

// creating questions array
const questions = [
    {
        question: "1. What does CSS stand for?",
        options: ["A) Cascading Style Sheets", "B) Computer Style Sheets", "C) Creative Style Sheets", "D) Colorful Style Sheets"],
        correctAnswer: 0
    },
    {
        question: "2. Which HTML tag is used to define an unordered list?",
        options: ["A) <ul>", "B) <ol>", "C) <li>", "D) <dl>"],
        correctAnswer: 0
    },
    {
        question: "3. Which of the following is NOT a valid way to declare a JavaScript variable?",
        options: ["A) var myVariable = 10;", "B) let myVariable = 10;", "C) const myVariable = 10;", "D) myVariable = 10;"],
        correctAnswer: 3
    },
    {
        question: "4. In jQuery, what does $('p.intro') select?",
        options: ["A) All <p> elements", "B) The first <p> element with class 'intro'", "C) The last <p> element with class 'intro'", "D) The <p> element with id 'intro'"],
        correctAnswer: 1
    },
    {
        question: "5. What does the acronym DOM stand for in web development?",
        options: ["A) Document Object Model", "B) Data Object Model", "C) Design Object Model", "D) Display Object Model"],
        correctAnswer: 0
    },
    
];

// pull stats from local storage upon start of app & load start page
function init() {
    getLocalStorage();
    addStartPage();
}

function setLocalStorage(score){
    // grab score from most recent game
    // 
}

function getLocalStorage() {

}

function submitHighScore () {
    //TODO: Clear entire body
    //TODO: Add new container that takes up entire body
    //TODO: Add highscore element and apend it to the page
}

function displayHighScore () {

}

function clearHighScore () {

}

function addStartPage () {
    //clear the current page
    body.empty();
    // add start page
    body.prepend(quizContainer);
    quizContainer.append(shiftContainer);
    shiftContainer.append(startCardHeader);
    startCardHeader.text("LeVente's Web Developer Quiz 🧑🏾‍💻");
    shiftContainer.append(startParagraph);
    startParagraph.text("Try your hand at my quiz and see how high you can score! Press the start quiz button below to start the quiz. Keep in mind you loose time for each wrong question. So make sure you are confident in your answer! If you score high enough you might make the leaderboard! Do your best!");
    shiftContainer.append(startBtn);
    startBtn.text("START QUIZ");
    startBtn.on('click', startQuiz());
    body.prepend(timeContainer);
    timeContainer.append(timeRow);
    timeRow.append(viewContainer);
    viewContainer.append(viewHigh);
    viewHigh.text('View High Scores');
    timeRow.append(countContainer);
    countContainer.append(timeLabel);
    timeLabel.text('Time: ');
    countContainer.append(countdown);
}

function gameOver () {
    //clear container
    shiftContainer.empty();


}

function gameTimer () {
    var gameTimer = setInterval(() => {
        gameClock--;
        countdown.text(gameClock);
    }, 1000);
    if (gameTimer >= 0) {
        clearInterval(gameTimer);
        gameOver();
    }
}

function displayResult(result) {
    var resultTag = $('<div></div>');
    resultTag.id = 'result';
    resultTag.addClass('border-top border-2 p-2 m-3 fw-light fst-italic');

    // set timer showing correct status
    var resultsTimer = setInterval(() => {
        resultsSecondsLeft--;
        resultTag.text(result);
    },1000);
    
    if(resultsSecondsLeft === 0) {
        // Stops timer
        clearInterval(resultsTimer);
        // after two seconds remove the results
        resultTag.remove("#result");
      }
}

function correctAnswer() {
    // add points
    userPoints += 20;
    // displayu
    displayResult("CORRECT ✅");
}

function wrongAnswer() {
    // subtract time from timer
    gameClock -= 15;
    // display the result
    displayResult("WRONG ❌");
}

function checkAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.correctAnswer;
  
    if (selectedOptionIndex === correctIndex) {
      // display answer result for 2 seconds
      correctAnswer();
    } else {
        wrongAnswer();
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion(); // display the next question
    } else {
      gameOver(); // end game
    }
  }

function displayQuestions() {
    // grab the current question
    const currentQuestion = questions[currentQuestionIndex];
    // clear the element
    shiftContainer.empty();
    // display question content
    shiftContainer.append(questionHeader);
    questionHeader.text(questions.question);
    shiftContainer.append(answer1);
    answer1.text(questions.options[0]);
    answer1.on('click', () => {checkAnswer(currentQuestion.options.indexOf(answer1))});
    shiftContainer.append(answer2);
    answer2.text(questions.options[1]);
    answer2.on('click', () => {checkAnswer(currentQuestion.options.indexOf(answer2))});
    shiftContainer.append(answer3);
    answer3.text(questions.options[2]);
    answer3.on('click', () => {checkAnswer(currentQuestion.options.indexOf(answer3))});
    shiftContainer.append(answer4);
    answer4.text(questions.options[3]);
    answer4.on('click', () => {checkAnswer(currentQuestion.options.indexOf(answer4))});
}

function startQuiz() {
    // disable view high score button
    viewHigh.disabled = true;
    // display first question
    displayQuestions();
    // start the game timer
    gameTimer();
}

//   init();
