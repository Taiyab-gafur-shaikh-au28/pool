import React, { useState } from "react";
import "./App.css";

function App() {
  // Property

  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Which state commenced operations of India’s first Inter-City Electric Bus service?",
      options: [
        { id: 0, text: "Karnataka", isCorrect: false },
        { id: 1, text: "Maharashtra", isCorrect: true },
        { id: 2, text: "Odisha", isCorrect: false },
        { id: 3, text: "Telangana", isCorrect: false },
      ],
    },
    {
      text: "What is the term of office of a Vigilance Commissioner in Central Vigilance Commission (CVC)?",
      options: [
        { id: 0, text: "Five years", isCorrect: false },
        { id: 1, text: "Six years", isCorrect: false },
        { id: 2, text: "Three years", isCorrect: false },
        { id: 3, text: "Four years", isCorrect: true },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "Which company provided the Automotive Chassis for India's first infectious disease diagnostic lab?",
      options: [
        { id: 0, text: "Maruti Suzuki", isCorrect: false },
        { id: 1, text: "Mahindra & Mahindra", isCorrect: false },
        { id: 2, text: "Bharat Benz", isCorrect: true },
        { id: 3, text: "Ashok Leyland", isCorrect: false },
      ],
    },
    {
      text: "Which Indian state/UT is set to have the world’s largest Covid-19 care facility?",
      options: [
        { id: 0, text: "New Delhi", isCorrect: true },
        { id: 1, text: "Maharashtra", isCorrect: false },
        { id: 2, text: "Gujarat", isCorrect: true },
        { id: 3, text: "Tamil Nadu", isCorrect: false },
      ],
    },
    {
      text: "Indian Railways has signed a memorandum of understanding (MoU) with which organisation for installing video surveillance at over 6000 stations?",
      options: [
        { id: 0, text: "Bharat Sanchar Nigam Ltd", isCorrect: false },
        { id: 1, text: "RailTel", isCorrect: true },
        { id: 2, text: "Reliance Jio", isCorrect: false },
        { id: 3, text: "Airtel", isCorrect: false },
      ],
    },
    {
      text: "Which major technology company launched the second phase of ‘More Together’ campaign in India?",
      options: [
        { id: 0, text: "Amazon", isCorrect: false },
        { id: 1, text: "Microsoft", isCorrect: false },
        { id: 2, text: "Facebook", isCorrect: true },
        { id: 3, text: "Google", isCorrect: false },
      ],
    },
    {
      text: "Union Defence Minister approved to expand which youth service wing to cover border and coastal districts?",
      options: [
        { id: 0, text: "National Service Scheme", isCorrect: false },
        { id: 1, text: "National Cadet Corps", isCorrect: true },
        { id: 2, text: "Bharat Scouts and Guides", isCorrect: false },
        { id: 3, text: "Friends of Police", isCorrect: false },
      ],
    },
    {
      text: "Which organisation has paused the trials of COVID-19 vaccine candidate in India?",
      options: [
        { id: 0, text: "Serum Institute of India", isCorrect: true },
        { id: 1, text: " Ranbaxy India", isCorrect: false },
        { id: 2, text: "Cipla India", isCorrect: false },
        { id: 3, text: " Sun Pharma", isCorrect: false },
      ],
    },
    {
      text: "India has held discussions with which country regarding bilateral cooperation in the financial sector?",
      options: [
        { id: 0, text: "United States", isCorrect: false },
        { id: 1, text: "Bahrain", isCorrect: true },
        { id: 2, text: "Finland", isCorrect: false },
        { id: 3, text: "Jamaica", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const restart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  };

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>India Current Affairs [Nation & States] MCQs</h1>

      {/* 2. Current Score */}
      <h2>Current Score: {score}</h2>

      {showFinalResult ? (
        /* 4. Final Result*/

        <div className="result">
          <h1>Final Result</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restart()}> Restart </button>
        </div>
      ) : (
        /* 3. Question Card*/
        <div className="card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}{" "}
          </h2>
          <h3 className="text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
