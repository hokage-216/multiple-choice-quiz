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

var startContainer = $('<div></div>');
startContainer.attr('id', 'start-container');
startContainer.addClass("card p-4 text-center mx-auto");

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
var displayContainer = $('<div></div>');
displayContainer.attr('id', 'display-container');
displayContainer.addClass("card p-4 text-center mx-auto");

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

var resultTag = $('<div></div>').addClass('border-top border-2 p-2 m-3 fw-light fst-italic');
resultTag.id = 'result';

// game over elements

var gameOverContainer = $('<div></div>');
gameOverContainer.attr('id', 'shift-container');
gameOverContainer.addClass("card p-4 text-center mx-auto");

var gameOverHeader = $('<h1></h1>');
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
    'id': 'initials-input',
    'required': true
});

var goSubmit = $('<button></button>');
goSubmit.attr('type', 'button');
goSubmit.addClass('btn btn-primary col-3 mx-auto m-3');

// highscores variables
var highContainer = $('<section></section>');
highContainer.attr({'id': 'highscore-container'});
highContainer.addClass('mt-5 mb-3 justify-content-center align-items-center text-center');

var highHeader = $('<h1></h1>');
highHeader.attr({'id':'high-header-title'});

var listContainer = $('<div></div>');
listContainer.attr('id', 'list-container');
listContainer.addClass('m-3 p-2 col-3 mx-auto');

var orderList = $('<ol></ol>');
orderList.attr('id', 'order-container');
orderList.addClass('m-2 p-3');

var listItem = $('<li></li>');
listItem.addClass('p-1');

var hsButtonContainer = $('<div></div>');
hsButtonContainer.attr('id', 'hs-button-container');
hsButtonContainer.addClass('p-3 m-2');

const startOverBtn = $('<button></button>');
startOverBtn.attr('type', 'button');
startOverBtn.addClass('btn btn-primary col-3 m-2');

const clearLeaderBtn = $('<button></button>');
clearLeaderBtn.attr('type', 'button');
clearLeaderBtn.addClass('btn btn-primary col-3 m-2');


// index variables
var currentQuestionIndex = 0;
var resultsSecondsLeft = 2;
var gameClock = 75;
var userPoints = 0;
var leaderboard = [];

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

function setLeaderboard(leaderboard){
    // set score from most recent game
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

function getLeaderboard() {
    let leaderData = localStorage.getItem("leaderboard");
    if (leaderData) {
        leaderboard = JSON.parse(leaderData);
    } else {
        leaderboard = [];
    }

}

function clearHighScore () {
    // clear the leaderboard data from local storage
    localStorage.removeItem("userData");
    // clear the current leaderboard array
    leaderboard = [];
    // Clear the displayed high scores
    listContainer.empty();
}

function gameTimer () {
    var gameTime = setInterval(() => {
        gameClock--;
        countdown.text(gameClock);
    }, 1000);
    if (gameClock <= 0) {
        clearInterval(gameTime);
        displayContainer.remove();
        gameOver();
    }
}

function displayHighScore () {
    //clear entire body
    body.empty();
    //add new container for high scores
    body.append(highContainer);
    // add header
    highContainer.append(highHeader);
    highHeader.text('High Scores Leaderboard');
    //add list
    highContainer.append(listContainer);
    listContainer.append(orderList);
    for ( var i=0; i < leaderboard.length; i++) {
        listItem.text(leaderboard[i].initials + ' : ' + leaderboard[i].score);
        orderList.append(listItem);
    }
    //add start over button
    highContainer.append(hsButtonContainer);
    hsButtonContainer.append(startOverBtn);
    startOverBtn.text('Start Over').on('click', function () {addStartPage()});
    //add clear list button
    highContainer.append(hsButtonContainer);
    hsButtonContainer.append(clearLeaderBtn);
    clearLeaderBtn.text('Clear Leaderboard').on('click', function () {clearHighScore()});
}

function submitHighScore (userInitials) {
    //add highscore element and apend it to the page
    let userScore = userPoints; 
    let scoreEntry = {
        initials: userInitials,
        score: userScore
    };
    leaderboard.push(scoreEntry); // append user data to leaderboard
    setLeaderboard(leaderboard);
    displayHighScore();
}

function gameOver () {
    //clear container
    startContainer.remove();
    quizContainer.append(gameOverContainer);
    // add content
    gameOverContainer.append(gameOverHeader);
    gameOverHeader.text('GAME OVER!');
    gameOverContainer.append(scoreContainer);
    scoreContainer.append(scoreLabel);
    scoreLabel.text('Your Score: ');
    scoreContainer.append(userScore);
    userScore.text(userPoints);
    gameOverContainer.append(initialContainer);
    initialContainer.append(initialsLabel);
    initialsLabel.text('Enter Initials Here: ');
    initialContainer.append(userInitials);
    gameOverContainer.append(goSubmit);
    goSubmit.text('Submit').on('click', function() {submitHighScore(userInitials.value)});;
}

function displayResult(result) {
    // set timer showing correct status
    var resultsTimer = setInterval(() => {
        resultsSecondsLeft--;
        startContainer.append(resultTag).text(result);
    },1000);
    
    if(resultsSecondsLeft === 0) {
        // Stops timer
        clearInterval(resultsTimer);
        // after two seconds remove the results
        resultTag.remove();
      }
}

function checkAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    let correctIndex = currentQuestion.correctAnswer;
  
    if (selectedOptionIndex === correctIndex) {
        // display answer result for 2 seconds
        // add points
        userPoints += 20;
        // displayu
        displayResult("CORRECT ✅");
    } else {
        gameClock -= 10;
        userPoints -= 5;
        // display the result
        displayResult("WRONG ❌");
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestions(); // display the next question
    } else {
      gameOver(); // end game
    }
  }

