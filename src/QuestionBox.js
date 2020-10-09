import React, { useState } from "react";

const QuestionBox = ({ question, options, selected, updateClick }) => {
  const [answer, setAnswer] = useState(options);
  // const [isDisabled, setButton] = useState(false);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            //Disable button
            // setButton(true);
            setAnswer([text]);
            selected(text);
          }}
          disabled={isDisabled}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
