import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      {/* Question */}
      <div className="question">{question}</div>

      {/* Answer Buttons */}
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn orange"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