function displayQuestions() {
    // grab the current question
    const currentQuestion = questions[currentQuestionIndex];
    countContainer.append(countdown);
    startContainer.remove();
    // clear the element
    quizContainer.append(displayContainer);
    // display question content
    displayContainer.append(questionHeader);
    questionHeader.text(currentQuestion.question);
    displayContainer.append(answer1.text(currentQuestion.options[0]).on('click', function() {
        checkAnswer(0);
    }));
    displayContainer.append(answer2.text(currentQuestion.options[1]).on('click', function() {
        checkAnswer(1);
    }));
    displayContainer.append(answer3.text(currentQuestion.options[2]).on('click', function() {
        checkAnswer(2);
    }));
    displayContainer.append(answer4.text(currentQuestion.options[3]).on('click', function() {
        checkAnswer(3);
    }));
}



function startQuiz() {
    currentQuestionIndex = 0;
    userPoints = 0;
    gameClock = 75;
    // disable view high score button
    viewHigh.addClass()
    viewHigh.disabled = true;
    // start the game timer
    gameTimer();
    // display first question
    displayQuestions();
}

function addStartPage () {
    //clear the current page
    body.empty();
    // append timer nav
    body.append(timeContainer);
    timeContainer.append(timeRow);
    timeRow.append(viewContainer);
    viewContainer.append(viewHigh);
    viewHigh.text('View High Scores');
    timeRow.append(countContainer);
    countContainer.append(timeLabel);
    timeLabel.text('Time: ');
    countContainer.append(countdown);
    countdown.text(gameClock);
    // append start box
    body.append(quizContainer);
    quizContainer.append(startContainer);
    startContainer.append(startCardHeader);
    startCardHeader.text("LeVente's Web Developer Quiz 🧑🏾‍💻");
    startContainer.append(startParagraph);
    startParagraph.text("Try your hand at my quiz and see how high you can score! Press the start quiz button below to start the quiz. Keep in mind you loose time for each wrong question. So make sure you are confident in your answer! If you score high enough you might make the leaderboard! Do your best!");
    startContainer.append(startBtn);
    startBtn.text("START QUIZ");
    startBtn.on('click', startQuiz);
}

// pull stats from local storage upon start of app & load start page
function init() {
    getLeaderboard();
    addStartPage();
}

init();