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
viewHigh.attr('id', 'view-high');
viewHigh.addClass("btn btn-link");
viewHigh.attr("type", "button");

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
startBtn.attr("type", "button");
startBtn.attr('id', 'start-button');
startBtn.addClass("btn btn-outline-primary mx-auto");

// question box elements


// set question index
var currentQuestionIndex = 0;
var resultsSecondsLeft = 1;

// creating questions array
const questions = [
    {
        question: "What does CSS stand for?",
        options: ["A) Cascading Style Sheets", "B) Computer Style Sheets", "C) Creative Style Sheets", "D) Colorful Style Sheets"],
        correctAnswer: 0
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["A) <ul>", "B) <ol>", "C) <li>", "D) <dl>"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a valid way to declare a JavaScript variable?",
        options: ["A) var myVariable = 10;", "B) let myVariable = 10;", "C) const myVariable = 10;", "D) myVariable = 10;"],
        correctAnswer: 3
    },
    {
        question: "In jQuery, what does $('p.intro') select?",
        options: ["A) All <p> elements", "B) The first <p> element with class 'intro'", "C) The last <p> element with class 'intro'", "D) The <p> element with id 'intro'"],
        correctAnswer: 1
    },
    {
        question: "What does the acronym DOM stand for in web development?",
        options: ["A) Document Object Model", "B) Data Object Model", "C) Design Object Model", "D) Display Object Model"],
        correctAnswer: 0
    },
    
];

// pull stats from local storage upon start of app & load start page
function init() {
    // getLocalStorage();
    // addStartPage();
}

function setLocalStorage(){
    // grab score from most recent game
    // 
}

function getLocalStorage() {

}

function clearHighScore () {

}

function displayHighScore () {

}

function submitHighScore () {
    //TODO: Clear entire body
    //TODO: Add new container that takes up entire body
    //TODO: Add highscore element and apend it to the page
}

function startQuiz() {

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

function displayResult(result) {
    var resultTag = $('<div></div>');
    resultTag.id = 'result';
    resultTag.addClass('container-fluid border-top border-2 border-dark');

    // set timer showing correct status
    var resultsTimer = setInterval(() => {
        resultsSecondsLeft--;
        
    },1000);
    
    if(resultsSecondsLeft === 0) {
        // Stops timer
        clearInterval(resultsTimer);
        // after two seconds remove the results
        resultTag.remove("#result");
      }
}

function correctAnswer() {
    // display the next question

    
}

function wrongAnswer() {

}

// display first question after hitting start

//clear the card

function displayQuestions() {
    // display the first question
    const currentQuestion = questions[currentQuestionIndex];
    // event listener for button
    startBtn.on('click', )
    // clear the element
    shiftContainer.empty();
}

function checkAnswer(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.correctAnswer;
  
    if (selectedOptionIndex === correctIndex) {
      // Proceed to the next question or do something else
      // go to the next question
      currentQuestionIndex++;
      // display contents of next question
      displayQuestions();
      // display answer result for 2 seconds
      correctAnswer();
    } else {
      // subtract 15 seconds from game timer

      currentQuestionIndex++;
      displayQuestions();
      wrongAnswer();
    }
  
    // Move to the next question after checking the answer
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion(); // Display the next question
    } else {
      // Quiz is finished
      console.log('Quiz finished!');
      // Handle end of the quiz
    }
  }

  init();
