var questions = 
[ 
  { question:"What is the correct syntax to output \u0022Hello World\u0022 in Python?",  
    choices: [0, 1, 2, 3],
    correctAnswer: 0
  },
  {
    question: "How do you insert COMMENTS in Python code?",
    choices: [0, 1, 2, 3],
    correctAnswer: 3
  },
  {
    question: "Which one is NOT a legal variable name?",
    choices: [0, 1, 2, 3],
    correctAnswer: 3
  },
  {
    question: "How do you create a variable with the numeric value 5?", 
    choices: [0, 1, 2, 3],
    correctAnswer: 2 
  },
  {
    question: "What is the correct file extension for Python files?", 
    choices: [0, 1, 2, 3],
    correctAnswer: 0
  }
];
var answers = [];
var choice_options = [ 
     ["print(\u0022Hello World\u0022)", "p(\u0022Hello World\u0022)", "echo(\u0022Hello World\u0022)", "print(Hello World)"], 
     ["/*This is a comment*/", "//This is a comment", "<This is a comment>", "#This is a comment"],
     ["Myvar", "_myvar", "my_var", "my-var"],
     ["x = 5","x = int(5)","Both above are correct","No correct answer"],
     [".py",".pyt",".pyth",".pt"],
];
$(document).ready(function() {
  var $quizBox = $('#quiz-box');
  for (var i = 0; i < questions.length; i++) {
    var $question = $('<div>').addClass('question').text(questions[i].question);
    var $choices = $('<div>').addClass('choices');

    for (var j = 0; j < choice_options[i].length; j++) {
      var $choiceLabel = $('<label>').text(choice_options[i][j]);
      var $choiceInput = $('<input>').attr({
        type: 'radio',
        name: 'answer-' + i,
        value: j
      });
      $choiceLabel.prepend($choiceInput);
      $choices.append($choiceLabel, '<br>');
    }
    $quizBox.append($question, $choices);
}
  var $checkAnswersButton = $('.button-3');
  $checkAnswersButton.click(function() {
    var score = 0;  
    for (var i = 0; i < questions.length; i++) {
      var selectedAnswer = $('input[name="answer-' + i + '"]:checked').val();
      if (selectedAnswer == questions[i].correctAnswer) {
        score++;
      }
    }
    var $scoreMessage = $('<p>').text('Your score is ' + score + ' out of ' + questions.length);
    $quizBox.append($scoreMessage);
  });
});