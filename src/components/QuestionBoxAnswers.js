import React from "react";

const QuestionBoxAnswers = ({ question, correct, questionId, tip }) => {
  return (
    <div className="questionBox">
      {/* Question */}
      <div className="question">{question}</div>
      {/* Correct answer */}
      <button key={questionId} className="answerBtn green">
        {correct}
      </button>
      <div className="question">{tip}</div>
    </div>
  );
};

export default QuestionBoxAnswers;
