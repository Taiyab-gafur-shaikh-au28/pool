import React, { useState } from "react";
import "./App2.css";

function App2() {
  // Property

  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "The ninth Nation’s Cup Boxing Tournament, at which India won six medals, was held in which country?",
      options: [
        { id: 0, text: "Russia", isCorrect: false },
        { id: 1, text: "Serbia", isCorrect: true },
        { id: 2, text: "Kazakhstan", isCorrect: false },
        { id: 3, text: "Nepal", isCorrect: false },
      ],
    },
    {
      text: "Which Indian State/ UT has won the Khelo India Youth Games Champions trophy, 2020?",
      options: [
        { id: 0, text: "Haryana", isCorrect: false },
        { id: 1, text: "Maharashtra", isCorrect: true },
        { id: 2, text: "Gujarat", isCorrect: false },
        { id: 3, text: "Karnataka", isCorrect: false },
      ],
    },
    {
      text: "Christine Sinclair, who recently became the world’s all-time leading goal scorer in football, belongs to which country?",
      options: [
        { id: 0, text: "Brazil", isCorrect: false },
        { id: 1, text: "Italy", isCorrect: false },
        { id: 2, text: "Canada", isCorrect: true },
        { id: 3, text: "Argentina", isCorrect: false },
      ],
    },
    {
      text: "Who is the first team-player to win the ‘Laureus World Sportsman of the year’ award?",
      options: [
        { id: 0, text: "Cristiano Ronaldo", isCorrect: false },
        { id: 1, text: "Lionel Messi", isCorrect: true },
        { id: 2, text: "Kobe Bryant", isCorrect: false },
        { id: 3, text: "Virat Kohli", isCorrect: false },
      ],
    },
    {
      text: "Which Indian University was the winner of the Khelo India University Games 2020?",
      options: [
        { id: 0, text: "Savitribai Phule Pune University", isCorrect: false },
        { id: 1, text: "Panjab University", isCorrect: true },
        { id: 2, text: "Madras University", isCorrect: false },
        { id: 3, text: "Andhra University", isCorrect: false },
      ],
    },
    {
      text: "Which country’s cricket team won the Women’s T20 World Cup 2020?",
      options: [
        { id: 0, text: "India", isCorrect: false },
        { id: 1, text: "England", isCorrect: false },
        { id: 2, text: "Australia", isCorrect: true },
        { id: 3, text: "South Africa", isCorrect: false },
      ],
    },
    {
      text: "Who is the only Indian player to feature in the ICC Women’s T20 World Cup team of the tournament?",
      options: [
        { id: 0, text: "Harmanpreet Kaur", isCorrect: false },
        { id: 1, text: "Shafali Verma", isCorrect: false },
        { id: 2, text: "Poonam Yadav", isCorrect: true },
        { id: 3, text: "Smriti Mandana", isCorrect: false },
      ],
    },
    {
      text: "‘Feifei’, which was recently seen in news, is the mascot released for which famous sports event?",
      options: [
        { id: 0, text: "Summer Olympics", isCorrect: false },
        { id: 1, text: "Asian Games", isCorrect: false },
        { id: 2, text: "Asian Paralympic Games", isCorrect: true },
        { id: 3, text: "World Games", isCorrect: false },
      ],
    },
    {
      text: "Bundesliga, the first tournament to resume after the Covid-19 pandemic, is associated with which sports?",
      options: [
        { id: 0, text: "Basketball", isCorrect: false },
        { id: 1, text: "Football", isCorrect: true },
        { id: 2, text: "Hockey", isCorrect: false },
        { id: 3, text: "Wrestling", isCorrect: false },
      ],
    },
    {
      text: "Who was the head of the International Cricket Council (ICC) cricket committee, which has recommended to ban using saliva to polish the ball?",
      options: [
        { id: 0, text: "Mahela Jayawardena", isCorrect: false },
        { id: 1, text: "Rahul Dravid", isCorrect: false },
        { id: 2, text: "Anil Kumble", isCorrect: true },
        { id: 3, text: "Andrew Strauss", isCorrect: false },
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
    <div className="App2">
      {/* 1. Header */}
      <h1>Sports Current Affairs MCQs</h1>

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

export default App2;
