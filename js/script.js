// Create variables

var viewHigh = $("timer-container");
var countdown = $("countdown");
var shiftContainer = $("shift-container");
var startBtn = $("start-button");

// set question index

var currentQuestionIndex = 0;
var resultsSecondsLeft = 2;

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
    // clear the element

    // display the first question
    const currentQuestion = questions[currentQuestionIndex];

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
