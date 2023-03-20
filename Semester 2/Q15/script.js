const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const scoreContainer = document.getElementById("score-container");

// Define an array containing the correct answers
const correctAnswers = ["c", "a", "a", "a", "a"];

// Function to calculate the score and display it to the user
function calculateScore(event) {
  event.preventDefault(); // Prevent the form from submitting

  let score = 0;
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value,
  ];

  // Loop through the user's answers and compare them to the correct answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  // Display the score to the user
  scoreContainer.innerHTML = `Your score is ${score}%`;
  setTimeout(() => {
        location.reload();
  }, 3000);
}

submitBtn.addEventListener("click", calculateScore);
