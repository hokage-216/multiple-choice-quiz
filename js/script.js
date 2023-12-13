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


//

// set question index

var currentQuestionIndex = 0;
var resultsSecondsLeft = 1;

// creating questions array

const questions = [
    {
        question: "Question 1",
        options: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: 2
    },
    {
        question: "Question 2",
        options: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: 0
    },
    {
        question: "Question 3",
        options: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: 3
    },
    {
        question: "Question 4",
        options: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: 1
    },
    {
        question: "Question 5",
        options: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: 3
    },
    
];

// pull stats from local storage upon start of app

function init() {
    // getLocalStorage();
    addStartPage();
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
    var resultTag = $("div");
    resultTag.id = 'result';
    resultTag.addClass('container-fluid');

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

function displayQuestions() {
    // display the first question
    const currentQuestion = questions[currentQuestionIndex];
    // event listener for button
    startBtn.on('click', )
    // clear the element
    shiftContainer.text('');

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
