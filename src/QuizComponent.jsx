import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, showResult] = useState(false);

  const HandleUpdateQuestion = (option) => {
    if (option == questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex !== questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      showResult(true);
      console.log("hi");
    }
  };

  return (
    <div className="quiz-container">
      {!result ? (
        <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/
              {questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestionIndex].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  HandleUpdateQuestion(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="">
          score: {score} / {questions.length}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
