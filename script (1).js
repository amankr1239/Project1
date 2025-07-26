// script.js

const questions = [
  {
    question: "which team won the ipl trophy in 2025?",
    options: ["RCB", "MI", "CSK", "Panjab"],
    answer: "RCB"
  },
  {
    question: "which team won the T20 world cup in 2024?",
    options: ["Australia", "england", "india", "newzealand"],
    answer: "india"
  },
  {
    question: "which player is called  the king of cricket?",
    options: ["virat kohli", "rohit sharma", "MS dhoni", "hardik pandaya"],
    answer: "virat kohli"
  }
];

  

let currentQuestion = 0;
let score =0 ;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(btn, option, q.answer));
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectAnswer(button, selected, correct) {
  const allButtons = optionsEl.querySelectorAll("button");

  allButtons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    allButtons.forEach(btn => {
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      }
    });
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  document.getElementById("quiz-box").classList.add("hide");
  resultBox.classList.remove("hide");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

showQuestion();
