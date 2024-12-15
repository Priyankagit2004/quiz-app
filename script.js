const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
    },
    {
        question: "Which language is used for web apps?",
        options: ["Python", "JavaScript", "C++", "Java"],
        correct: 1,
    },
    {
        question: "What is the result of 3 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 2,
    },
];

let currentQuestion = 0;
let score = 0;

// Load a question onto the quiz
function loadQuestion() {
    const questionEl = document.getElementById("question");
    const options = document.querySelectorAll(".option-btn");

    // Update question text
    questionEl.textContent = questions[currentQuestion].question;

    // Update options text and reset styles
    options.forEach((button, index) => {
        button.textContent = questions[currentQuestion].options[index];
        button.classList.remove("selected");
    });

    // Hide the submit button initially
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "block";
}

// Handle option selection
function selectOption(index) {
    const options = document.querySelectorAll(".option-btn");

    // Remove 'selected' class from all options
    options.forEach((button) => button.classList.remove("selected"));

    // Add 'selected' class to the clicked option
    options[index].classList.add("selected");
}

// Handle Next button click
function nextQuestion() {
    const selectedOption = document.querySelector(".option-btn.selected");

    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    const selectedIndex = Array.from(document.querySelectorAll(".option-btn")).indexOf(selectedOption);

    // Check if the selected answer is correct
    if (selectedIndex === questions[currentQuestion].correct) {
        score++;
    }

    // Move to the next question or finish the quiz
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        // If all questions are answered, show the Submit button
        document.getElementById("quiz").style.display = "none";
        document.getElementById("submit-btn").style.display = "block";
        document.getElementById("next-btn").style.display = "none";
    }
}

// Handle Submit button click
function submitQuiz() {
    // Display the final score
    const resultEl = document.getElementById("result");
    resultEl.textContent = `You scored ${score} out of ${questions.length}!`;

    // Optionally disable the Submit button after submission
    document.getElementById("submit-btn").disabled = true;
}

// Initialize the quiz
loadQuestion();
