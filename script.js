const prompt = require("prompt-sync")();

function quizGame() {
  const answer1 = prompt("Welcome to the quiz game. Do you wish to play this game? (yes/no): ");
  if (answer1.toLowerCase() === "yes") {
    askQuestion();
  } else {
    console.log("Such a waste of time --_--");
  }

  function askQuestion() {
    let score = 0;
    const questions = [
      {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Fuji", "Mount Everest", "Mount McKinley"],
        correctAnswer: "Mount Everest"
      },
      {
        question: "Which monument is located in New York and was a gift from France?",
        options: ["Eiffel Tower", "Big Ben", "Statue of Liberty", "Colosseum"],
        correctAnswer: "Statue of Liberty"
      },
      {
        question: "Where is the Great Wall of China located?",
        options: ["China", "India", "Egypt", "Australia"],
        correctAnswer: "China"
      },
    ];


    for (let i = 0; i < questions.length; i++) {
      const currentQuestion = questions[i];
      console.log("Question ", (i + 1), ":", currentQuestion.question);

      currentQuestion.options.forEach((option, i) => {
        console.log(`${i + 1}. ${option}`);
      });

      let answer = prompt("Enter the number of your answer: ");

      const selectedOption = currentQuestion.options[parseInt(answer) - 1];
      if (selectedOption === currentQuestion.correctAnswer) {
        console.log("Correct!\n");
        score++;
      } else {
        console.log(`Wrong! The correct answer is: ${currentQuestion.correctAnswer}\n`);
      }

    }
    calculateScore(score);
  }

  function calculateScore(score) {
    this.score = score;
    const percentage = Math.round((score / 3) * 100);
    console.log(`Quiz completed! Your score: ${score} out of ${3}.`);
    console.log(`Percentage: ${percentage}%`);

    const askAgain = prompt("Do you want to play again?(yes/no): ");
    if (askAgain.toLowerCase() === "yes") {
      askQuestion();
    } else {
      console.log("Thank you for playing the game!");
    }
  }
}




//Functions
quizGame();